import { Box, Typography, List, ListItem } from '@mui/material';
import FeaturesListItem from '../FeaturesListItem';

export default function FeaturesList() {
  const featuresArray = [
    {
      value: 160,
      text: 'Satisfied Customers a day',
      mt: 0
    },
    {
      value: 50,
      text: 'Excellent Service Awards',
      mt: '30px'
    },
    {
      value: 20,
      text: 'Best Masters in Kyiv',
      mt: 0
    },
    {
      value: 100,
      text: 'Gifts to Loyal Customers',
      mt: '30px'
    }
  ];

  return (
    <Box sx={{display: {lg: 'flex'}, gap: '70px'}}>
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
          Old Traditional School
        </Typography>
        <Typography variant='h4' component='h3' mb={2}>Why Customers choose us?</Typography>
        <Typography color='#555555' mb={2}>There are only good feedback about us. But it is better to see once with own eyes and to feel oneself than to read about it ten times. </Typography>
      </Box>
      <List sx={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(2, 1fr)', width: { xs: 420, md: 450, lg: 370 }, mx: 'auto' }}>
        {featuresArray.map((feature, index) =>
        (<ListItem key={index} sx={{ width: { xs: 193, md: 210, lg: 170 }, height: 133, backgroundColor: '#F7F7F7', marginTop: feature.mt }} >
          <FeaturesListItem value={feature.value} text={feature.text} />
        </ListItem>)
        )}
      </List>
    </Box>
  );
}
