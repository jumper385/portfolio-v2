<script>
  import BlogDisplay from "../../components/blogging/blog-display.svelte";
  import { user, blogArticle } from "$lib/sessionStore";
  import BlogEditor from "../../components/blogging/blog-editor.svelte";
import ArticleEditor from "../../components/blogging/article-editor.svelte";

  export let data;
  
  let showPreview = false;
</script>

{#if !$user}
  <BlogDisplay {data} />
{:else}
  <BlogEditor {data}/>
{/if}
