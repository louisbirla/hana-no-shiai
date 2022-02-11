import AprilKasu1 from "url:../assets/Hanafuda_April_Kasu_1_Alt.svg";
import AprilKasu2 from "url:../assets/Hanafuda_April_Kasu_2_Alt.svg";
import AprilTane from "url:../assets/Hanafuda_April_Tane_Alt.svg";
import AprilTanzaku from "url:../assets/Hanafuda_April_Tanzaku_Alt.svg";
import AugustHikari from "url:../assets/Hanafuda_August_Hikari_Alt.svg";
import AugustKasu1 from "url:../assets/Hanafuda_August_Kasu_1_Alt.svg";
import AugustTane from "url:../assets/Hanafuda_August_Tane_Alt.svg";
import AugustKasu2 from "url:../assets/Hanafuda_August_Kasu_2_Alt.svg";
import DecemberHikari from "url:../assets/Hanafuda_December_Hikari_Alt.svg";
import DecemberKasu1 from "url:../assets/Hanafuda_December_Kasu_1_Alt.svg";
import DecemberKasu2 from "url:../assets/Hanafuda_December_Kasu_2_Alt.svg";
import DecemberKasu3 from "url:../assets/Hanafuda_December_Kasu_Alt.svg";
import FebruaryKasu1 from "url:../assets/Hanafuda_February_Kasu_1_Alt.svg";
import FebruaryKasu2 from "url:../assets/Hanafuda_February_Kasu_2_Alt.svg";
import FebruaryTane from "url:../assets/Hanafuda_February_Tane_Alt.svg";
import FebruaryTanzaku from "url:../assets/Hanafuda_February_Tanzaku_Alt.svg";
import JanuaryKasu1 from "url:../assets/Hanafuda_January_Kasu_1_Alt.svg";
import JanuaryKasu2 from "url:../assets/Hanafuda_January_Kasu_2_Alt.svg";
import JanuaryHikari from "url:../assets/Hanafuda_January_Hikari_Alt.svg";
import JanuaryTanzaku from "url:../assets/Hanafuda_January_Tanzaku_Alt.svg";
import JulyKasu1 from "url:../assets/Hanafuda_July_Kasu_1_Alt.svg";
import JulyKasu2 from "url:../assets/Hanafuda_July_Kasu_2_Alt.svg";
import JulyTane from "url:../assets/Hanafuda_July_Tane_Alt.svg";
import JulyTanzaku from "url:../assets/Hanafuda_July_Tanzaku_Alt.svg";
import JuneKasu1 from "url:../assets/Hanafuda_June_Kasu_1_Alt.svg";
import JuneKasu2 from "url:../assets/Hanafuda_June_Kasu_2_Alt.svg";
import JuneTane from "url:../assets/Hanafuda_June_Tane_Alt.svg";
import JuneTanzaku from "url:../assets/Hanafuda_June_Tanzaku_Alt.svg";
import MarchKasu1 from "url:../assets/Hanafuda_March_Kasu_1_Alt.svg";
import MarchKasu2 from "url:../assets/Hanafuda_March_Kasu_2_Alt.svg";
import MarchHikari from "url:../assets/Hanafuda_March_Hikari_Alt.svg";
import MarchTanzaku from "url:../assets/Hanafuda_March_Tanzaku_Alt.svg";
import MayKasu1 from "url:../assets/Hanafuda_May_Kasu_1_Alt.svg";
import MayKasu2 from "url:../assets/Hanafuda_May_Kasu_2_Alt.svg";
import MayTane from "url:../assets/Hanafuda_May_Tane_Alt.svg";
import MayTanzaku from "url:../assets/Hanafuda_May_Tanzaku_Alt.svg";
import NovemberKasu from "url:../assets/Hanafuda_November_Kasu_Alt.svg";
import NovemberTane from "url:../assets/Hanafuda_November_Tane_Alt.svg";
import NovemberHikari from "url:../assets/Hanafuda_November_Hikari_Alt.svg";
import NovemberTanzaku from "url:../assets/Hanafuda_November_Tanzaku_Alt.svg";
import OctoberKasu1 from "url:../assets/Hanafuda_October_Kasu_1_Alt.svg";
import OctoberKasu2 from "url:../assets/Hanafuda_October_Kasu_2_Alt.svg";
import OctoberTane from "url:../assets/Hanafuda_October_Tane_Alt.svg";
import OctoberTanzaku from "url:../assets/Hanafuda_October_Tanzaku_Alt.svg";
import SeptemberKasu1 from "url:../assets/Hanafuda_September_Kasu_1_Alt.svg";
import SeptemberKasu2 from "url:../assets/Hanafuda_September_Kasu_2_Alt.svg";
import SeptemberTane from "url:../assets/Hanafuda_September_Tane_Alt.svg";
import SeptemberTanzaku from "url:../assets/Hanafuda_September_Tanzaku_Alt.svg";
import * as React from "react";
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
      url = JanuaryKasu1;
      break;
    case "1F2":
      url = JanuaryKasu2;
      break;
    case "1P":
      url = JanuaryTanzaku;
      break;
    case "Crane":
      url = JanuaryHikari;
      break;
    case "2F1":
      url = FebruaryKasu1;
      break;
    case "2F2":
      url = FebruaryKasu2;
      break;
    case "2S":
      url = FebruaryTane;
      break;
    case "2P":
      url = FebruaryTanzaku;
      break;
    case "3F1":
      url = MarchKasu1;
      break;
    case "3F2":
      url = MarchKasu2;
      break;
    case "3P":
      url = MarchTanzaku;
      break;
    case "Curtain":
      url = MarchHikari;
      break;
    case "4F1":
      url = AprilKasu1;
      break;
    case "4F2":
      url = AprilKasu2;
      break;
    case "4S":
      url = AprilTane;
      break;
    case "4P":
      url = AprilTanzaku;
      break;
    case "5F1":
      url = MayKasu1;
      break;
    case "5F2":
      url = MayKasu2;
      break;
    case "5P":
      url = MayTanzaku;
      break;
    case "Bridge":
      url = MayTane;
      break;
    case "6F1":
      url = JuneKasu1;
      break;
    case "6F2":
      url = JuneKasu2;
      break;
    case "6P":
      url = JuneTanzaku;
      break;
    case "Butterflies":
      url = JuneTane;
      break;
    case "7F1":
      url = JulyKasu1;
      break;
    case "7F2":
      url = JulyKasu2;
      break;
    case "7P":
      url = JulyTanzaku;
      break;
    case "Boar":
      url = JulyTane;
      break;
    case "8F1":
      url = AugustKasu1;
      break;
    case "8F2":
      url = AugustKasu2;
      break;
    case "8S":
      url = AugustTane;
      break;
    case "Moon":
      url = AugustHikari;
      break;
    case "9F1":
      url = SeptemberKasu1;
      break;
    case "9F2":
      url = SeptemberKasu2;
      break;
    case "9P":
      url = SeptemberTanzaku;
      break;
    case "Sake":
      url = SeptemberTane;
      break;
    case "10F1":
      url = OctoberKasu1;
      break;
    case "10F2":
      url = OctoberKasu2;
      break;
    case "10P":
      url = OctoberTanzaku;
      break;
    case "Deer":
      url = OctoberTane;
      break;
    case "Lightning":
      url = NovemberKasu;
      break;
    case "11S":
      url = NovemberTane;
      break;
    case "11P":
      url = NovemberTanzaku;
      break;
    case "Man":
      url = NovemberHikari;
      break;
    case "12F1":
      url = DecemberKasu1;
      break;
    case "12F2":
      url = DecemberKasu2;
      break;
    case "12F3":
      url = DecemberKasu3;
      break;
    case "Phoenix":
      url = DecemberHikari;
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
