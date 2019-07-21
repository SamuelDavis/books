<script>
    import Book from './Book.svelte';
    import { db } from './../firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';

    // User ID passed from parent
    export let uid;

    // Form Text
    let text = 'some task';

    const collection = db.collection('books');

    // Query requires an index, see screenshot below
    const query = collection.orderBy('title');

    const books = collectionData(query, 'id').pipe(startWith([]));
</script>

<ul>
    {#each $books as book}
        <Book {...book} />
    {/each}
</ul>
