<script>
    import {supabase} from '$lib/supabaseClient'

    let signingUp = false

    let login = {
        email:"",
        password:""
    }
    const signup = async () => {
        signingUp = true

        try {
            const {error, user, session} = await supabase.auth.signUp(login)
            if (error) throw error
            console.log(user, session)
        } catch (error) {
            alert(`Error!: ${error.message}`)
        } finally {
            signingUp = false
        }

    }
</script>

<form on:submit|preventDefault={signup}>
    <div class="form-row">
        <div class="form-element">
            <label for="email">E-Mail</label>
            <input type="email" bind:value={login.email}/>
        </div>
    </div>
    
    <div class="form-row">
        <div class="form-element">
            <label for="password">Password</label>
            <input type="password" bind:value={login.password} />
        </div>
    </div>
    <div class="form-row">
        <div class="form-element"><input type="submit" value={signingUp ? "Signing you up ✒️" : "Signup"}></div>
    </div>
</form>