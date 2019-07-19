<script>
    import Block from './Block.svelte';

    export let id;
    export let title;
    export let author;
    export let publishedAt;
    export let blocks;
</script>

<style>
    h1 {
        text-align: center;
    }
    small {
        margin-left: 65%;
        text-align: right;
    }
</style>

<div id="{id}">
    <h1>{title}</h1>
    <small>{author}</small>
    {#each blocks as block}
        <Block {...block} />
    {/each}
</div>
