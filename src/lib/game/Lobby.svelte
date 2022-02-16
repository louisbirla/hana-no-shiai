<script lang="ts">
	import { supabase } from "$lib/supabase/client";
	import {user} from "../supabase/sessionStore"
import PanedChat from "$lib/chat/PanedChat.svelte";
import { GAME_TABLE, type Game } from "$lib/supabase/game";
import { PROFILE_TABLE, type Profile } from "$lib/supabase/profile";
import InvitePlayer from "./InvitePlayer.svelte";
import GameBoard from "./GameBoard.svelte";

	let game: Game = undefined;
	let players: Profile[] = []

	supabase
			.from<Game>(`${GAME_TABLE}:id=eq.${$user.profile.game_id}`)
			.on("UPDATE", () => {
				getGame()
			})
			.subscribe();

	async function getGame() {
		const { data, error, status } = await supabase.from<Game>(GAME_TABLE).select().eq("id", $user.profile.game_id).single();
		if (error && status !== 406) throw error;
		game = data;
		await getPlayers(data.id)
	}
	async function getPlayers(game_id: string) {
		const { data, error, status } = await supabase.from<Profile>(PROFILE_TABLE).select().eq("game_id", game_id);
		if (error && status !== 406) throw error;
		players = data;
	}
</script>

<div class="wrap">
	<div class="panes">
<div>
			{#await getGame()}
<p>Loading game...</p>
{:then}
	{#if game.status === "proposed"}
		 <h1>Game Lobby</h1>
		<pre>{game.id}</pre>
		<h3>Players ({players.length}/{game.seat_count})</h3>
		<ul>
						{#each players as profile}
							<li><a href="/u/{profile.id}">{profile.name || profile.id}</a></li>
						{/each}
					</ul>
		{#if players.length < game.seat_count}
			 <InvitePlayer />
			 {#if game.invited_players.length > 0}
				  <h3>Invited players</h3>
					<ul>
						{#each game.invited_players as player_id}
							<li><a href="/u/{player_id}">{player_id}</a></li>
						{/each}
					</ul>
			 {/if}
		{:else}
			 <button>Start Game!</button>
		{/if}
		{:else}
			<GameBoard players={players} game={game} />
	{/if}
{:catch error}
<p>Error: {error.message}</p>
{/await}
</div>

<div>
	<h2>Chats</h2>
	<PanedChat gameId={$user.profile.game_id} /></div>
	</div>
</div>

<style lang="scss">
	.wrap {
		padding: 5px;
	}
	.panes {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
</style>
