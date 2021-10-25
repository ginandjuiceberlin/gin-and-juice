import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#00404B",
      dark: "#00404B",
      main: "#00404B",
    },
    secondary: {
      light: "#8AC6D1",
      dark: "#8AC6D1",
      main: "#8AC6D1",
    },
    background: {
      default: "#00404B05",
      paper: "#1D3557",
    },
    common: {
      white: "#fff",
      black: "#000",
    },
  },
  typography: {
    fontFamily: [
      "Varela Round",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { padding: 0 },
      },
    },
  },
});

export default theme;
