<script lang="ts">
	import { supabase } from "$lib/supabase/client";

	let login_promise: Promise<unknown> = undefined;
	let email: string | undefined;

	const handleLogin = () => {
		login_promise = supabase.auth.signIn({ email });
	};
</script>

<p>Please enter your email to log in or sign up.</p>
<form on:submit|preventDefault={handleLogin}>
	<input placeholder="Email" type="email" bind:value={email} />
	<input type="submit" value="Send email" />
</form>

{#if login_promise}
	{#await login_promise}
		<p>Loading...</p>
	{:then}
		<p>A link to log in has been sent to your email!</p>
	{:catch error}
		<p>Error: {error.message}</p>
	{/await}
{/if}
