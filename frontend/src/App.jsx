import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { GLOBAL_MUI_THEME } from './global.theme';
import { Authentication } from './modules/user';
import { Router } from './routes';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={GLOBAL_MUI_THEME}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Authentication>
            <Router />
          </Authentication>
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
