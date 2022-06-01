<script>
  import { supabase } from "$lib/supabaseClient";
  export let data;
  import SvelteMarkdown from "svelte-markdown";
import ArticleDisplay from "../../components/ArticleDisplay.svelte";

  let liked = false;
  let likeButtonText = "Like";

  const addLike = async () => {
    likeButtonText = "Sending Like 📤";
    try {
      let { error, ...entry } = await supabase
        .from("blog")
        .update({ likes: data.likes + 1 })
        .match({ id: data.id });
      likeButtonText = "Like Sent 💖";
      liked = true;
    } catch (error) {
      likeButtonText = `${error.message}`;
    }
  };
</script>

<div class="blog-container">
  <h1 style="text-align:center">{data.title}</h1>
  <p style="text-align:center">
    Published on {data.created_at} by {data.author}
  </p>
  <img
    class="display-picture"
    src={data.display_photo}
    alt={`display photo for "${data.title}"`}
  />

  <ArticleDisplay source={data.body}/>
</div>

<button on:click={addLike} class="like-button" disabled={liked}>{likeButtonText}</button>

<style>
  .blog-container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }
  img.display-picture {
    max-width: 75%;
    display: block;
    margin: 0 auto;
  }
  .like-button {
    width: 100%;
  }

  @media all and (max-width: 500px) {
    .blog-container {
      width: 100%;
    }
    img.display-picture {
      max-width: 100%;
      max-height: 300px;
      display: block;
      margin: 0 auto;
    }
  }
</style>
