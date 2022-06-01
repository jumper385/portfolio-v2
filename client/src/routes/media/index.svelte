<script>
  import { supabase } from "$lib/supabaseClient";
  const getMediaList = async () => {
    let { data, error } = await supabase.storage
      .from("photos")
      .list("blog-photos", {
        limit: 100,
      });

    if (data.length > 0 && !error) {
      const outData = await Promise.all(
        data.map(async (photo) => {
          let photoObject = await supabase.storage
            .from("photos")
            .getPublicUrl(`blog-photos/${photo.name}`);
          return {
            ...photo,
            ...photoObject.data,
          };
        })
      );

      return outData;
    }
  };
</script>

<title>Media</title>

{#await getMediaList()}
  <p>loading...</p>
{:then data}
  <div class="img-container">
      {#each data as photoObject}
        <div class='photo-card'>
            <img src={photoObject.publicURL} alt="">
            <p><a href={photoObject.publicURL}>[{photoObject.name}]</a></p>
        </div>
      {/each}
  </div>
{/await}

<style>
    .img-container {
        margin-top:24pt;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width:100%;
        grid-column-gap: 24pt;
        grid-row-gap: 24pt;
    }
    .photo-card {
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    .photo-card > img {
        width:300px;
    }
    @media all and (max-width:500px){
        .photo-card > img {
            max-height:300pt;
            max-width: 100%;;
        }
        .img-container {
            grid-template-columns: 1fr;
        }
    }
</style>