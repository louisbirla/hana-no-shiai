<script lang="ts">
	import { onMessageCallbacks } from "$lib/chat/onMessage";

	import Header from "$lib/header/Header.svelte";
	import { supabase } from "$lib/supabase/client";
	import { MESSAGE_TABLE, type Message } from "$lib/supabase/message";
	import { updatedUserStore } from "$lib/supabase/sessionStore";
	updatedUserStore(supabase.auth.user());

	supabase.auth.onAuthStateChange(async (_, session) => {
		updatedUserStore(session.user);
	});

	onMessageCallbacks.subscribe((callbacks) => {
		supabase
			.from<Message>(MESSAGE_TABLE)
			.on("INSERT", () => {
				callbacks.forEach((fn) => fn());
			})
			.subscribe();
	});
</script>

<Header />

<slot />

<style lang="scss">
	:global {
		body {
			margin: 0;
		}
	}
</style>
