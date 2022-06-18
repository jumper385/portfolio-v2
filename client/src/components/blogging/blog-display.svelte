<script>
  import ArticleDisplay from "../ArticleDisplay.svelte";
  export let data;
</script>

<title>{data.title}</title>

<div class="blog-container">
    <h1 style="text-align:center">{data.title}</h1>
    <p style="text-align:center">{data.created_at}</p>
    <div class="photo-container">
      <img
        class="display-photo"
        style="width:100%"
        src={data.display_photo}
        alt={data.short_title}
      />
    </div>
    <ArticleDisplay source={data.body} />
</div>

<style>
  .blog-container {
    max-width:960px;
    margin:0 auto;
  }
  .photo-container {
    width:100%;
    display: flex;
    align-items: center;
  }
  .display-photo {
    max-width:960px;
    margin:0 auto;
    width:100%;
  }
</style>
