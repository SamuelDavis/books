<script>
	import Toolbar from './Toolbar.svelte';
	import Books from './Books.svelte';
	import { auth, googleProvider } from './../firebase';
	import { authState } from 'rxfire/auth';
	import { getFirebase } from './../storage';

	let user;

	const unsubscribe = authState(auth).subscribe(u => user = u);

	function copyLink() {
		const input = document.createElement('input');
		input.value = storage.getFirebase(true);
		document.body.appendChild(input);
		input.select();
		document.execCommand("copy");
		document.body.removeChild(input);
		alert("Url copied.");
	}
</script>

<style>
	:global(button) {
		cursor: pointer;
	}
	section {
		margin: 1em;
	}
</style>

<Toolbar {user}/>
<hr>
<section>
	<Books {...user}/>
</section>
