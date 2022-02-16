<script lang="ts">
	import { each } from "svelte/internal";

	import Card from "./Card.svelte";

	import type { Field } from "./field";

	export let field: Field = undefined;
	console.log("Field recieved", field)
</script>

<div class="mat">
	{#each (field?.month_stacks || []) as month_stack}
		{#if month_stack?.flowers || month_stack?.soul }
			 <div
			class="stack"
			style:margin-right={`${(month_stack?.soul ? month_stack.flowers?.length : 0) * 15 + 5}px`}
			style:padding-bottom={`${((month_stack?.soul ? month_stack.flowers?.length : 0)) * 15 + 5}px`}
		>
			{#if month_stack?.soul}
				<div class="soul card"><Card cardName={month_stack.soul} /></div>
			{/if}
			{#each (month_stack?.flowers || []) as flower}
				<div class="card"><Card cardName={flower} /></div>
			{/each}
		</div>
		{/if}
	{/each}
	{#each (field?.inscriptions || []) as inscription}
		<div class="inscription stack">
			<div class="scroll card"><Card cardName={inscription.scroll} /></div>
			<div class="card"><Card cardName={inscription.inscribed} /></div>
		</div>
	{/each}
	{#if field == undefined || (field?.inscriptions?.length === 0 && field.month_stacks?.length === 0)}
		<p title="No cards in field">空</p>
	{/if}
</div>

<style lang="scss">
	.stack {
		margin: 5px;
		margin-top: 10px;
		margin-left: 10px;
		display: inline-block;
		height: 100px;
		max-width: 61px;
		&.inscription {
			padding-bottom: 15px;
		}
		.soul {
			z-index: 100;
		}
		.card:nth-child(2) {
			top: -90px;
			left: 15px;
			z-index: 9;
		}
		.card:nth-child(3) {
			top: -180px;
			left: 30px;
			z-index: 8;
		}
		.card:nth-child(4) {
			top: -270px;
			left: 45px;
			z-index: 7;
		}
		.scroll {
			margin-right: 15px;
			z-index: 100;
		}
		.card {
			position: relative;
			&:hover {
				z-index: 100;
			}
		}
	}
	.mat {
		background-color: colors.$hana-blue;
		display: inline-flex;
		max-width: 60em;
		overflow-x: scroll;
		overflow-y: hidden;
		padding-right: 10px;
		align-items: baseline;
	}
	p {
		color: darken(colors.$hana-blue, 25%);
		font-weight: bold;
		font-size: 2em;
		margin-bottom: 0;
		margin-top: 5px;
		text-align: center;
		width: 100%;
		margin-left: 10px;
	}
</style>
