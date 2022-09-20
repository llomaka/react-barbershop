import { Card, Typography, CardActions, CardContent, List, ListItem, CardMedia, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function MastersListItem({ master }) {
  const { image, name, title, instagram, twitter, facebook, linkedin } = master;

  return (
    <Card elevation={0} sx={{ backgroundColor: '#F7F7F7' }}>
      <CardMedia component='img' image={image} alt={name} />
      <CardContent>
        <Typography variant='h5' component='h3' align='center' mb='8px'>{name}</Typography>
        <Typography align='center' sx={{ color: '#FF6C00' }}>{title}</Typography>
      </CardContent>
      <CardActions>
        <List sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', mx: 'auto' }}>
          <ListItem key='instagram' sx={{padding: 0}}>
            <Link href={instagram} target='_blank' sx={{width: 44, height: 44, backgroundColor: '#FFFFFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#303030', transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)', '&:hover': { color: '#FF6C00' }}}>
              <InstagramIcon sx={{ color: 'currentColor' }} />
            </Link>
          </ListItem>
          <ListItem key='twitter' sx={{padding: 0}}>
            <Link href={twitter} target='_blank' sx={{width: 44, height: 44, backgroundColor: '#FFFFFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#303030', transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)', '&:hover': { color: '#FF6C00' }}}>
              <TwitterIcon sx={{ color: 'currentColor' }} />
            </Link>
          </ListItem>
          <ListItem key='facebook' sx={{padding: 0}}>
            <Link href={facebook} target='_blank' sx={{width: 44, height: 44, backgroundColor: '#FFFFFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#303030', transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)', '&:hover': { color: '#FF6C00' }}}>
              <FacebookIcon sx={{ color: 'currentColor' }} />
            </Link>
          </ListItem>
          <ListItem key='linkedin' sx={{padding: 0}}>
            <Link href={linkedin} target='_blank' sx={{width: 44, height: 44, backgroundColor: '#FFFFFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#303030', transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)', '&:hover': { color: '#FF6C00' }}}>
              <LinkedInIcon sx={{ color: 'currentColor' }} />
            </Link>
          </ListItem>
        </List>
      </CardActions>
    </Card>
  );
}
