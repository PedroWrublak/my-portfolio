import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#36322B',
      },
      secondary: {
        main: '#476FA3',
      },
    },
    typography: {
        fontFamily: "-apple-system"
    }
  });

  theme = responsiveFontSizes(theme);

export default theme;