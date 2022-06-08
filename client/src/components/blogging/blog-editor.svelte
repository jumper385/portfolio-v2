<script>
  import BlogDisplay from "./blog-display.svelte";
  import { blogArticle } from "$lib/sessionStore";
  import ArticleEditor from "./article-editor.svelte";
  import { supabase } from "$lib/supabaseClient";

  export let data;
  blogArticle.set(data);
  let showPreview = false;

  let loading = false;
  let submitText = "Update Blog";

  const updateBlog = async () => {
    loading = true;
    try {
      submitText = "Submitting Updates 🧑‍💻";
      let {
        error,
        status,
        data: submitData,
      } = await supabase.from("blog").update($blogArticle).eq("id", data.id);
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    } finally {
      loading = true;
      submitText = "Updated your Article 🍑";
    }
  };
</script>

<div class="form-row">
  <div class="form-element">
    <label for="preview">Editor Preview</label>
    <input type="checkbox" bind:checked={showPreview} />
  </div>
</div>
<div class="editor-container">
  <form style="width:100%;" on:submit|preventDefault={updateBlog}>
    <ArticleEditor />
    <div class="form-row">
      <div class="form-element"><input type="submit" value={submitText}/></div>
    </div>
  </form>
  {#if showPreview}
    <BlogDisplay data={$blogArticle} />
  {/if}
</div>

<style>
  .editor-container {
    display: flex;
    flex-direction: row;
    gap: 24pt;
  }
  @media all and (max-width: 500px) {
    .editor-container {
      display: flex;
      flex-direction: column;
      gap: 24pt;
    }
  }
</style>
