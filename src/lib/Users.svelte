<script lang="ts">
	import { supabase } from "$lib/supabase/client";
	import { PROFILE_TABLE } from "$lib/supabase/profile";
	import type { Profile } from "./supabase/profile";
	import FollowButton from "$lib/FollowButton.svelte";

	let profiles: Profile[] = [];

	async function getProfiles() {
		const { data, error, status } = await supabase.from<Profile>(PROFILE_TABLE).select();
		if (error && status !== 406) throw error;
		profiles = data;
	}
</script>

{#await getProfiles()}
	<p>Loading users...</p>
{:then}
	<ul>
		{#each profiles as profile}
			<li>
				<div>
					<a href={`/u/${profile.id}`}>{profile.name || profile.id}</a>
					<FollowButton user_id="410676d2-831a-44ed-8b90-9910f5083166" on_finish={getProfiles} />
				</div>
			</li>
		{/each}
	</ul>
{:catch error}
	<p>Error: {error.message}</p>
{/await}
