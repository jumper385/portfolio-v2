<script>
  import {user} from '$lib/sessionStore'
  import {supabase} from '$lib/supabaseClient'
  user.set(supabase.auth.user());

  supabase.auth.onAuthStateChange((_, session) => {
    user.set(session.user);
  });
</script>

<title>Home</title>
<section class="landing-container">
  <img
    class="landing-img"
    src="/dissasembled-fsk-min.png"
    alt="exploded view of a pcb module"
  />

  <div class="landing-description">
    <h1>chenry</h1>
    <p>
      Electronics engineer with 6 years experinece in the Biomedical, Aerospace,
      automotive and Resources industry
    </p>
    <a href="/cases">View my Work</a>
  </div>
</section>

<section class="profile-description">
  <img
    class="profile-picture"
    src="/profile-picture-square-min.JPG"
    alt="sum azn guy"
  />
  <div>
    <h1>I'm Henry</h1>
    <p>Electron Resource Manager at VitalTrace</p>
    <p>BSc Electrical/Electronics Engineering & Management (UWA)</p>
    <p>
      I am a UWA Electrical Engineering and Management undergraduate with six
      years of experience in electronics (Analog, Embedded RF and Mix Signal),
      machine learning, web development and mechatronic design. I currently work
      at VitalTrace as an Undergraduate Electronics Engineer. I seek to combine
      electronics and industrial design to intuitively enhance the human
      experience.
    </p>
  </div>
</section>

<style>
  .landing-img {
    width: 100%;
  }
  .landing-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
  }

  .profile-description {
    width: 100%;
    text-align: center;
  }

  img.profile-picture {
    width: 33%;
    margin: 0 auto;
    border-radius: 12pt;
  }

  .landing-description {
    width: 100%;
  }

  @media all and (max-width: 500px) {
    .landing-img {
      width: 100%;
    }
    img.profile-picture {
      width: 33%;
    }
  }
</style>
