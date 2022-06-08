<script>
    import {supabase} from '$lib/supabaseClient'
    import {goto} from '$app/navigation'

    let loggingIn = false

    let login = {
        email:"",
        password:""
    }

    const signup = async () => {
        loggingIn = true

        try {
            const {error, user, session} = await supabase.auth.signIn(login)
            if (error) throw error
            goto('/admin/profile')
        } catch (error) {
            alert(`Error!: ${error.message}`)
        } finally {
            loggingIn = false
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
        <div class="form-element"><input type="submit" value={loggingIn ? "Logging In 🐈" : "Login"}></div>
    </div>
</form>