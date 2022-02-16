import { writable } from "svelte/store";
import type { User } from "@supabase/supabase-js";
import type { Profile } from "./profile";
import { supabase } from "./client";
import { PROFILE_TABLE } from "./profile";

export const user = writable<(User & { profile: Profile }) | undefined>(undefined);

export async function updatedUserStore(given_user: User | undefined) {
	if (given_user == undefined) {
		user.set(undefined);
		return;
	}
	const { data, error, status } = await supabase
		.from<Profile>(PROFILE_TABLE)
		.select()
		.eq("id", given_user.id)
		.single();
	if (error && status !== 406) throw error;
	user.set({
		...given_user,
		profile: data,
	});
}
