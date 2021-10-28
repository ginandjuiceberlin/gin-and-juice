import theme from "../src/theme/AppTheme";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { ThemeProvider } from "emotion-theming";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withMuiTheme = (Story) => {
  return (
    <MUIThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </MUIThemeProvider>
  );
};

export const decorators = [withMuiTheme];
