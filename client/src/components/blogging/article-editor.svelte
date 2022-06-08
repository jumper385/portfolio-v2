<script>
    import { blogArticle } from "$lib/sessionStore";
</script>

<div class="form-row">
  <div class="form-element">
    <label for="title">Title</label>
    <input name="title" type="text" bind:value={$blogArticle.title} />
  </div>
</div>
<div class="form-row">
  <div class="form-element">
    <label for="display photo">Display Photo [Link]</label>
    <input name="display photo" type="text" bind:value={$blogArticle.display_photo} />
  </div>
  <div class="form-element">
    <label for="short title">Short Title</label>
    <input name="short title" type="text" bind:value={$blogArticle.short_title} />
  </div>
</div>
<div class="form-row">
  <div class="form-element">
    <label for="body">Body</label>
    <textarea
      style="height:300pt; resize:vertical; width:100%"
      type="text"
      bind:value={$blogArticle.body}
    />
  </div>
</div>
