export type Month =
	| "January"
	| "February"
	| "March"
	| "April"
	| "May"
	| "June"
	| "July"
	| "August"
	| "September"
	| "October"
	| "November"
	| "December";

export type CardName =
	| "4F1"
	| "4F2"
	| "4S"
	| "4P"
	| "Moon"
	| "8F1"
	| "8F2"
	| "8S"
	| "Phoenix"
	| "12F1"
	| "12F2"
	| "12F3"
	| "2F1"
	| "2F2"
	| "2S"
	| "2P"
	| "Crane"
	| "1F1"
	| "1F2"
	| "1P"
	| "7F1"
	| "7F2"
	| "Boar"
	| "7P"
	| "6F1"
	| "6F2"
	| "Butterflies"
	| "6P"
	| "Curtain"
	| "3F1"
	| "3F2"
	| "3P"
	| "5F1"
	| "5F2"
	| "Bridge"
	| "5P"
	| "Man"
	| "Lightning"
	| "11S"
	| "11P"
	| "10F1"
	| "10F2"
	| "Deer"
	| "10P"
	| "9F1"
	| "9F2"
	| "Sake"
	| "9P";

export function cardImageUrl(card: CardName) {
	switch (card) {
		case "1F1":
			return "/Hanafuda_January_Kasu_1_Alt.svg";
		case "1F2":
			return "/Hanafuda_January_Kasu_2_Alt.svg";
		case "1P":
			return "/Hanafuda_January_Tanzaku_Alt.svg";
		case "Crane":
			return "/Hanafuda_January_Hikari_Alt.svg";
		case "2F1":
			return "/Hanafuda_February_Kasu_1_Alt.svg";
		case "2F2":
			return "/Hanafuda_February_Kasu_2_Alt.svg";
		case "2S":
			return "/Hanafuda_February_Tane_Alt.svg";
		case "2P":
			return "/Hanafuda_February_Tanzaku_Alt.svg";
		case "3F1":
			return "/Hanafuda_March_Kasu_1_Alt.svg";
		case "3F2":
			return "/Hanafuda_March_Kasu_2_Alt.svg";
		case "3P":
			return "/Hanafuda_March_Tanzaku_Alt.svg";
		case "Curtain":
			return "/Hanafuda_March_Hikari_Alt.svg";
		case "4F1":
			return "/Hanafuda_April_Kasu_1_Alt.svg";
		case "4F2":
			return "/Hanafuda_April_Kasu_2_Alt.svg";
		case "4S":
			return "/Hanafuda_April_Tane_Alt.svg";
		case "4P":
			return "/Hanafuda_April_Tanzaku_Alt.svg";
		case "5F1":
			return "/Hanafuda_May_Kasu_1_Alt.svg";
		case "5F2":
			return "/Hanafuda_May_Kasu_2_Alt.svg";
		case "5P":
			return "/Hanafuda_May_Tanzaku_Alt.svg";
		case "Bridge":
			return "/Hanafuda_May_Tane_Alt.svg";
		case "6F1":
			return "/Hanafuda_June_Kasu_1_Alt.svg";
		case "6F2":
			return "/Hanafuda_June_Kasu_2_Alt.svg";
		case "6P":
			return "/Hanafuda_June_Tanzaku_Alt.svg";
		case "Butterflies":
			return "/Hanafuda_June_Tane_Alt.svg";
		case "7F1":
			return "/Hanafuda_July_Kasu_1_Alt.svg";
		case "7F2":
			return "/Hanafuda_July_Kasu_2_Alt.svg";
		case "7P":
			return "/Hanafuda_July_Tanzaku_Alt.svg";
		case "Boar":
			return "/Hanafuda_July_Tane_Alt.svg";
		case "8F1":
			return "/Hanafuda_August_Kasu_1_Alt.svg";
		case "8F2":
			return "/Hanafuda_August_Kasu_2_Alt.svg";
		case "8S":
			return "/Hanafuda_August_Tane_Alt.svg";
		case "Moon":
			return "/Hanafuda_August_Hikari_Alt.svg";
		case "9F1":
			return "/Hanafuda_September_Kasu_1_Alt.svg";
		case "9F2":
			return "/Hanafuda_September_Kasu_2_Alt.svg";
		case "9P":
			return "/Hanafuda_September_Tanzaku_Alt.svg";
		case "Sake":
			return "/Hanafuda_September_Tane_Alt.svg";
		case "10F1":
			return "/Hanafuda_October_Kasu_1_Alt.svg";
		case "10F2":
			return "/Hanafuda_October_Kasu_2_Alt.svg";
		case "10P":
			return "/Hanafuda_October_Tanzaku_Alt.svg";
		case "Deer":
			return "/Hanafuda_October_Tane_Alt.svg";
		case "Lightning":
			return "/Hanafuda_November_Kasu_Alt.svg";
		case "11S":
			return "/Hanafuda_November_Tane_Alt.svg";
		case "11P":
			return "/Hanafuda_November_Tanzaku_Alt.svg";
		case "Man":
			return "/Hanafuda_November_Hikari_Alt.svg";
		case "12F1":
			return "/Hanafuda_December_Kasu_1_Alt.svg";
		case "12F2":
			return "/Hanafuda_December_Kasu_2_Alt.svg";
		case "12F3":
			return "/Hanafuda_December_Kasu_Alt.svg";
		case "Phoenix":
			return "/Hanafuda_December_Hikari_Alt.svg";
	}
}

