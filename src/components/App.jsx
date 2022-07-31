import { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SharedLayout from './SharedLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Features from '../pages/Features';
import Prices from '../pages/Prices';
import Gallery from '../pages/Gallery';
import Masters from '../pages/Masters';
import Contacts from '../pages/Contacts';
import Appointment from '../pages/Appointment';

// mock URL: https://1b8325ca-1174-4df8-a9e2-2e1c7b6ed606.mock.pstmn.io

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
            <Route path='home' element={<Home /> } />
            <Route path='about' element={<About /> } />
            <Route path='prices' element={<Prices /> } />
            <Route path='features' element={<Features /> } />
            <Route path='masters' element={<Masters /> } />
            <Route path='gallery' element={<Gallery /> } />
            <Route path='appointment' element={<Appointment /> } />
            <Route path='contacts' element={<Contacts /> } />
            <Route path='*' element={<Home /> } />
          </Route>
        </Routes>
      </ThemeProvider>
    </Box>
  );
}
