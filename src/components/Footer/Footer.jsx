import Copyright from '../Copyright';
import SocialLinks from '../SocialLinks';
import { Box } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ display: { md: 'flex' }, justifyContent: { md: 'space-between' }, alignItems: { md: 'center' } }}>
      <Copyright />
      <SocialLinks />
    </Box>
  );
}
