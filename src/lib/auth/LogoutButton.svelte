<script lang="ts">
	import { supabase } from "../supabase/client";

	let logoutPromise: Promise<void> = undefined;

	async function logout() {
		const { error } = await supabase.auth.signOut();
		if (error) throw error;
		location.reload();
		return;
	}
	function causeLogout() {
		logoutPromise = logout();
	}
</script>

{#if logoutPromise}
	{#await logoutPromise}
		<button disabled>Logging out...</button>
	{:then}
		<p>Logged out.</p>
	{:catch error}
		<button on:click={causeLogout}>Try again</button>
		<p>Error: {error.message}</p>
	{/await}
{:else}
	<button on:click={causeLogout}>Log out</button>
{/if}
