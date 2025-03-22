import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2B3A8C", // Deep Blue
      light: "#3D4FA1",
      dark: "#1A2876",
    },
    secondary: {
      main: "#FF6B6B", // Coral
      light: "#FF8585",
      dark: "#FF5252",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F8F9FA",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
    },
  },
});
