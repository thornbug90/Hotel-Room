import { createTheme } from '@mui/material/styles';

// declare module '@mui/material/styles' {
//     interface Theme {
//         status: {
//             danger: React.CSSProperties['color'];
//         };
//     }

//     interface PaletteColor {
//         darker?: string;
//     }
//     interface SimplePaletteColorOptions {
//         darker?: string;
//     }
//     interface ThemeOptions {
//         status: {
//             danger: React.CSSProperties['color'];
//         };
//     }
// }

const theme = createTheme({
  palette: {
    primary: {
      main: '#08839d',
      light: '#2196f3',
      dark: '#0f4570',
    },
    success: {
      main: "#089d6b"
    },
    info: {
      main: '#a92793'
    },
    text: {
      primary: "#505868",
      secondary: "#868b97",
    }
  },
});

export default theme;