<script>
  import { supabase } from "$lib/supabaseClient";
  const blogItems = async () => {
    return supabase.from("blog").select("*").order('created_at', {ascending:false});
  };
</script>

<title>Blog</title>

<div class="blog-container">
  {#await blogItems()}
    loading...
  {:then { data }}
    {#each data as item}
      <div class="blog-entry">

        <div style="padding:12pt; box-sizing: 0 auto; text-align:center;" class="card-heading">
          <p>{item.title}</p>
        </div>

        <a href="/blog/{item.id}">
          <img
            src={item.display_photo}
            alt={`display photo for "${item.title}"`}
          />
        </a>
        
        <div class='info-holder'>
          <p>{(new Date(item.created_at)).getDate()}/{(new Date(item.created_at)).getMonth()}/{(new Date(item.created_at)).getFullYear()}</p>
          <p><i class="fa-solid fa-thumbs-up" /> {item.likes}</p>
        </div>
      </div>
    {/each}
  {/await}
</div>

<style>

  .blog-entry {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .blog-entry > a > img {
    max-width: 100%;
    max-height: 300px;
  }

  .blog-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 24pt;
    grid-column-gap: 24pt;
    margin:24pt 64pt;
  }

  .info-holder {
    padding: 0 12pt;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  @media all and (max-width: 500px) {
    .blog-container {
      display: grid;
      grid-template-columns: 1fr;
      margin:0;
    }
  }
</style>
