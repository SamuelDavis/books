<script>
	import { db } from './../firebase';
	import { collectionData } from 'rxfire/firestore';
	import { startWith } from 'rxjs/operators';

	export let bookId

	const query = db
		.collection('blocks')
		.orderBy('bookId')
		.orderBy('page')
		.orderBy('index')
		.limit(10000);
	const blocks = collectionData(query, 'id').pipe(startWith([]));
</script>

<style>
	h5 {
		margin-left: 15%;
		margin-right: 15%;
		text-align: center;
	}
	p {
		text-indent: 1em;
	}
</style>

{#each $blocks as block}
{#if block.type === 'p'}
<p>{block.text}</p>
{:else if block.type === 'h5'}
<h5>{block.text}</h5>
{/if}
{/each}
