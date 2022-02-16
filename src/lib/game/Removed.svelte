<script lang="ts">
	import Card from "./Card.svelte";
	import type { CardName } from "./cards";

	export let cards: CardName[] = [];
</script>

<div class="mat">
	<p>Removed cards</p>
	<div class="cards">
		{#each cards as cardName}
			<div class="card"><Card {cardName} /></div>
		{:else}
			<p title="No cards removed">空</p>
		{/each}
	</div>
</div>

<style lang="scss">
	.mat {
		background-color: lighten(colors.$hana-purple, 10%);
		padding: 5px;
		display: inline-block;
		max-width: 45em;
		overflow-x: scroll;
		.cards {
			display: flex;
			.card {
				margin: 3px;
				display: inline-block;
				height: 100px;
			}
			p {
				font-size: 2em;
				font-weight: bold;
				margin-bottom: 0;
				margin-top: 35px;
				margin-right: 5px;
				text-align: center;
				width: 100%;
				color: darken(colors.$hana-purple, 5%);
			}
		}
	}
	p {
		margin: 0;
		margin-left: 5px;
	}
</style>
