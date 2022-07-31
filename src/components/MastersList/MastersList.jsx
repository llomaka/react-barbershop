import { Box, List, ListItem, Typography } from '@mui/material';
import MastersListItem from '../MastersListItem';
import master1_418 from '../../images/master1-418.webp';
import master2_418 from '../../images/master2-418.webp';
import master3_418 from '../../images/master3-418.webp';
import master1_450 from '../../images/master1-450.webp';
import master2_450 from '../../images/master2-450.webp';
import master3_450 from '../../images/master3-450.webp';
import master1_370 from '../../images/master1-370.webp';
import master2_370 from '../../images/master2-370.webp';
import master3_370 from '../../images/master3-370.webp';

export default function MastersList() {
  const picturesArray = [master1_450, master2_450, master3_450, master1_370, master2_370, master3_370];
  const mastersMobArray = [
    {
      name: 'John Smith',
      title: 'Extreme Barber',
      image: master1_418,
      instagram: 'https://www.instagram.com/goit.ua/',
      twitter: 'https://twitter.com/goitclub',
      facebook: 'https://www.facebook.com/profile.php?id=100017248989303',
      linkedin: 'https://ua.linkedin.com/in/anton-chornyi'
    },
    {
      name: 'Michele Doe',
      title: 'Extreme Barber',
      image: master2_418,
      instagram: 'https://www.instagram.com/goit.ua/',
      twitter: 'https://twitter.com/goitclub',
      facebook: 'https://www.facebook.com/profile.php?id=100017248989303',
      linkedin: 'https://ua.linkedin.com/in/anton-chornyi'
    },
    {
      name: 'Alan Black',
      title: 'Extreme Barber',
      image: master3_418,
      instagram: 'https://www.instagram.com/goit.ua/',
      twitter: 'https://twitter.com/goitclub',
      facebook: 'https://www.facebook.com/profile.php?id=100017248989303',
      linkedin: 'https://ua.linkedin.com/in/anton-chornyi'
    }
  ];
  const mastersTabArray = mastersMobArray.map((master, index) => ({ ...master, image: picturesArray[index] }));
  const mastersDesktopArray = mastersMobArray.map((master, index) => ({ ...master, image: picturesArray[index+3] }));

  return (
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
          For Genuine Mood Devotees
        </Typography>
        <Typography variant='h4' component='h2' mb={2}>Our Masters</Typography>
      <List sx={{display: {md: 'none'}}}>
        {mastersMobArray.map((master, index) => (
          <ListItem key={index} sx={{width: 418, mx: 'auto'}}>
            <MastersListItem master={master} />
          </ListItem>
        ))}
      </List>
      <List sx={{display: {xs: 'none', md: 'block', lg: 'none'}}}>
        {mastersTabArray.map((master, index) => (
          <ListItem key={index} sx={{width: 450, mx: 'auto'}}>
            <MastersListItem master={master} />
          </ListItem>
        ))}
      </List>
      <List sx={{display: {xs: 'none', lg: 'flex'}, gap: '30px'}}>
        {mastersDesktopArray.map((master, index) => (
          <ListItem key={index} sx={{width: 370}}>
            <MastersListItem master={master} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
