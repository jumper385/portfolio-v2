<script>
  import { supabase } from "$lib/supabaseClient";
  import { fileUpload } from "$lib/sessionStore";

  let isUploading = false;
  let uploadText = "Upload File";
  let uploadSuccess = false;
  let fileLink = "";
  let uploadFileName;

  let isCopied = false;
  let copyButtonText = "Press to Copy";

  const handleUpload = async () => {
    isUploading = true;
    uploadText = "Uploading File 🤭";

    try {
      if ($fileUpload) {
        // Grab File Settings
        uploadSuccess = false;
        let file = $fileUpload[0];
        let fileExt = file.type.split("/")[1];
        let formattedFileName = uploadFileName.replace(/\s+/g, "_");
        let fileName = `blog-photos/${formattedFileName}.${fileExt}`;
        console.table({
          file,
          fileExt,
          fileName,
        });

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
    try {
      let markdownText = `![__caption__](${fileLink})`;
      let { copyError } = navigator.clipboard.writeText(markdownText);
      if (copyError) throw error;
      isCopied = true;
      copyButtonText = "Copied 🐨";
    } catch (error) {
      console.log(error);
      copyButtonText = error.message;
    }
  };
</script>

<div>
  <form on:submit|preventDefault={handleUpload}>
    <div class="form-row">
      <div class="form-element">
        <label for="name">File Name</label>
        <input type="text" bind:value={uploadFileName} required />
      </div>
    </div>

    <div class="form-row">
      <div class="form-element">
        <label for="file upload">File Upload</label>
        <input type="file" bind:files={$fileUpload} required />
      </div>
    </div>

    <div class="form-row">
      <div class="form-element">
        <input
          type="submit"
          multiple="false"
          value={uploadText}
          disabled={isUploading}
        />
      </div>
    </div>
  </form>

  {#if uploadSuccess}
    <p>Link: <a href={fileLink}>Image Link</a></p>
    <p>
      Markdown Code: <span>
        <pre>{`![__caption__](${fileLink})`}</pre>
      </span>
      <button on:click={copyMarkdownToClipboard}>{copyButtonText}</button>
    </p>
  {/if}
</div>
