import { createTheme, responsiveFontSizes } from '@mui/material/styles';

//#3F3F3F sidebar search bar
//#424242 app.js / contact bgcolor
//#4A4A4A app.js / selected contact
//#515151 contact onhover
//#5A5A5A chatfooter color ?
//#666666 chatfooter color ?
//#CCCCCC input text color
//#BDBDBD icons

const baseThemeOptions = {
  palette: {
    type: 'dark',
    primary: {
      main: '#7d67f1',
      contrastText: '#ccc',
      light: 'rgb(151, 133, 243)',
      dark: 'rgb(87, 72, 168)',
    },
    secondary: {
      main: '#5d21ea',
      light: 'rgb(151, 133, 243)',
      dark: 'rgb(87, 72, 168)',
      contrastText: '#ccc',
    },
    error: {
      main: '#f44336',
      light: 'rgb(246, 104, 94)',
      dark: 'rgb(170, 46, 37)',
      contrastText: '#ccc',
    },
    warning: {
      main: '#ff9800',
      light: 'rgb(255, 172, 51)',
      dark: 'rgb(178, 106, 0)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info: {
      main: '#2196f3',
      light: 'rgb(77, 171, 245)',
      dark: 'rgb(23, 105, 170)',
      contrastText: '#ccc',
    },
    success: {
      main: '#4caf50',
      light: 'rgb(111, 191, 115)',
      dark: 'rgb(53, 122, 56)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    typography: {
      fontFamily: 'Lora',
      h1: {
        fontFamily: 'Lora',
        fontSize: '2.4rem',
        lineHeight: 1.17,
        fontWeight: 300,
      },
      fontSize: '1.4rem',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      htmlFontSize: 10,
      h2: {
        fontSize: '2rem',
      },
      h3: {
        fontSize: '1.6rem',
        fontWeight: 400,
        lineHeight: 1.16,
      },
      h4: {
        fontSize: '1.2rem',
        fontWeight: 400,
        lineHeight: 1.21,
      },
      h5: {
        fontSize: '0.8rem',
        fontWeight: 400,
        lineHeight: 1.35,
      },
      h6: {
        fontSize: '0.5rem',
        fontWeight: 500,
        lineHeight: 1.57,
      },
    },
    shape: {
      borderRadius: 5,
    },
    background: {
      default: '#303030',
      paper: '#666666',
    },
  },
};

const secondaryThemeOptions = {
  components: {
    MuiIcon: {
      defaultProps: {
        color: '#1A1AAA',
      },
    },
  },
};

let theme = createTheme(baseThemeOptions);
// theme = responsiveFontSizes(theme);
theme = createTheme(theme, secondaryThemeOptions);

export default theme;
