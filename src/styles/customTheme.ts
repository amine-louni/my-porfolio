import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    body: "Lexend, sans-serif",
    heading: "Lexend, serif",
  },

  colors: {
    ...theme.colors,
    brand: {
      "50": "#efe5fa",
      "100": "#d5c0f3",
      "200": "#b995ec",
      "300": "#9c68e5",
      "400": "#8544df",
      "500": "#6c16d8",
      "600": "#6110d2",
      "700": "#5001ca",
      "800": "#3f00c4",
      "900": "#1f00b6",
    },
    white: "#F7F7F7",
    black: "#333",

    /** Example */
    // teal: {
    //   ...theme.colors.teal,
    //   700: "#005661",
    //   500: "#00838e",
    //   300: "#4fb3be",
    // },
  },
  components: {
    /** Example */
    // Button: {
    //   baseStyle: {
    //     borderRadius: 24,
    //   },
    // },
  },
});

export default customTheme;
