<script lang="ts">
	import { supabase } from "$lib/supabase/client";
	import { MESSAGE_TABLE, type Message } from "../supabase/message";
	import Chat from "./Chat.svelte";
	import { onMessageCallbacks } from "./onMessage";
	export let gameId: string;

	// All the messages listed
	let messages: Array<Message> = [];

	// Add our function to the callbacks
	onMessageCallbacks.set([...$onMessageCallbacks, getMessages]);

	// Function that fetches latest 20 messages
	async function getMessages() {
		let { error, data, status } = await supabase
			.from<Message>(MESSAGE_TABLE)
			.select("created_at, author:author_id ( name, id ), content")
			.eq("game_id", gameId)
			.order("created_at", { ascending: false });
		if (error && status !== 406) throw error;

		if (data !== messages) {
			// Reverse the list so that oldest are first
			messages = data.reverse();
		}
	}

	async function insertMessage(content: string) {
		const { error, status } = await supabase.rpc("insert_game_message", { content });
		if (error && status !== 406) throw error;
	}
</script>

<Chat {messages} {insertMessage} getInitialMessages={getMessages} />
