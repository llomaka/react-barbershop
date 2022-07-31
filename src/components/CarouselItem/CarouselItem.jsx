import { Box } from '@mui/material';

export default function CarouselItem({item}) {
  return (
    <Box
      component='img'
      src={item.src}
      alt={item.alt}
      sx={{
        width: { sm: 480, md: 577, lg: 1073 },
        height: { sm: 580, md: 680, lg: 680 },
        display: 'block',
        mx: 'auto',
      }}
    />
  );
}
