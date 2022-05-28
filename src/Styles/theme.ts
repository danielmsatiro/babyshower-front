import { createTheme } from "@mui/material";
import { transform } from "typescript";

let theme = createTheme({
  palette: {
    primary: { main: "#7A9AC9", light: "#7BDFF2" },
    secondary: { main: "#C87BB8", light: "#F2B5D4" },
    warning: { main: "#FF6347" },
    success: { main: "#08F26E" },
    grey: {
      50: "#DCE7E5",
      100: "#B3B3B3",
      200: "#A8A8A8",
      300: "#8D8D8D",
      500: "#444444",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif, 'Comfortaa', cursive",
    body1: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: 20,
    },
    body2: {
      fontFamily: "'Comfortaa', cursive",
      fontSize: 20,
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "text" },
          style: {
            fontSize: theme.typography.body1.fontSize,
            fontFamily: theme.typography.body1.fontFamily,
          },
        },
      ],
    },
  },
});

export { theme };
