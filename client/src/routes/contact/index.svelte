<script>
    import {supabase} from '$lib/supabaseClient'
    import {goto} from '$app/navigation'

    let submitText = 'Submit'

    let messageBody = {
        firstName:"",
        lastName:"",
        email:"",
        subject:"",
        body:"",
    }

    const formSubmit = async () => {
        let submission = await supabase.from('inquiries').insert(messageBody).single()
        if (submission.status == 201) {
            messageBody = {}
            goto(`/contact/success/${submission.data.id}`)
        } else {
            console.log(submission)
            submitText = `${submission.status}: ${submission.error.message}`
        }
    }
</script>

<title>Contact</title>

<form on:submit|preventDefault={formSubmit}>
    <div class="form-row">
        <div class="form-element">
            <label for="first name">First Name</label>
            <input type="text" name="first name" bind:value={messageBody.firstName} required/>
        </div>
    
        <div class="form-element">
            <label for="last name">Last Name</label>
            <input type="text" name="last name" bind:value={messageBody.lastName} required/>
        </div>
    
        <div class="form-element">
            <label for="email">E-mail</label>
            <input type="email" name="email" bind:value={messageBody.email} required/>
        </div>
    </div>
    
    <div class="form-row">
        <div class="form-element">
            <label for="subject">Subject</label>
            <input type="text" name="subject" bind:value={messageBody.subject} required/>
        </div>
    </div>
    
    <div class="form-row">
        <div class="form-element">
            <label for="body">Body</label>
            <textarea type="text" name="body" bind:value={messageBody.body} required/>
        </div>
    </div>
    
    <div class="form-row">
        <div class="form-element">
            <input type="submit" bind:value={submitText}/>
        </div>
    </div>
</form>

<style>
    form {
        max-width: 960px;
        margin: 0 auto;
    }
    @media all and (max-width:500px) {
        form {
            padding:12pt;
            box-sizing: border-box;
        }
    }
</style>