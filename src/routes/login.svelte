<script>
	import LoginForm from "$lib/auth/LoginForm.svelte";
	import LogoutButton from "$lib/auth/LogoutButton.svelte";
	import { user } from "$lib/supabase/sessionStore";
</script>

{#if $user}
	<p>You are already logged in as {$user.profile.name || $user.id}.</p>
	<a href="/">Home</a>
	<LogoutButton />
{:else}
	<LoginForm />
{/if}
