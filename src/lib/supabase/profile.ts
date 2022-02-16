export const PROFILE_TABLE = "profile";
export type Profile = {
	id?: string;
	created_at?: string;
	name?: string;
	following_ids?: string[];
	game_id?: string;
};
