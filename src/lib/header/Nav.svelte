<script>
	import { user } from "$lib/supabase/sessionStore";
</script>

<nav>
	<a href="/">Home</a>
	<a href="/chat">Global Chat</a>
	{#if $user}
		<a href="/settings">Settings</a>
		<a href={`/u/${$user.id}`}>
			{#if $user.profile.name}
				{$user.profile.name}
			{:else}
				Profile
			{/if}
		</a>
	{:else}
		<a href="/login">Log in</a>
	{/if}
</nav>
