<script>
  import {supabase} from '$lib/supabaseClient'
  import {blogDraft} from "$lib/sessionStore"
  import ArticleDisplay from "../../../components/ArticleDisplay.svelte";
import FileUpload from '../../../components/FileUpload.svelte';
  
  let preview = false;
  let submitButtonText = "Submit"

  const handleSubmit = async () => {
    submitButtonText = "Uploading new Blog 🥳"
    try {
      let {data, error} = await supabase.from('blog').insert([
        $blogDraft
      ])
      if (error) {
        throw error
      }
      console.log(data)
    submitButtonText = "Uploaded"
    } catch (error) {
      submitButtonText = error.message
    }
  }

</script>

<title>Writeup</title>

<div class="form-row">
  <div class="form-element">
    <label for="body">Preview Article</label>
    <input type="checkbox" bind:checked={preview} />
  </div>
</div>

<div class="editor" style="grid-template-columns: 1fr {preview ? "1fr" : "0fr"}">
  <form on:submit|preventDefault={handleSubmit}>
    <div class="form-row">
      <div class="form-element">
        <label for="title">Title</label>
        <input type="text" bind:value={$blogDraft.title} required>
      </div>
    </div>
  
    <div class="form-row">
      <div class="form-element">
        <label for="short-title">Short Title</label>
        <input type="text" bind:value={$blogDraft.short_title}>
      </div>
  
      <div class="form-element">
        <label for="author">Author</label>
        <input type="text" bind:value={$blogDraft.author} required>
      </div>
    </div>
  
    <div class="form-row">
      <div class="form-element">
        <label for="body">Body</label>
        <textarea name="body" bind:value={$blogDraft.body} required/>
      </div>
    </div>

    <div class="form-row">
      <div class="form-element">
        <input type="submit" value={submitButtonText}>
      </div>
    </div>
  </form>
  
  {#if preview}
  <div class="form-element">
    <label style="color:#bfbfbf; font-style:italic" for="preview">Preview</label>
    <ArticleDisplay source={$blogDraft.body} />
  </div>
  {/if}
</div>

<FileUpload />

<style>
  .form-row {
    margin-top: 12pt;
    width: 100%;
    display: flex;
    gap: 12pt;
    justify-content: space-between;
  }
  .form-row > .form-element {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: none;
  }
  .editor {
    display:grid;
    grid-column-gap: 12pt;
  }
  textarea {
    height:200pt;
  }
  @media all and (max-width: 500px) {
    .form-row {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .editor {
      display:flex;
      flex-direction: column;
      gap:12pt;
    }
    textarea {
      height:150pt;
    }
  }
</style>