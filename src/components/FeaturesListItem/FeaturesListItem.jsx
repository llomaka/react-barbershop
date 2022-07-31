import { Box, Typography } from "@mui/material";

export default function FeaturesListItem({ value, text, mt }) {

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px'
    }}>
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '3rem',
          '&::after': {
            fontSize: '2.5rem',
            verticalAlign: 'super',
            content: '"+"',
            fontWeight: 'initial',
            color: '#FF6C00'
          }
        }}
      >
        {value}
      </Typography>
      <Typography variant='body2' align='center'>{text}</Typography>
    </Box>
  );
}
