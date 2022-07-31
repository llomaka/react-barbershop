import { useMemo, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SharedLayout from './SharedLayout';

// mock URL: https://1b8325ca-1174-4df8-a9e2-2e1c7b6ed606.mock.pstmn.io

const HomePage = lazy(() => import('../pages/Home'));
const AboutPage = lazy(() => import('../pages/About'));
const PricesPage = lazy(() => import('../pages/Prices'));
const MastersPage = lazy(() => import('../pages/Masters'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const AppointmentPage = lazy(() => import('../pages/Appointment'));
const FeaturesPage = lazy(() => import('../pages/Features'));
const GalleryPage = lazy(() => import('../pages/Gallery'));

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
            <Route path='home' element={<HomePage /> } />
            <Route path='about' element={<AboutPage />} >
              <Route path='features' element={<FeaturesPage /> } />
              <Route path='gallery' element={<GalleryPage /> } />
            </Route>
            <Route path='prices' element={<PricesPage /> } />
            <Route path='masters' element={<MastersPage /> } />
            <Route path='appointment' element={<AppointmentPage /> } />
            <Route path='contacts' element={<ContactsPage /> } />
            <Route path='*' element={<HomePage /> } />
          </Route>
        </Routes>
      </ThemeProvider>
    </Box>
  );
}
