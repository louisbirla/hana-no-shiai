<script lang="ts">
	import type { Message } from "$lib/supabase/message";
	import { user } from "$lib/supabase/sessionStore";
	export let message: Message;

	$: date = new Date(message.created_at);
	$: followed = ($user?.profile?.following_ids || []).includes(message.author?.id) ? true : false;
	$: you = $user?.id === message.author?.id;

	$: name = you ? "you" : message.author.name || message.author.id;
</script>

<tr title="{date.toLocaleDateString()} {date.toLocaleTimeString()}">
	<td>
		<a class="{followed ? 'followed' : ''} {you ? 'you' : ''}" href={`/u/${message.author.id}`}
			>{name}</a
		>:
	</td>
	<td>{message.content}</td>
</tr>

<style lang="scss">
	td:first-of-type {
		text-align: right;
		opacity: 0.8;
	}
	.followed {
		color: colors.$hana-red;
	}
	:not(.followed) {
		color: colors.$hana-gray;
	}
	.you {
		color: colors.$hana-purple;
	}
</style>
