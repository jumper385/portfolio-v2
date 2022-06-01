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
        <img
          src={item.display_photo}
          alt={`display photo for "${item.title}"`}
        />
        <div class='info-holder'>
          <a href="/blog/{item.id}">
            <p>[{item.title}]</p>
          </a>
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

  .blog-entry > img {
    max-width: 100%;
    max-height: 300px;
  }

  .blog-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 24pt;
    grid-column-gap: 24pt
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
    }
  }
</style>
