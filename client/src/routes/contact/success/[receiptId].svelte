<script>
    import {page} from '$app/stores'
    let isCopied = false
    let copiedText = "Click to Copy"
    const copy2clipboard = () => {
        navigator.clipboard.writeText($page.params.receiptId)
        copiedText = "Saved to Clipboard"
        isCopied = true;
    }
</script>

<h1>Success! ✅</h1>
<p>Copy your reference code for future use</p>
<p>{$page.params.receiptId}</p>
<button on:click={copy2clipboard} >{copiedText}</button>
<p>return <a href="/">[home]</a></p>