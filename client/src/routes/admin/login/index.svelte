<script>
    import {supabase} from '$lib/supabaseClient'
    let loading = false
    let login = {
        email: "",
    }
    const onLogin = async () => {
        loading = true
        try {
            const {error, ...remaining} = await supabase.auth.signIn(login)
            console.log(remaining)
            if (error) throw error
            alert(`check your emails: ${login.email}`)
        } catch (error) {
            alert(error.error_description || error.message)
        } finally {
            loading = false
        }
    }
</script>

<form on:submit|preventDefault={onLogin}>
  <div class="form-row">
    <div class="form-element">
      <label for="email">E-mail</label>
      <input type="email" name="email" bind:value={login.email} required />
    </div>
  </div>
  <div class="form-row">
    <div class="form-element">
      <input type="submit" value={loading ? "Verifying...":"Send Magic Link"} required />
    </div>
  </div>
</form>

<style>
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
