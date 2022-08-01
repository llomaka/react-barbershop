import { Box, Typography, List, ListItem, Link } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import contacts480 from '../../images/contacts480.webp';
import contacts768 from '../../images/contacts768.webp';
import contacts1280 from '../../images/contacts1280.webp';

export default function ContactsList() {
  return (
    <Box sx={{
      backgroundColor: '#191C26',
      backgroundImage: { xs: `url(${contacts480})`, md: `url(${contacts768})`, lg: `url(${contacts1280})` },
      height: { xs: 496, md: 449, lg: 748 },
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    }}>
      <Box sx={{marginTop: {xs: 10, lg: '200px'}}}>
        <Typography variant='h4' component='h2' mb={2} color='#fff' align='center'>Contacts</Typography>
        <List sx={{ color: '#9DA4BD' }} mb={3}>
          <ListItem key='address'>
            <Link href='https://goo.gl/maps/2mapbA1Hdi2RTDRf9' target='_blank' rel='noreferrer noopener nofollow' sx={{ display: 'flex', gap: '15px', color: 'inherit', textDecoration: 'none' }}>
              <PlaceIcon />
              <Typography>7A Vasylkivska street, Kyiv, 04132</Typography>
            </Link>
          </ListItem>
          <ListItem key='phone'>
            <Link href='tel:+380441111111' sx={{ display: 'flex', gap: '15px', color: 'inherit', textDecoration: 'none' }}>
              <PhoneIcon />
              <Typography>+38 044 111 11 11</Typography>
            </Link>
          </ListItem>
          <ListItem key='email' target='_blank'>
            <Link href='mailto:barbershop@email.com' sx={{ display: 'flex', gap: '15px', color: 'inherit', textDecoration: 'none' }}>
              <MailOutlineIcon sx={{ color: 'inherit' }} />
              <Typography>barbershop@email.com</Typography>
            </Link>
          </ListItem>
        </List>
        <Typography sx={{
          color: '#FFFFFF',
          textTransform: 'uppercase',
          ml: { sm: '80px' },
          position: { sm: 'relative' },
          padding: '8px 16px',
          '&::before': {
            sm: {
              position: 'absolute',
              left: -66,
              top: '1.1em',
              content: '""',
              width: 60,
              height: 1,
              background: '#9DA4BD',
            }
          }
        }} mb={1}>
          Hours
        </Typography>
        <Typography sx={{ color: '#9DA4BD', padding: '8px 16px' }}>Open 7 days a week from 09:00 till 22:00</Typography>
      </Box>
    </Box>
  );
}
