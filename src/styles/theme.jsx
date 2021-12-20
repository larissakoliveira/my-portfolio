import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    purple: {
      400: "#422040",
    },
    gray: {
      100: "#dcdde1",
      300: "#1e272e",
    },
    orange: {
      100: "#F16623",
    },
    green: {
      500: "#20bf6b",
    },
    red: {
      500: "#e84118",
    },
    white: {
      50: "#ffffff",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Fira Code, monospace"
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  styles: {
    global: {
      body: {
        bg: "brack",
        color: "#000000",
        overflowX: "hidden",
        overflowY: "auto",

        "&::-webkit-scrollbar": {
          width: "10px",
        },

        "&::-webkit-scrollbar-track": {
          background: "purple.100",
        },

        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "orange.700",
        },
      },
    },
  },
});