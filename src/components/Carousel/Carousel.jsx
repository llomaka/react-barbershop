import Slider from 'react-material-ui-carousel';
import SliderItem from '../CarouselItem';
import { Box } from '@mui/material';
import firstImageMobile from '../../images/slider1-480.webp';
import secondImageMobile from '../../images/slider2-480.webp';
import thirdImageMobile from '../../images/slider3-480.webp';
import firstImageTab from '../../images/slider1-577.webp';
import secondImageTab from '../../images/slider2-577.webp';
import thirdImageTab from '../../images/slider3-577.webp';
import firstImageDesktop from '../../images/slider1-1073.webp';
import secondImageDesktop from '../../images/slider2-1073.webp';
import thirdImageDesktop from '../../images/slider3-1073.webp';

export default function Carousel() {
  const slidesMobile = [
    {
      alt: 'barber working with customer',
      src: firstImageMobile
    },
    {
      alt: 'barber working with customer',
      src: secondImageMobile
    },
    {
      alt: 'barber working with customer',
      src: thirdImageMobile
    }
  ];
  const slidesTab = [
        {
      alt: 'barber working with customer',
      src: firstImageTab
    },
    {
      alt: 'barber working with customer',
      src: secondImageTab
    },
    {
      alt: 'barber working with customer',
      src: thirdImageTab
    }
  ];
  const slidesDesktop = [
        {
      alt: 'barber working with customer',
      src: firstImageDesktop
    },
    {
      alt: 'barber working with customer',
      src: secondImageDesktop
    },
    {
      alt: 'barber working with customer',
      src: thirdImageDesktop
    }
  ];

  return (
    <Box sx={{
      position: 'relative',
      '&::before': {
        position: 'absolute',
        content: '""',
        transform: 'translateX(-50%)',
        left: '50%',
        top: 0,
        bgcolor: 'rgba(25, 28, 38, 0.2)',
        zIndex: 99,
        width: {sm: 480, md: 577, lg: 1073},
        height: {sm: 580, md: 680}
      }
    }}>
      <Slider sx={{display: {xs: 'none', sm: 'block', md: 'none'}}}>
        {slidesMobile.map((item, index) => <SliderItem key={index} item={item} />)}
      </Slider>
      <Slider sx={{display: {xs: 'none', md: 'block', lg: 'none'}}}>
        {slidesTab.map((item, index) => <SliderItem key={index} item={item} />)}
      </Slider>
      <Slider sx={{display: {xs: 'none', lg: 'block'}}}>
        {slidesDesktop.map((item, index) => <SliderItem key={index} item={item} />)}
      </Slider>
    </Box>
  );
}

