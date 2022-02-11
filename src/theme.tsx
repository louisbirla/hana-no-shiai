import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const HANA_BLUE = "#80E3ED";
export const HANA_GRAY = "#333333";
export const HANA_GREEN = "#50B271";
export const HANA_ORANGE = "#FF970D";
export const HANA_PINK = "#FF8DB6";
export const HANA_PURPLE = "#5D4E8C";
export const HANA_RED = "#D81E1E";
export const HANA_YELLOW = "#FFEB5C";

const theme = extendTheme({
  config,
  colors: {
    hanaBlue: {
      100: HANA_BLUE,
    },
    hanaGray: {
      100: HANA_GRAY,
    },
    hanaGreen: {
      100: HANA_GREEN,
    },
    hanaOrange: {
      100: HANA_ORANGE,
    },
    hanaPink: {
      100: HANA_PINK,
    },
    hanaPurple: {
      100: HANA_PURPLE,
    },
    hanaRed: {
      100: HANA_RED,
    },
    hanaYellow: {
      100: HANA_YELLOW,
    },
    gray: {
      "50": "#F2F2F2",
      "100": "#DBDBDB",
      "200": "#C4C4C4",
      "300": "#ADADAD",
      "400": "#969696",
      "500": "#808080",
      "600": "#666666",
      "700": "#4D4D4D",
      "800": "#333333",
      "900": "#1A1A1A",
    },
    green: {
      "50": "#EDF7F1",
      "100": "#CDE9D7",
      "200": "#AEDBBD",
      "300": "#8ECDA3",
      "400": "#6EBF89",
      "500": "#4EB16F",
      "600": "#3E8E59",
      "700": "#2F6A43",
      "800": "#1F472D",
      "900": "#102316",
    },
    orange: {
      "50": "#FFF4E5",
      "100": "#FFE0B8",
      "200": "#FFCD8A",
      "300": "#FFB95C",
      "400": "#FFA52E",
      "500": "#FF9100",
      "600": "#CC7400",
      "700": "#995700",
      "800": "#663A00",
      "900": "#331D00",
    },
    pink: {
      "50": "#FFE5EF",
      "100": "#FFB8D1",
      "200": "#FF8AB4",
      "300": "#FF5C96",
      "400": "#FF2E79",
      "500": "#FF005C",
      "600": "#CC0049",
      "700": "#990037",
      "800": "#660025",
      "900": "#330012",
    },
    purple: {
      "50": "#F0EFF6",
      "100": "#D6D1E5",
      "200": "#BCB4D5",
      "300": "#A196C5",
      "400": "#8779B4",
      "500": "#6D5BA4",
      "600": "#574983",
      "700": "#413762",
      "800": "#2C2442",
      "900": "#161221",
    },
    red: {
      "50": "#FCE9E9",
      "100": "#F6C0C0",
      "200": "#F19898",
      "300": "#EB7070",
      "400": "#E54747",
      "500": "#E01F1F",
      "600": "#B31919",
      "700": "#861313",
      "800": "#5A0C0C",
      "900": "#2D0606",
    },
    yellow: {
      "50": "#FFFCE5",
      "100": "#FFF6B8",
      "200": "#FFF18A",
      "300": "#FFEB5C",
      "400": "#FFE52E",
      "500": "#FFE000",
      "600": "#CCB300",
      "700": "#998600",
      "800": "#665900",
      "900": "#332D00",
    },
  },
  styles: {
    global: {
      body: {
        bg: "hanaGray.100",
        color: "white",
      },
      a: {
        color: "blue",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});

export default theme;
