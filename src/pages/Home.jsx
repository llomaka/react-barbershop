import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Carousel />
        <Box sx={{ position: { sm: 'absolute' }, top: '50%', left: '50%', transform: { sm: 'translate(-50%, -50%)' }, zIndex: 100 }}>
          <Hero />
        </Box>
      </Box>
    </>
  );
}
