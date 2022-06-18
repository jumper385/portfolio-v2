<script>
  import { supabase } from "$lib/supabaseClient";
  import { user } from "$lib/sessionStore";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
  import { goto } from "$app/navigation";

  user.set(supabase.auth.user());

  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event);
    switch (event) {
      case "PASSWORD_RECOVERY":
        console.log(session, "recovering...");
      case "SIGNED_OUT":
        goto("/");
      default:
        user.set(session.user);
    }
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="normalize.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;740&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdn.rawgit.com/dreampulse/computer-modern-web-font/master/fonts.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <link rel="stylesheet" href="global.css" />
</svelte:head>

<Navbar />

<div>
  <slot />
</div>

<Footer />

<style>
</style>
