import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import image1_270 from '../../images/about1-270.webp';
import image2_270 from '../../images/about2-270.webp';
import image1_330 from '../../images/about1-330.webp';
import image2_330 from '../../images/about2-330.webp';

export default function AboutCompany() {
  return (
    <Box sx={{ display: { md: 'flex' }, gap: {md: '50px', lg: '70px'} }}>
      <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'none' }, flexDirection: 'column', gap: '30px' }}>
        <Box
          component='img'
          src={image1_330}
          alt='Barber works with the customer'
          sx={{ width: 330, height: 235 }}
        />
        <Box
          component='img'
          src={image2_330}
          alt='Barber works with the customer'
          sx={{ width: 330, height: 235 }}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: '30px' }}>
        <Box
          component='img'
          src={image1_270}
          alt='Barber works with the customer'
          sx={{ width: 270, height: 445 }}
        />
        <Box
          component='img'
          src={image2_270}
          alt='Barber works with the customer'
          sx={{ width: 270, height: 445 }}
        />
      </Box>
      <Box>
        <Typography sx={{
          color: '#303030',
          textTransform: 'uppercase',
          ml: { sm: '80px' },
          position: { sm: 'relative' },
          '&::before': {
            sm: {
              position: 'absolute',
              left: -80,
              top: '0.5em',
              content: '""',
              width: 60,
              height: 1,
              background: '#303030',
            }
          }
        }}>
          About us
        </Typography>
        <Typography variant='h4' component='h2' mb={2}>Best BarberShop in Your city</Typography>
        <Typography color='#555555' mb={2}>If You want to add more confidence into Your look - we are the best choice.</Typography>
        <Typography color='#555555' mb={2}>We are the team who never stops at what has been accomplished and longs for changes. After encountering one of our masters You'll never be the same again. Out team is always on the same wavelength with the Customer. Therefore we are ready to upgrade everyone who comes to us.</Typography>
        <Typography color='#555555' mb={2}>Learn more about us:</Typography>
        <List>
          <ListItem key='features'>
            <Link to='features' style={{display: 'flex', alignItems: 'center', color: 'currentcolor'}}>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                BarberShop Features
              </ListItemText>
            </Link>
          </ListItem>
          <ListItem key='gallery'>
            <Link to='gallery' style={{display: 'flex', alignItems: 'center', color: 'currentcolor'}}>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                BarberShop Gallery
              </ListItemText>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
