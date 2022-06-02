<script>
  import {user} from '$lib/sessionStore'
</script>

<footer>
  <p>© Digism Design {new Date().getFullYear()}</p>
  <a href="/media">Media</a>
  {#if !$user}
    <a href="/admin/login">Login</a>
  {/if}
  {#if $user}
    <a href="/upload">Upload File</a>
    <a href="/admin/writeup">Create a Blog Article</a>
  {/if}
</footer>

<style>
    footer {
        text-align: center;
    }
</style>