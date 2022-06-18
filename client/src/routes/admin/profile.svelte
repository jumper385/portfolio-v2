<script>
  import { supabase } from "$lib/supabaseClient";
  import { user, fileUpload } from "$lib/sessionStore";

  let profile = {};
  let password = {};
  let loading = false;
  let updateButtonText = "Update Profile ⬆️"

  async function getProfile() {
    try {
      loading = true;
      const user = supabase.auth.user();
      console.log(user);
      let { data, error, status } = await supabase
        .from("profiles")
        .select()
        .eq("id", user.id)
        .single();
      if (error && status !== 406) throw error;

      console.log(data);

      if (data) {
        profile = { ...profile, ...data, last_updated: new Date()};
      }

      console.log(profile);
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
    }
  }

  async function updateProfile() {
    try {
      loading = true;
      updateButtonText = "Updating ⌛"
      const user = supabase.auth.user();

      if (password.newPassword && password.newPassword == password.confirmPassword) {
        let { error: updateError, ..._ } = await supabase.auth.update({
          password: password.newPassword,
        });
        if (updateError) throw updateError;
      }

      let { data: profileUpdate, error: profileError } = await supabase
        .from("profiles")
        .upsert(profile);
      if (profileError) throw profileError;

      console.log(profileUpdate);
      updateButtonText = "Updated Profile 😎"
    } catch (error) {
      alert(error.message);
      updateButtonText = `Error 🥵: ${error.message}`
    } finally {
      loading = false;
      updateButtonText = "Updated Profile 😎"
    }
  }

  async function signOut() {
    try {
      loading = true;
      let { error } = await supabase.auth.signOut();
      user.set()
      goto('/')
      if (error) throw errors
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
    }
  }
</script>

{#if $user}
  <form use:getProfile on:submit|preventDefault={updateProfile}>
    <div class="form-row">
      <div class="form-element">
        <label for="first name">First Name</label>
        <input name="first name" type="text" bind:value={profile.firstName} />
      </div>
      <div class="form-element">
        <label for="last name">Last Name</label>
        <input name="last name" type="text" bind:value={profile.lastName} />
      </div>
      <div class="form-element">
        <label for="birthday">birthday</label>
        <input type="date" bind:value={profile.birthday} />
      </div>
    </div>
    <div class="form-row">
      <div class="form-element">
        <label for="email">E-Mail</label>
        <input name="email" type="text" bind:value={$user.email} disabled />
      </div>
    </div>
    <div class="form-row">
      <div class="form-element">
        <label for="new password">New Password</label>
        <input type="password" bind:value={password.newPassword} />
      </div>
      <div class="form-element">
        <label for="confirm password"
          >Confirm Password {password.newPassword === password.confirmPassword
            ? "[matching]"
            : "[mismatched]"}</label
        >
        <input type="password" bind:value={password.confirmPassword} />
      </div>
    </div>
    <div class="form-row">
      <div class="form-element">
        <input type="submit" value={updateButtonText} />
      </div>
      <div class="form-element">
        <button on:click={signOut}>Log-Out</button>
      </div>
    </div>
  </form>
{:else}
  <p>We've a problem here...</p>
{/if}

<style>
  form {
    max-width:960px;
    margin:0 auto;
  }
  .form-row {
    margin-top: 12pt;
    width: 100%;
    display: flex;
    gap: 12pt;
    justify-content: space-between;
  }
  .form-row > .form-element {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: none;
  }
  @media all and (max-width: 500px) {
    .form-row {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
</style>
