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
  <div>
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
  .logo > img {
    height: 64pt;
  }

  nav {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    gap:12px
  }

  .socials {
    font-weight: 400;
    font-size: 24pt;
    line-height: 24pt;
    color: #264653;
  }

  .socials-container {
    display: flex;
    gap: 24px;
  }

  @media all and (max-width: 300px) {
    nav {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      align-items: center;
      gap: 24px;
    }
  }
</style>

