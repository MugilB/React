import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Nav from './Nav';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Real Estate.in
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [
  {
    id: 1,
    image: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/10/condo-vs-apartment.jpeg.jpg',
    heading: '3BHK Villa',
    description: 'Madurai, India'
  },
  {
    id: 2,
    image: 'https://images.adsttc.com/media/images/637c/cc4e/db20/0f35/7400/b765/large_jpg/housing-apartment-at-badade-nagar-studio-frozen-music_1.jpg?1669123187',
    heading: '2BHK Villa',
    description: 'Salem, India'
  },
  {
    id: 3,
    image: 'https://theoliviapdx.com/assets/images/cache/staged1-b415306b636d05f74593d376d72df284.jpg',
    heading: '3BHK Villa',
    description: 'Trichy, India'
  },
  {
    id: 4,
    image: 'https://teja12.kuikr.com/is/a/c/880x425/public/images/apartments/original_img/k9yqlp.gif',
    heading: '3BHK Villa',
    description: 'Chennai, India'
  },
  {
    id: 5,
    image: 'https://www.bhg.com/thmb/dgy0b4w_W0oUJUxc7M4w3H4AyDo=/1866x0/filters:no_upscale():strip_icc()/living-room-gallery-shelves-l-shaped-couch-ELeyNpyyqpZ8hosOG3EG1X-b5a39646574544e8a75f2961332cd89a.jpg',
    heading: '2.5 BHK Villa',
    description: 'Namakkal, India'
  },
  {
    id: 6,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/351460111.jpg?k=bfd5aa99967b138e511f42557391b2b8cce2de0f55c727a10e515386d437787a&o=&hp=1',
    heading: '2BHK Villa',
    description: 'Hosur, India'
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/v1668755210/Website/CMS-Uploads/JWS05284_5_67_c5cbkw.jpg',
    heading: '3BHK Villa',
    description: 'Erode, India'
  },
  {
    id: 8,
    image: 'https://www.thespruce.com/thmb/uaCt1KodctrWniOEyCv2gMrE1QU=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/large-multi-condos-building-blocks-with-bicycles-lane-1174752803-9d506d8c43484c34b32f03afecf0d8c3.jpg',
    heading: '2BHK Villa',
    description: 'Dindugul, India'
  },
  {
    id: 9,
    image: 'https://www.thespruce.com/thmb/uaCt1KodctrWniOEyCv2gMrE1QU=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/large-multi-condos-building-blocks-with-bicycles-lane-1174752803-9d506d8c43484c34b32f03afecf0d8c3.jpg',
    heading: '3BHK Villa',
    description: 'Virudhunagar, India'
  },
  {
    id: 10,
    image: 'https://im.proptiger.com/1/3113144/6/haripriya-apartment-elevation-119033224.jpeg',
    heading: '1BHK Villa',
    description: 'Thiruvarur, India'
  },
  {
    id: 11,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/480318805.jpg?k=57676a3c9ec5acd1777dcdee1e5c2a5d5b841be7f64859643687e63e5273795e&o=&hp=1',
    heading: '3BHK Villa',
    description: 'Madurai, India'
  },
  {
    id: 12,
    image: 'https://rhotelgeelong.com.au/wp-content/uploads/2021/03/R-Hotel-Geelong-1-Bedroom-8-scaled.jpg',
    heading: '2BHK Villa',
    description: 'Krishnagiri, India'
  },
  
  
];


const defaultTheme = createTheme();



export default function Bapart() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Nav/>
      <main>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={5}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  style={{backgroundColor:"rgba(255,255,255,0.7"}}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button size="small">
                  <Link to={`/details/apartments/${card.id}/${encodeURIComponent(card.heading)}/${encodeURIComponent(card.description)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    Contact
                  </Link>
                  </Button>              
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Real Estate
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Real Estate private limited
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
