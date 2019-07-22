<script>
    export let id;
    export let title;
    export let author;
    export let publishedAt;
    export let onClick;
</script>

<style>
    button {
        text-align: left;
    }
    h1 {
        margin: 0
    }
</style>

<button on:click={onClick}>
    <h1>{title}</h1>
    <small>by {author} ({publishedAt})</small>
</button>
