<script>
	import Auth from './Auth.svelte';

	export let user;

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
	ul {
		padding: none;
		list-style: none;
		padding: 0;
		margin: 0;
	}
	ul li {
		display: inline-block;
	}
</style>

<ul>
	<li>
		<button on:click={copyLink}>Build Url</button>
	</li>
	<li>
		<Auth {user} />
	</li>
</ul>
