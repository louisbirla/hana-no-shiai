import type { CardName } from "./cards";

export type Field = {
	inscriptions: Inscription[];
	month_stacks: MonthStack[];
};

export type Inscription = {
	scroll: CardName;
	inscribed?: CardName;
};

export type MonthStack = {
	flowers: CardName[];
	soul?: CardName;
};
