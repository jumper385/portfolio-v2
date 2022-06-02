<script>
  import { supabase } from "$lib/supabaseClient";
  import { fileUpload } from "$lib/sessionStore";
  import { nanoid } from "nanoid";

  let isUploading = false;
  let uploadText = "Upload File";
  let uploadSuccess = false;
  let fileLink = "";
  let isCopied = false;

  const handleUpload = async () => {
    isUploading = true;
    uploadText = "Uploading File 🤭";

    try {
      if ($fileUpload) {

        // Grab File Settings
        uploadSuccess = false;
        let file = $fileUpload[0];
        let fileExt = file.type.split("/")[1];
        let fileName = `blog-photos/${nanoid()}.${fileExt}`;
        console.log(file, fileExt, fileName)

        //Upload File
        let { data, error } = supabase.storage
          .from("photos")
          .upload(fileName, file);
        if (error) throw error;
        fileUpload.set({});

        // Update Display Elements
        uploadText = "Uploaded!!! 😎";
        isUploading = false;
        uploadSuccess = true;

        // Grab Link to Upload
        let { data: urlData, error: linkError } = supabase.storage
          .from("photos")
          .getPublicUrl(fileName);
        if (linkError) throw linkError;
        fileLink = urlData.publicURL;
        isCopied = false;
      }
    } catch (error) {
      uploadSuccess = false;
      uploadText = `Error 🐸: ${error.message}`;
      console.log(error);
    }
  };

  const copyMarkdownToClipboard = async () => {
    let markdownText = `![__caption__](${fileLink})`
    navigator.clipboard.writeText(markdownText)
    isCopied = true
  }
</script>

<div>
  <form on:submit|preventDefault={handleUpload}>
    <input type="file" bind:files={$fileUpload} />
    <input
      type="submit"
      multiple="false"
      value={uploadText}
      disabled={isUploading}
    />
  </form>
  {#if uploadSuccess}
    <p>Link: <a href={fileLink}>Image Link</a></p>
    <p>
      Markdown Code: <span>
        <pre>{`![__caption__](${fileLink})`}</pre>
      </span>
      <button on:click={copyMarkdownToClipboard}>{isCopied ? "Copied" : "Press to Copy"}</button>
    </p>
  {/if}
</div>
