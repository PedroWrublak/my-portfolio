import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#4A518C',
      },
      secondary: {
        main: '#434EB6',
      },
    },
    typography: {
        fontFamily: "-apple-system"
    }
  });

  theme = responsiveFontSizes(theme);

export default theme;