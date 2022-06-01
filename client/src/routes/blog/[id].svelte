<script>
  export let data;
  import SvelteMarkdown from "svelte-markdown";
    import Image from "../../renderers/Image.svelte";
</script>

<div class='blog-container'>
  <h1 style="text-align:center">{data.title}</h1>
  <p style="text-align:center">Published on {data.created_at} by {data.author}</p>
  <img class="display-picture" src={data.display_photo} alt={`display photo for "${data.title}"`} />

  <div class="markdown-body">
      <SvelteMarkdown renderers={{
          image:Image
      }} source={data.body}/>
  </div>

</div>

<style>
    .blog-container {
        width:960px;
        max-width: 960px;
        margin:0 auto;
    }
    img.display-picture {
        max-width: 75%;
        display:block;
        margin: 0 auto;
    }

    @media all and (max-width:500px){
        .blog-container {
            width:100%;
        }
        img.display-picture {
        max-width: 100%;
        max-height:300px;
        display:block;
        margin: 0 auto;
    }
    }
</style>