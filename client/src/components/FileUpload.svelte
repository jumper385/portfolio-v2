<script>
    import {supabase} from '$lib/supabaseClient'
  import { fileUpload } from "$lib/sessionStore";
  
  let isUploading = false
  let uploadText = "Upload File"

  const handleUpload = async () => {
      isUploading = true
    try {
      if ($fileUpload) {
        console.log($fileUpload[0])
        let {data, error} = supabase.storage.from('photos').upload(`blog-photos/${$fileUpload[0].name}`, $fileUpload[0])
        if (error) throw error
      }
    } catch (error) {
      console.log(error)
    }
  }
</script>

<div>
  <form on:submit|preventDefault={handleUpload}>
    <input type="file" bind:files={$fileUpload} />
    <input type="submit" multiple="false" />
  </form>
</div>
