<script lang="ts">
	import { supabase } from "$lib/supabase/client";
import { GAME_TABLE, type Game } from "$lib/supabase/game";

	let games: Game[] = [];
	let joiningGame = false

	async function getGames() {
		const { data, error, status } = await supabase.from<Game>(GAME_TABLE).select();
		if (error && status !== 406) throw error;
		games = data;
	}
	async function joinGame(game_id: string) {
		joiningGame = true
		const { error, status } = await supabase.rpc("join_game", {game_id_input: game_id});
		joiningGame = false
		if (error && status !== 406) throw error;
	}
</script>

			{#await getGames()}
<p>Loading games...</p>
{:then}
	{#if games.length > 0}
		 <ul>
			 {#each games as game}
			  <li>
				<p>Game with {game.seat_count} players <button disabled={joiningGame} on:click={() => joinGame(game.id)}>Join</button></p>
			  </li>
		 {/each}
		 </ul>
	{:else}
		 <p><i>No joinable games found</i></p>
	{/if}
{:catch error}
<p>Error: {error.message}</p>
{/await}
