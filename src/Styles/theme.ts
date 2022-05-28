import { createTheme } from "@mui/material";

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
    fontFamily: "Comfortaa, Poppins",
    body1: {
      fontFamily: "Poppins",
      fontSize: 20,
    },
    body2: {
      fontFamily: "Confortaa",
      fontSize: 20,
    },
  },
});

export { theme };
