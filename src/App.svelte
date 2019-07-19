<script>
    import Profile from './Profile.svelte';
    import Books from './Books.svelte';

    import { auth, googleProvider } from './firebase';
    import { authState } from 'rxfire/auth';
    import storage from './storage.js';

    let user;

    const unsubscribe = authState(auth).subscribe(u => user = u);

    function login() {
        auth.signInWithPopup(googleProvider);
    }

    function copyLink() {
        const input = document.createElement('input');
        input.value = storage.getFirebase(true);
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        alert("Copied the link.");
    }

</script>


<section>
<button on:click="{copyLink}">Copy Link</button>
{#if user}
    <Profile {...user} />
    <button on:click={ () => auth.signOut() }>Logout</button>
    <hr>
    <Books />
{:else}
	<button on:click={login}>
		Signin with Google
	</button>
{/if}
</section>