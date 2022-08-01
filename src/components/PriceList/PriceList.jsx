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
    }}>
      {status==='resolved' && <List sx={{color: '#fff'}}>
        {prices.map((item, index) => (
          <ListItem key={id+index}>{item.service}: {item.price}</ListItem>
        ))}
      </List>}
      {status === 'pending' && (<Typography>Requesting Prices...</Typography>)}
      {status === 'rejected' && (<Typography>Something went seriously wrong while fetching Price-List. Error message: {error}. Try again later.</Typography>)}
    </Box>
  );
}
