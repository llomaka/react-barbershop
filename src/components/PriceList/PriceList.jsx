import getPriceList from '../../service/priceAPI';
import { Box, List, ListItem, Typography } from '@mui/material';
import { useEffect, useState, useId } from 'react';
import price480 from '../../images/price480.webp';
import price768 from '../../images/price768.webp';
import price1280 from '../../images/price1280.webp';

export default function PriceList() {
  const [prices, setPrices] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const id = useId();
  const prices1 = prices?.slice(0, Math.ceil(prices?.length / 2));
  const prices2 = prices?.slice(prices1?.length, prices?.length);

  useEffect(() => {
    setStatus('pending');
    getPriceList()
      .then(data => {
        setPrices(data);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error.message);
        setStatus('rejected');
      })
  }, []);

  return (
    <Box sx={{
      height: { xs: 826, md: 858, lg: 718 },
      backgroundColor: '#111319',
      backgroundImage: { xs: `url(${price480})`, md: `url(${price768})`, lg: `url(${price1280})` },
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      py: { xs: '84px', md: '100px', lg: '130px' },
      px: {xs: '31px', md: '39px', lg: '55px'}
    }}>
      <Typography sx={{
        color: 'rgba(157, 164, 189, 0.6)',
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
            background: 'rgba(157, 164, 189, 0.6)',
          }
        }
      }}>
        Spend time with the best masters
      </Typography>
      <Typography variant='h4' component='h2' mb={3} sx={{color: '#FFF'}}>Services and prices</Typography>
      {status === 'resolved' && <List sx={{
        color: '#9DA4BD',
        width: { sm: 418, md: 690 },
        padding: {xs:'30px', md: '40px'},
        background: 'linear-gradient(180deg, #171A24 0%, rgba(23, 26, 36, 0.2) 100%)',
        mx: 'auto',
        display: {lg: 'none'}
      }}>
        {prices.map((item, index) => (
          <ListItem key={id + index} sx={{
            width: '100%',
            display: { sm: 'flex' },
            justifyContent: 'space-between',
            alignItems: 'baseline',
            fontSize: {md: '1.2rem'},
            '&::before': {
              display: 'block',
              width: '100%',
              height: '1px',
              mx: '6px',
              content: '""',
              backgroundColor: 'currentColor',
            }
          }}>
            <Typography sx={{whiteSpace: 'nowrap', order: -1, fontSize: {md: '1.2rem'}}}>{item.service}</Typography>
            <Typography sx={{fontSize: {md: '1.2rem'}}}>{item.price}</Typography>
          </ListItem>
        ))}
      </List>}
      {status === 'resolved' && <Box sx={{color: '#9DA4BD', display: {xs: 'none', lg: 'flex'}}}>
        <List sx={{
        width: 585,
        padding: '40px',
        background: 'linear-gradient(180deg, #171A24 0%, rgba(23, 26, 36, 0.2) 100%)',
      }}>
        {prices1.map((item, index) => (
          <ListItem key={id + index} sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            fontSize: '1.2rem',
            '&::before': {
              display: 'block',
              width: '100%',
              height: '1px',
              mx: '6px',
              content: '""',
              backgroundColor: 'currentColor',
            }
          }}>
            <Typography sx={{whiteSpace: 'nowrap', order: -1, fontSize: '1.2rem'}}>{item.service}</Typography>
            <Typography sx={{fontSize: '1.2rem'}}>{item.price}</Typography>
          </ListItem>
        ))}
        </List>
        <List sx={{
        width: 585,
        padding: '40px',
        background: 'linear-gradient(180deg, #090B13 0%, rgba(9, 11, 19, 0.2) 100%)',
      }}>
        {prices2.map((item, index) => (
          <ListItem key={id + index} sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            fontSize: '1.2rem',
            '&::before': {
              display: 'block',
              width: '100%',
              height: '1px',
              mx: '6px',
              content: '""',
              backgroundColor: 'currentColor',
            }
          }}>
            <Typography sx={{whiteSpace: 'nowrap', order: -1, fontSize: '1.2rem'}}>{item.service}</Typography>
            <Typography sx={{fontSize: '1.2rem'}}>{item.price}</Typography>
          </ListItem>
        ))}
        </List>
      </Box>}
      {status === 'pending' && (<Typography>Requesting Prices...</Typography>)}
      {status === 'rejected' && (<Typography>Something went seriously wrong while fetching Price-List. Error message: {error}. Try again later.</Typography>)}
    </Box>
  );
}
