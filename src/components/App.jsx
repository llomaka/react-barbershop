import { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SharedLayout from './SharedLayout';

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
      },
  }), [prefersDarkMode]);

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/*' element={<SharedLayout />}>
            <Route path='home' />
            <Route path='about' />
            <Route path='prices' />
            <Route path='features' />
            <Route path='masters' />
            <Route path='gallery' />
            <Route path='application' />
            <Route path='contacts' />
            <Route path='*' />
          </Route>
        </Routes>
      </ThemeProvider>
    </Box>
  );
}
