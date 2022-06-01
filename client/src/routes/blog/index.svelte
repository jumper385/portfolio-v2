<script>
  import { supabase } from "$lib/supabaseClient";
  const blogItems = async () => {
    return supabase.from("blog");
  };
</script>

<title>Blog</title>

<div class="blog-container">
    {#await blogItems()}
      loading...
    {:then { data }}
      {#each data as item}
        <div class="blog-entry">
          <img src={item.display_photo} alt={`display photo for "${item.title}"`} />
          <a href="/blog/{item.id}">
              <h2>[{item.title}]</h2>
          </a>
        </div>
      {/each}
    {/await}
</div>

<style>

  .blog-entry {
    display:flex;
    flex-direction: column;
    align-items: center;
  }

  .blog-entry > img {
    max-width: 300px;
    max-height: 300px;
  }

  .blog-container {
      display:grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-row-gap: 24pt;
  }

  @media all and (max-width: 500px) {
    .blog-container {
        display: grid;
        grid-template-columns: 1fr;
    }
  }

</style>
