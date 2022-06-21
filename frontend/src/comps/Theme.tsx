import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#00695f',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    secondary: {
      main: '#00352c',
    }
  },
});

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: React.CSSProperties['color'];
      };
    }
  
    interface Palette {
      neutral: Palette['primary'];
    }
    interface PaletteOptions {
      neutral: PaletteOptions['primary'];
    }
  
    interface PaletteColor {
      darker?: string;
    }
    interface SimplePaletteColorOptions {
      darker?: string;
    }
    interface ThemeOptions {
      status: {
        danger: React.CSSProperties['color'];
      };
    }
  }
  
export default defaultTheme;