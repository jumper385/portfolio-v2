<script>
  export let blogPhotos
</script>

<title>Media</title>
<h1>Media</h1>

<div class="image-gallery">
  {#each blogPhotos as photos}
    <div class='image-card'>
      <img src={photos.publicURL} alt={blogPhotos.name}/>
      <p><a href={photos.publicURL}>[{photos.name}]</a></p>
    </div>
  {/each}
</div>

<style>
  .image-gallery {
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-column-gap:24pt;
    grid-row-gap:24pt;
    text-align:center;
  }
  .image-card > img{
    width:100%;
  }
  @media all and (max-width:500px) {
    .image-gallery {
      grid-template-columns: 1fr;
    }
  }
</style>