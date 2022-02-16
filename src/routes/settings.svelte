<script lang="ts">
	import Login from "$lib/auth/NeedToLogin.svelte";
	import { user } from "$lib/supabase/sessionStore";
	import NameInput from "$lib/NameInput.svelte";
	import LogoutButton from "$lib/auth/LogoutButton.svelte";
</script>

<svelte:head>
	<title>Settings - 花の試合</title>
</svelte:head>

<h1>Settings</h1>
{#if $user}
	<h4>Nickname</h4>
	<NameInput />
	<h4>Log out</h4>
	<LogoutButton />
{:else}
	<Login />
{/if}

<style lang="scss">
	h4 {
		margin-bottom: 0;
	}
</style>
