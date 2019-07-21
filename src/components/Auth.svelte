<script>
	import { auth, googleProvider } from './../firebase';
	import { authState } from 'rxfire/auth';

	export let user;

	const unsubscribe = authState(auth).subscribe(u => user = u);
	const signIn = () => auth.signInWithPopup(googleProvider);
	const signOut = () => auth.signOut();
</script>

{#if user}
<button on:click={signOut}>Sign Out ({user.displayName})</button>
{:else}
<button on:click={signIn}>Sign In with Google</button>
{/if}