export const getCardMonth = (card: CardName) => {
	switch (card) {
		case "1F1":
			return "January";
		case "1F2":
			return "January";
		case "1P":
			return "January";
		case "Crane":
			return "January";
		case "2F1":
			return "February";
		case "2F2":
			return "February";
		case "2S":
			return "February";
		case "2P":
			return "February";
		case "3F1":
			return "March";
		case "3F2":
			return "March";
		case "3P":
			return "March";
		case "Curtain":
			return "March";
		case "4F1":
			return "April";
		case "4F2":
			return "April";
		case "4S":
			return "April";
		case "4P":
			return "April";
		case "5F1":
			return "May";
		case "5F2":
			return "May";
		case "5P":
			return "May";
		case "Bridge":
			return "May";
		case "6F1":
			return "June";
		case "6F2":
			return "June";
		case "6P":
			return "June";
		case "Butterflies":
			return "June";
		case "7F1":
			return "July";
		case "7F2":
			return "July";
		case "7P":
			return "July";
		case "Boar":
			return "July";
		case "8F1":
			return "August";
		case "8F2":
			return "August";
		case "8S":
			return "August";
		case "Moon":
			return "August";
		case "9F1":
			return "September";
		case "9F2":
			return "September";
		case "9P":
			return "September";
		case "Sake":
			return "September";
		case "10F1":
			return "October";
		case "10F2":
			return "October";
		case "10P":
			return "October";
		case "Deer":
			return "October";
		case "Lightning":
			return "November";
		case "11S":
			return "November";
		case "11P":
			return "November";
		case "Man":
			return "November";
		case "12F1":
			return "December";
		case "12F2":
			return "December";
		case "12F3":
			return "December";
		case "Phoenix":
			return "December";
	}
};

export function cardTooltip(card: CardName) {
	switch (card) {
		case "1F1":
			return "January Flower";
		case "1F2":
			return "January Flower";
		case "1P":
			return "January Power Scroll";
		case "Crane":
			return "January Power Soul (Crane): Draw up to 2 cards";
		case "2F1":
			return "February Flower";
		case "2F2":
			return "February Flower";
		case "2S":
			return "February Soul";
		case "2P":
			return "February Power Scroll";
		case "3F1":
			return "March Flower";
		case "3F2":
			return "March Flower";
		case "3P":
			return "March Power Scroll";
		case "Curtain":
			return "March Power (Curtain): Swap two hidden cards, gets released if at least one is an opponents";
		case "4F1":
			return "April Flower";
		case "4F2":
			return "April Flower";
		case "4S":
			return "April Soul";
		case "4P":
			return "April Plain Scroll";
		case "5F1":
			return "May Flower";
		case "5F2":
			return "May Flower";
		case "5P":
			return "May Plain Scroll";
		case "Bridge":
			return "May Power (Bridge): Reincarnate and draw a released flower card";
		case "6F1":
			return "June Flower";
		case "6F2":
			return "June Flower";
		case "6P":
			return "June Blue Scroll";
		case "Butterflies":
			return "June Soul (Butterflies)";
		case "7F1":
			return "July Flower";
		case "7F2":
			return "July Flower";
		case "7P":
			return "July Plain Scroll";
		case "Boar":
			return "July Soul (Boar)";
		case "8F1":
			return "August Flower";
		case "8F2":
			return "August Flower";
		case "8S":
			return "August Soul";
		case "Moon":
			return "August Power (Moon): Gain two advantages, gets released";
		case "9F1":
			return "September Flower";
		case "9F2":
			return "September Flower";
		case "9P":
			return "September Blue Scroll";
		case "Sake":
			return "September Power (Sake Cup): Release a soul of your choice, gets released";
		case "10F1":
			return "October Flower";
		case "10F2":
			return "October Flower";
		case "10P":
			return "October Blue Scroll";
		case "Deer":
			return "October Soul (Deer)";
		case "Lightning":
			return "November Power (Lightning): Cause a disadvantage, gets released, you may reincarnate it";
		case "11S":
			return "November Soul";
		case "11P":
			return "November Plain Scroll";
		case "Man":
			return "November Power Soul (Rain Man): Re-arrange your field stacks";
		case "12F1":
			return "December Flower";
		case "12F2":
			return "December Flower";
		case "12F3":
			return "December Flower";
		case "Phoenix":
			return "December Power Soul (Pheonix): Reincarnate and draw a released soul card";
	}
}
