import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import Copyright from '../components/Copyright';
import SocialLinks from '../components/SocialLinks';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Carousel />
        <Box sx={{ position: { sm: 'absolute' }, top: '50%', left: '50%', transform: { sm: 'translate(-50%, -50%)' }, zIndex: 100 }}>
          <Hero />
        </Box>
        <Box sx={{display: {md: 'flex'}, justifyContent: {md: 'space-between'}, alignItems: {md: 'center'}}}>
          <Copyright />
          <SocialLinks />
        </Box>
      </Box>
    </>
  );
}
