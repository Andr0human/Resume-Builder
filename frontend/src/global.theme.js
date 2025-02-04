import { createTheme } from '@mui/material/styles';

export const GLOBAL_MUI_THEME = createTheme({
  palette: {
    resume: {
      50: '#E7EEFA',
      100: '#C7D6E4',
      200: '#A8B9CC',
      300: '#889DB3',
      400: '#7188A1',
      500: '#59748F',
      600: '#4C667E',
      700: '#3C5268',
      800: '#2E4052',
      900: '#1C2C3A',
    },
    primary: {
      main: '#2E4052',
    },
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '& > .MuiSwitch-thumb': {
            backgroundColor: '#FFFFFF',
          },
          '&.Mui-checked > .MuiSwitch-thumb': {
            backgroundColor: '#59748F',
          },
          '& + .MuiSwitch-track': {
            backgroundColor: '#C7D6E4',
          },
          '&.Mui-checked + .MuiSwitch-track': {
            backgroundColor: '#C7D6E4',
          },
        },
      },
    },
  },
});
