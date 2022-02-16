<script lang="ts">
	import Login from "$lib/auth/NeedToLogin.svelte";
	import GlobalChat from "$lib/chat/GlobalChat.svelte";
	import CreateGame from "$lib/CreateGame.svelte";
import Lobby from "$lib/game/Lobby.svelte";
import JoinGame from "$lib/JoinGame.svelte";
	import { user } from "$lib/supabase/sessionStore";
</script>

<svelte:head>
	<title>花の試合</title>
</svelte:head>

<div class="wrap">
	{#if !$user}
	<Login />
{:else if $user.profile.game_id}
	<Lobby />
{:else}
	<p><i>You are not playing a game</i></p>
	
	<div class="panes">
		<div>
			<h3>Create a Game</h3>
	<CreateGame />
	<h3>Join a Game</h3>
	<JoinGame />
		</div>
	
	<div><h3>Global Chat</h3>
	<GlobalChat /></div>
	</div>
{/if}
</div>

<style lang="scss">
	.wrap {
		padding: 5px;
	}
	h3 {
		margin-bottom: 5px;
	}
	.panes {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
</style>
