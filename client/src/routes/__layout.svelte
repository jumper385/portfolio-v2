<script>
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
</script>

<svelte:head>
  <link rel="stylesheet" href="normalize.css" />
  <link rel="stylesheet" href="global.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <link
    rel="stylesheet"
    href="https://cdn.rawgit.com/dreampulse/computer-modern-web-font/master/fonts.css"
  />
</svelte:head>

<Navbar />

<div>
  <slot />
</div>

<Footer />

<style>
</style>
