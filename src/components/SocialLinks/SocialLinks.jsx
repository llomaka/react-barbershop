import { Link, Box } from "@mui/material";

export default function SocialLinks() {
  return (
    <Box
      sx={{
        mt: 2,
        color: '#303030',
        textAlign: {xs: 'center', md: 'initial'},
        display: { sm: 'flex' },
        flexDirection: { sm: 'column', md: 'row' },
        gap: { sm: '24px', md: '40px' },
        justifyContent: { md: 'center' },
      }}
    >
      <Link
        href='https://www.instagram.com/goitclub/'
        target='_blank'
        rel='noreferrer noopener nofollow'
        sx={{
          color: 'inherit',
          display: 'block',
          marginLeft: { md: '80px' },
          position: { md: 'relative' },
          '&::before': {
            md: {
              position: 'absolute',
              left: -100,
              top: '0.6em',
              marginRight: '40px',
              content: '""',
              width: '60px',
              height: '1px',
              background: '#303030'
            }
          }
        }}
      >
        Instagram
      </Link>
      <Link
        href='https://www.youtube.com/channel/UCN7NQEBOUuIoXrJZzqVb58Q'
        target='_blank'
        rel='noreferrer noopener nofollow'
        sx={{ color: 'inherit', display: 'block' }}
      >
        Youtube
      </Link>
    </Box>
  );
}
