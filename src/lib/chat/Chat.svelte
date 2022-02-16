<script lang="ts">
	import MessageInput from "./MessageInput.svelte";
	import type { Message } from "../supabase/message";
	import { user } from "$lib/supabase/sessionStore";
	import MessageComponent from "./Message.svelte";

	export let getInitialMessages: () => Promise<unknown>;
	export let messages: Message[];
	export let insertMessage: (messages: string) => {};
</script>

<div>
	{#await getInitialMessages()}
		<p>Loading messages...</p>
	{:then}
		<table>
			<tbody>
				{#each messages as message}
					<MessageComponent {message} />
				{/each}
			</tbody>
		</table>
	{:catch error}
		<p>Error: {error.message}</p>
	{/await}
	{#if $user}
		<MessageInput {insertMessage} />
	{:else}
		<p>You must log in before sending messages.</p>
	{/if}
</div>

<style>
	div {
		border: 1px dashed black;
		padding: 1em;
		display: inline-block;
		max-width: 50em;
	}
</style>
