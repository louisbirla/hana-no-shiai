<script lang="ts">
import { supabase } from "$lib/supabase/client";

import type { Game, GameStats } from "$lib/supabase/game";
import type { Profile } from "$lib/supabase/profile";
import { user } from "$lib/supabase/sessionStore";

	import type { CardName } from "./cards";
	import Deck from "./Deck.svelte";
	import type { Field, MonthStack } from "./field";
	import FieldComponent from "./Field.svelte";
	import Hand from "./Hand.svelte";
	import Released from "./Released.svelte";
	import Removed from "./Removed.svelte";

	export let game: Game;
	export let players: Profile[];
	let stats: GameStats = undefined;

	let seats: Seat[] = []
	let myIndex: number;
	let playerTurnIndex = 0;
	$: advantagesLeft = game.advantages_left
	let my_field: Field = {
		inscriptions: [],
		month_stacks: [],
	}

	type Seat = {
		field: Field;
		hand_count: number;
		name?: string;
		advantages_left?: number;
	};

	const user_id = $user.id
	async function getGameStats() {
		const { data, error, status } = await supabase.rpc<GameStats>("game_stats").single();
		if (error && status !== 406) throw error;
		stats = {...data};
		console.log(1)
		players.forEach((profile, index) => {
			console.log(2)
		if (profile.id === user_id) {
			myIndex = index;
			let stacks: MonthStack[] = []
			let used: CardName[] = []
			console.log("Names", data.fields[index].stacks)
			data.fields[index].stacks.names.forEach((name, i) => {
				console.log("name", name)
				console.log("stacked_over", data.fields[index].stacks.stacked_over)
				if (!used.includes(name) && !data.fields[index].stacks.stacked_over.includes(name)) {
					used.push(name)
					let stacked_over = data.fields[index].stacks.stacked_over[i]
					if (stacked_over) {
						used.push(stacked_over)
						stacks[i] = {
							soul: name,
							flowers: stacks[i]?.flowers || []
						}
						stacks[i].flowers = [
							...stacks[i].flowers,
							stacked_over,
						]
						// If the stacked card is stacked on something
						let next_stacked_over = data.fields[index].stacks.stacked_over[data.fields[index].stacks.names.indexOf(stacked_over)];
						if (next_stacked_over) {
							used.push(next_stacked_over)
							stacks[i].flowers = [
								...stacks[i].flowers,
								next_stacked_over,
							]
						}
					}
				}
			})
			seats = [
				...seats,
				{
				hand_count: data.seat_hand_counts[index],
				name: profile.name || profile.id,
				field: {
					month_stacks: stacks,
					inscriptions: [],
				}
			}
			]
		} else {
			let stacks: MonthStack[] = []
			let used: CardName[] = []
			console.log("Names", data.fields[index].stacks)
			data.fields[index].stacks.names.forEach((name, i) => {
				console.log("name", name)
				console.log("stacked_over", data.fields[index].stacks.stacked_over)
				if (!used.includes(name) && !data.fields[index].stacks.stacked_over.includes(name)) {
					used.push(name)
					let stacked_over = data.fields[index].stacks.stacked_over[i]
					if (stacked_over) {
						used.push(stacked_over)
						stacks[i] = {
							soul: name,
							flowers: stacks[i]?.flowers || []
						}
						stacks[i].flowers = [
							...stacks[i].flowers,
							stacked_over,
						]
						// If the stacked card is stacked on something
						let next_stacked_over = data.fields[index].stacks.stacked_over[data.fields[index].stacks.names.indexOf(stacked_over)];
						if (next_stacked_over) {
							used.push(next_stacked_over)
							stacks[i].flowers = [
								...stacks[i].flowers,
								next_stacked_over,
							]
						}
					}
				}
			})
			console.log("Stacks", stacks)
			seats = [
				...seats,
				{
				hand_count: data.seat_hand_counts[index],
				name: profile.name || profile.id,
				field: {
					month_stacks: stacks,
					inscriptions: data.fields[index].inscriptions.map(name => ({scroll: name})),
				}
			}
			]
		}
		if (profile.id === game.current_turn) {
			playerTurnIndex = index
		}
	})
	console.log(10)
	console.log(data)
	console.log(seats)
	console.log("myindex", myIndex)
	my_field = {
		inscriptions: [],
		month_stacks: seats[myIndex]?.field?.month_stacks || [],
	}
	console.log("My field", my_field)
		data.your_inscriptions?.scroll.forEach((card, i) => {
			console.log(11)
		my_field.inscriptions.push({
			scroll: card,
			inscribed: data.your_inscriptions.inscribed[i],
		})
	})
	}
	function doGetGameStats(_: unknown) {
		getGameStats()
		return {}
	}
</script>

<div use:doGetGameStats class="global">
	<Deck card_count={stats?.deck_count} />
	<Released cards={stats?.released} />
	<Removed cards={stats?.removed} />
</div>
<div class="hands">
	<div class="hand {playerTurnIndex === myIndex ? 'turn' : ''}">
		<FieldComponent field={my_field} />
		<Hand advantages_left={playerTurnIndex === myIndex ? advantagesLeft : undefined} is_you info="Your hand" cards={stats?.your_hand} />
	</div>
	{#each seats as seat, index}
		{#if index !== myIndex}
			 <div class="hand {playerTurnIndex === index ? 'turn' : ''}">
			<FieldComponent field={seat?.field} />
			<Hand
				info="{seat?.name || 'Player ' + (index + 2)}'s hand"
				unknown_count={seat?.hand_count}
				advantages_left={playerTurnIndex === index ? advantagesLeft : undefined}
			/>
		</div>
		{/if}
	{/each}
</div>

<style lang="scss">
	.hands {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		.hand {
			margin: 5px;
			display: inline-flex;
			flex-direction: column;
			height: min-content;
		}
	}
	.global {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.turn {
		border: 4px solid black;
	}
</style>
