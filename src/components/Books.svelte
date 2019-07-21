<script>
    import Book from './Book.svelte';
    import { db } from './../firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';

    // User ID passed from parent
    export let uid;
    let openedBook;

    const collection = db.collection('books');

    // Query requires an index, see screenshot below
    const query = collection.orderBy('title');

    const books = collectionData(query, 'id').pipe(startWith([]));

    const openBook = (book) => openedBook = book;
    const closeBook = () => openedBook = false;
</script>

<style>
    ul {
        padding: none;
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>

{#if openedBook}
<button on:click={closeBook}>Close {openedBook.title}</button>
{:else}
<ul>
    {#each $books as book}
    <li>
        <Book {...book, {onClick: openBook.bind(openBook, book)}}/>
    </li>
    {/each}
</ul>
{/if}
