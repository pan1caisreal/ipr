import { ThemeProvider } from '@mui/material';

import { createTheme } from './theme';
import { Header } from './Header';
import { MainContent } from './MainContent';
import { AppContextProvider } from './AppContext';

export const App = () => {
  const theme = createTheme({});

  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <MainContent />
      </ThemeProvider>
    </AppContextProvider>
  );
};
