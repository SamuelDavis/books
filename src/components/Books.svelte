<script>
    import ClosedBook from './ClosedBook.svelte';
    import OpenBook from './OpenBook.svelte';
    import { db } from './../firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';

    export let uid;
    let openedBook;

    const query = db
        .collection('books')
        .orderBy('title')
        .limit(10000);
    const books = collectionData(query, 'id').pipe(startWith([]));

    const openClosedBook = (book) => openedBook = book;
    const closeClosedBook = () => openedBook = false;
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
<button on:click={closeClosedBook}>Close {openedBook.title}</button>
<OpenBook {...{bookId: openedBook.id}}/>
{:else}
<ul>
    {#each $books as book}
    <li>
        <ClosedBook {...book, {onClick: openClosedBook.bind(openClosedBook, book)}}/>
    </li>
    {/each}
</ul>
{/if}
