import type { Profile } from "./profile";

export const MESSAGE_TABLE = "message";
export type Message = {
	id?: string;
	created_at?: string;
	author_id?: string;
	content?: string;
	is_global?: boolean;
	author?: Profile;
	game_id?: string;
};
