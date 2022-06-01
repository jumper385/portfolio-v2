<script>
  export let href = "";
  export let title = undefined;
  export let text = "";
</script>

<div>
    <img src={href} title alt={text}>
    <p class="figure-caption">{text}</p>
</div>

<style>
    img {
        max-width: 100%;
        max-height:600px;
        display:block;
        margin:0 auto;
    }
    .figure-caption {
        font-size:9pt;
        text-align: center;
        font-style: italic;
        color:#bdbdbd;
    }

    @media all and (max-width:500px){
        img {
            max-width:100%;
            max-width: 300px;
        }
    }
</style>