import getPriceList from '../../service/priceAPI';
import { Box, List, ListItem, Typography } from '@mui/material';
import { useEffect, useState, useId } from 'react';

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
    <Box>
      {status==='resolved' && <List>
        {prices.map((item, index) => (
          <ListItem key={id+index}>{item.service}: {item.price}</ListItem>
        ))}
      </List>}
      {status === 'pending' && (<Typography>Requesting Prices...</Typography>)}
      {status === 'rejected' && (<Typography>Something went seriously wrong while fetching Price-List. Error message: {error}. Try again later.</Typography>)}
    </Box>
  );
}
