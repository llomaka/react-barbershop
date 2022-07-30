// import { Suspense } from 'react';
import AppBar from '../AppBar';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <>
      <header style={{backgroundColor: '#303030', color: '#FFF'}}>
        <Container maxWidth='lg'>
          <AppBar />
        </Container>
      </header>
      <main>
        <Container maxWidth='lg'>
          {/* <Suspense fallback={<Typography variant='h2' align='center'>Loading Interface...</Typography>}> */}
            <Outlet />
          {/* </Suspense> */}
        </Container>
      </main>
      {/* <footer> */}
      {/* </footer> */}
    </>
  );
};
