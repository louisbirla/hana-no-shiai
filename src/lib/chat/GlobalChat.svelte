<script lang="ts">
	import { supabase } from "$lib/supabase/client";
	import { MESSAGE_TABLE, type Message } from "../supabase/message";
	import Chat from "./Chat.svelte";
	import { onMessageCallbacks } from "./onMessage";

	// All the messages listed
	let messages: Array<Message> = [];

	// Add our function to the callbacks
	onMessageCallbacks.set([...$onMessageCallbacks, getMessages]);

	// Function that fetches latest 20 messages
	async function getMessages() {
		let { error, data, status } = await supabase
			.from<Message>(MESSAGE_TABLE)
			.select("created_at, author:author_id ( name, id ), content")
			.eq("is_global", true)
			.order("created_at", { ascending: false })
			.limit(20);
		if (error && status !== 406) throw error;

		// Reverse the list so that oldest are first
		messages = data.reverse();
	}

	async function insertMessage(message: string) {
		const { error, status } = await supabase.rpc("insert_global_message", { message });
		if (error && status !== 406) throw error;
	}
</script>

<Chat {messages} {insertMessage} getInitialMessages={getMessages} />
