import type { CardName } from "$lib/game/cards";

export const GAME_TABLE = "game";
export type Game = {
	id?: string;
	created_at?: string;
	status?: "proposed" | "ongoing" | "ended" | "cancelled";
	invited_players?: string[];
	seat_count?: number;
	public_join?: boolean;
	current_turn?: string;
	game_waiting?: "turn" | "scroll_call" | "scroll_push" | "disadvantage";
	player_order?: string[];
	advantages_left?: number;
	waiting_scroll?: string;
	waiting_power?: string;
	disadvantaged_player?: string;
};

export type GameStats = {
	deck_count: number;
	released: CardName[];
	removed: CardName[];
	seat_hand_counts: number[];
	your_hand: CardName[];
	your_inscriptions: {
		scroll: CardName[];
		inscribed: CardName[];
	};
	fields: Array<{
		inscriptions: CardName[];
		stacks: {
			names: CardName[];
			stacked_over: Array<null | CardName>;
		};
	}>;
};
