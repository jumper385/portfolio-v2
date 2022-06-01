<script>
  import SvelteMarkdown from "svelte-markdown";
import Image from "../renderers/Image.svelte";
  export let source
</script>

<div class="markdown-body">
  <SvelteMarkdown
    renderers={{
      image: Image,
    }}
    {source}
  />
</div>
