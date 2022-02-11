import { ImageProps, Img } from "@chakra-ui/react";

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

export const CardImage: React.FC<ImageProps & { card: CardName }> = (props) => {
  let url: string;
  switch (props.card) {
    case "1F1":
      url = "/Hanafuda_January_Kasu_1_Alt.svg";
      break;
    case "1F2":
      url = "/Hanafuda_January_Kasu_2_Alt.svg";
      break;
    case "1P":
      url = "/Hanafuda_January_Tanzaku_Alt.svg";
      break;
    case "Crane":
      url = "/Hanafuda_January_Hikari_Alt.svg";
      break;
    case "2F1":
      url = "/Hanafuda_February_Kasu_1_Alt.svg";
      break;
    case "2F2":
      url = "/Hanafuda_February_Kasu_2_Alt.svg";
      break;
    case "2S":
      url = "/Hanafuda_February_Tane_Alt.svg";
      break;
    case "2P":
      url = "/Hanafuda_February_Tanzaku_Alt.svg";
      break;
    case "3F1":
      url = "/Hanafuda_March_Kasu_1_Alt.svg";
      break;
    case "3F2":
      url = "/Hanafuda_March_Kasu_2_Alt.svg";
      break;
    case "3P":
      url = "/Hanafuda_March_Tanzaku_Alt.svg";
      break;
    case "Curtain":
      url = "/Hanafuda_March_Hikari_Alt.svg";
      break;
    case "4F1":
      url = "/Hanafuda_April_Kasu_1_Alt.svg";
      break;
    case "4F2":
      url = "/Hanafuda_April_Kasu_2_Alt.svg";
      break;
    case "4S":
      url = "/Hanafuda_April_Tane_Alt.svg";
      break;
    case "4P":
      url = "/Hanafuda_April_Tanzaku_Alt.svg";
      break;
    case "5F1":
      url = "/Hanafuda_May_Kasu_1_Alt.svg";
      break;
    case "5F2":
      url = "/Hanafuda_May_Kasu_2_Alt.svg";
      break;
    case "5P":
      url = "/Hanafuda_May_Tanzaku_Alt.svg";
      break;
    case "Bridge":
      url = "/Hanafuda_May_Tane_Alt.svg";
      break;
    case "6F1":
      url = "/Hanafuda_June_Kasu_1_Alt.svg";
      break;
    case "6F2":
      url = "/Hanafuda_June_Kasu_2_Alt.svg";
      break;
    case "6P":
      url = "/Hanafuda_June_Tanzaku_Alt.svg";
      break;
    case "Butterflies":
      url = "/Hanafuda_June_Tane_Alt.svg";
      break;
    case "7F1":
      url = "/Hanafuda_July_Kasu_1_Alt.svg";
      break;
    case "7F2":
      url = "/Hanafuda_July_Kasu_2_Alt.svg";
      break;
    case "7P":
      url = "/Hanafuda_July_Tanzaku_Alt.svg";
      break;
    case "Boar":
      url = "/Hanafuda_July_Tane_Alt.svg";
      break;
    case "8F1":
      url = "/Hanafuda_August_Kasu_1_Alt.svg";
      break;
    case "8F2":
      url = "/Hanafuda_August_Kasu_2_Alt.svg";
      break;
    case "8S":
      url = "/Hanafuda_August_Tane_Alt.svg";
      break;
    case "Moon":
      url = "/Hanafuda_August_Hikari_Alt.svg";
      break;
    case "9F1":
      url = "/Hanafuda_September_Kasu_1_Alt.svg";
      break;
    case "9F2":
      url = "/Hanafuda_September_Kasu_2_Alt.svg";
      break;
    case "9P":
      url = "/Hanafuda_September_Tanzaku_Alt.svg";
      break;
    case "Sake":
      url = "/Hanafuda_September_Tane_Alt.svg";
      break;
    case "10F1":
      url = "/Hanafuda_October_Kasu_1_Alt.svg";
      break;
    case "10F2":
      url = "/Hanafuda_October_Kasu_2_Alt.svg";
      break;
    case "10P":
      url = "/Hanafuda_October_Tanzaku_Alt.svg";
      break;
    case "Deer":
      url = "/Hanafuda_October_Tane_Alt.svg";
      break;
    case "Lightning":
      url = "/Hanafuda_November_Kasu_Alt.svg";
      break;
    case "11S":
      url = "/Hanafuda_November_Tane_Alt.svg";
      break;
    case "11P":
      url = "/Hanafuda_November_Tanzaku_Alt.svg";
      break;
    case "Man":
      url = "/Hanafuda_November_Hirikari_Alt.svg";
      break;
    case "12F1":
      url = "/Hanafuda_December_Kasu_1_Alt.svg";
      break;
    case "12F2":
      url = "/Hanafuda_December_Kasu_2_Alt.svg";
      break;
    case "12F3":
      url = "/Hanafuda_December_Kasu_Alt.svg";
      break;
    case "Phoenix":
      url = "/Hanafuda_December_Hirikari_Alt.svg";
      break;
  }
  return <Img src={url} {...props} />;
};

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
