<script>
  import {user} from '$lib/sessionStore'
</script>

<nav>
  <a class="logo" href="/"
    ><img
      src="/logo-min.png"
      alt="gold metal ball and blue metal ball behind it"
    /></a
  >
  <div class='link-container'>
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
    <a href="/contact">Contact</a>
    {#if $user}
      <a href='/admin/profile'>Profile</a>
    {/if}
  </div>
  <div class="socials-container">
    <a href="https://www.linkedin.com/in/chenry2000/"><i class="socials fa-brands fa-linkedin" /></a>
    <a href="https://github.com/jumper385"><i class="socials fa-brands fa-github-alt" /></a>
    <a href="https://www.instagram.com/chenryhen384/"><i class="socials fa-brands fa-instagram" /></a>
  </div>
</nav>

<style>
  nav {
    display:flex;
    flex-direction: column;
    gap:12pt;
    font-size:medium;
    align-items: center;
    margin: 24pt 0;
  }
  .logo > img{
    width:64pt;
  }
  .link-container {
    display: flex;
    gap:24pt;
    text-transform: uppercase;
  }
  .link-container > a {
    font-weight:600;
    text-decoration: none;
    color:black;
    letter-spacing: 0.12em;
  }
  .socials-container {
    display: flex;
    gap:24pt;
  }
  .socials-container > a{
    font-size: x-large;
    color: #264653
  }
</style>

