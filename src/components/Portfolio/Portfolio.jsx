import { Box, Typography, ImageList, ImageListItem } from "@mui/material";
import gallery1_418 from '../../images/gallery1-418.webp';
import gallery2_418 from '../../images/gallery2-418.webp';
import gallery3_418 from '../../images/gallery3-418.webp';
import gallery4_418 from '../../images/gallery4-418.webp';
import gallery1_330 from '../../images/gallery1-330.webp';
import gallery2_330 from '../../images/gallery2-330.webp';
import gallery3_330 from '../../images/gallery3-330.webp';
import gallery4_330 from '../../images/gallery4-330.webp';
import gallery1_270 from '../../images/gallery1-270.webp';
import gallery2_270 from '../../images/gallery2-270.webp';
import gallery3_270 from '../../images/gallery3-270.webp';
import gallery4_270 from '../../images/gallery4-270.webp';

export default function Portfolio() {
  const imagesMobArray = [
    { src: gallery1_418 },
    { src: gallery2_418 },
    { src: gallery3_418 },
    { src: gallery4_418 },
  ];
  const imagesTabArray = [
    { src: gallery1_330 },
    { src: gallery2_330 },
    { src: gallery3_330 },
    { src: gallery4_330 },
  ];
  const imagesDesktopArray = [
    { src: gallery1_270 },
    { src: gallery2_270 },
    { src: gallery3_270 },
    { src: gallery4_270 },
  ];

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
        In Latin "Barba" means "Beard"
      </Typography>
      <ImageList sx={{ display: { md: 'none' }, width: 418, mx: 'auto' }} cols={1} gap={30}>
        {imagesMobArray.map((image, index) => (<ImageListItem key={index}>
          <img src={image.src} alt='Barber services Customer' />
        </ImageListItem>))}
      </ImageList>
      <ImageList sx={{ display: { xs: 'none', md: 'grid', lg: 'none' }, width: 690, mx: 'auto' }} cols={2} gap={30}>
        {imagesTabArray.map((image, index) => (<ImageListItem key={index}>
          <img src={image.src} alt='Barber services Customer' />
        </ImageListItem>))}
      </ImageList>
      <ImageList sx={{ display: { xs: 'none', lg: 'grid' }, width: 1170, mx: 'auto' }} cols={4} gap={30}>
        {imagesDesktopArray.map((image, index) => (<ImageListItem key={index}>
          <img src={image.src} alt='Barber services Customer' />
        </ImageListItem>))}
      </ImageList>
    </Box>
  );
}
