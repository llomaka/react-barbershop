import { Suspense } from 'react';
import AppBar from '../AppBar';
import { Container, Typography } from '@mui/material';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <>
      <header>
        <Container maxWidth='lg'>
          <AppBar />
        </Container>
      </header>
      <main>
        <Container maxWidth='lg'>
          <Suspense fallback={<Typography variant='h2' align='center'>Loading Interface...</Typography>}>
          <Outlet />
          </Suspense>
        </Container>
      </main>
      <footer>
        <Container maxWidth='lg'>
          <Footer />
        </Container>
      </footer>
    </>
  );
}
