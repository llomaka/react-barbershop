import { Typography, Box } from "@mui/material";

export default function Hero() {
  return (
    <Box sx={{bgcolor: {xs: '#303030', sm: 'initial'}, width: {sm: 450, md: 'unset'}, py: {xs: '50px', sm: 'initial'}}}>
      <Typography sx={{
        color: 'rgba(157, 164, 189, 0.8)',
        textTransform: 'uppercase',
        ml: {sm: '80px'},
        position: {sm: 'relative'},
        '&::before': {sm: {
          position: 'absolute',
          left: -80,
          top: '0.5em',
          content: '""',
          width: 60,
          height: 1,
          background: 'rgba(157, 164, 189, 0.8)',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        }}
      }}>A hair salon for men in Kyiv</Typography>
      <Typography variant='h1' color='#fff' sx={{ fontWeight: 'bold', fontSize: { sm: 80 } }}>BarberShop</Typography>
      <Typography color='#9DA4BD'>We are experts in stylish men haircuts. We provide services fast, gently and tastefully.</Typography>
    </Box>
  );
}
