import { Card, Typography, CardActions, CardContent, List, ListItem, CardMedia, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function MastersListItem({ master }) {
  const { image, name, title, instagram, twitter, facebook, linkedin } = master;

  return (
    <Card elevation={0}>
      <CardMedia component='img' image={image} alt={name} />
      <CardContent>
        <Typography variant='h5' component='h3' align='center' mb='8px'>{name}</Typography>
        <Typography align='center'>{title}</Typography>
      </CardContent>
      <CardActions>
        <List sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', mx: 'auto'}}>
          <ListItem key='instagram'>
            <Link href={instagram} target='_blank'>
              <InstagramIcon sx={{ color: '#303030' }} />
            </Link>
          </ListItem>
          <ListItem key='twitter'>
            <Link href={twitter} target='_blank'>
              <TwitterIcon sx={{ color: '#303030' }} />
            </Link>
          </ListItem>
          <ListItem key='facebook'>
            <Link href={facebook} target='_blank'>
              <FacebookIcon sx={{ color: '#303030' }} />
            </Link>
          </ListItem>
          <ListItem key='linkedin'>
            <Link href={linkedin} target='_blank'>
              <LinkedInIcon sx={{ color: '#303030' }} />
            </Link>
          </ListItem>
        </List>
      </CardActions>
    </Card>
  );
}
