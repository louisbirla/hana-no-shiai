<script lang="ts">
	import Card from "./Card.svelte";
	import type { CardName } from "./cards";

	export let cards: CardName[] = [];
	export let unknown_count = 0;
	export let info: string = undefined;
	export let advantages_left: number = undefined;
	export let is_you = false;

	$: extra =
		is_you && advantages_left && advantages_left !== 0
			? advantages_left === 1
				? "one"
				: advantages_left === 2
				? "two"
				: "three"
			: "";
</script>

<div class="hand {extra}">
	<div class="cards">
		{#if unknown_count > 0}
			{#each new Array(unknown_count) as index}
				<div class="card"><Card back /></div>
			{/each}
		{:else if cards.length === 0}
			<p title="No cards in hand">空</p>
		{/if}
		{#each cards as cardName}
			<div class="card"><Card {cardName} /></div>
		{/each}
	</div>
	{#if info}
		<p>{info}</p>
		{#if advantages_left != undefined}
			<p>{advantages_left} advantage{advantages_left === 1 ? "" : "s"} left</p>
		{/if}
	{/if}
</div>

<style lang="scss">
	.hand {
		display: inline-flex;
		align-items: center;
		flex-direction: column;
		background-color: lighten(colors.$hana-gray, 50%);
		padding: 5px;
		.cards {
			display: flex;
			p {
				font-size: 2em;
				margin-bottom: 0;
				font-weight: bold;
				margin-top: 10px;
				color: lighten(colors.$hana-gray, 40%);
			}
			.card {
				margin: 3px;
				display: inline-block;
				height: 100px;
			}
		}
		&.one {
			background-color: colors.$hana-orange;
		}
		&.two {
			background-color: colors.$hana-pink;
		}
		&.three {
			background-color: colors.$hana-red;
		}
	}
	p {
		color: colors.$hana-gray;
		margin: 0;
		&:nth-of-type(2) {
			color: colors.$hana-purple;
		}
	}
</style>
