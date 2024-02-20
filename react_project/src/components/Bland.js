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
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
    image: 'https://www.keralarealestate.com/image/lg/property/property/2018/06/21/103930218/images/3.jpg',
    heading: '12 Acres Land',
    description: 'Madurai, India'
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzISR_h03vdUU2uw186KazJKsnoTDGBgeGq6TRoFjuzpLCSJNSZjk8-yuWYlK6oGirZ8&usqp=CAU',
    heading: '3542 Sq.ft Land',
    description: 'Salem, India'
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ISC2FFw-xcZYX-xQhFnUewxDzMjs6Z9xlA&usqp=CAU',
    heading: '4700 Sq.ft Land',
    description: 'Trichy, India'
  },
  {
    id: 4,
    image: 'https://5bestincity.com/listimg/India/tiruchirappalli-tn/Ramchand-City-Developers-Professional-Services-Real-estate-agents-Tiruchirappalli-Tamil-Nadu-2.jpg',
    heading: '1550 Sq.ft Land',
    description: 'Chennai, India'
  },
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgNYlLT4JLkSRwlT9aAyEx6zaZ6eGMR_n7g&usqp=CAU',
    heading: '5 Acres Land',
    description: 'Namakkal, India'
  },
  {
    id: 6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPHoioahbDnnAfK74xQJoToNFTJ_qWv6TirQ&usqp=CAU',
    heading: '1980 Sq.ft Land',
    description: 'Hosur, India'
  },
  {
    id: 7,
    image: 'https://aaruthranlanddevelopers.com/wp-content/uploads/2022/08/yuva-bharathi-nagar4-1024x576-1.webp',
    heading: '2BHK Home',
    description: 'Erode, India'
  },
  {
    id: 8,
    image: 'https://www.smergers.com/media/businessphoto/292668-90906663108.JPG',
    heading: '10 Acres Land',
    description: 'Dindugul, India'
  },
  {
    id: 9,
    image: 'https://www.smergers.com/media/businessphoto/694026-59135088564.JPG',
    heading: '22 Acres Land',
    description: 'Virudhunagar, India'
  },
  {
    id: 10,
    image: 'https://3.imimg.com/data3/NN/UE/MY-10436628/land-developers-500x500.jpg',
    heading: '4600 Sq.ft Land',
    description: 'Thiruvarur, India'
  },
  {
    id: 11,
    image: 'https://3.imimg.com/data3/XL/BX/MY-11746936/industrial-property-development-service-500x500.jpg',
    heading: '35 Acres Land',
    description: 'Madurai, India'
  },
  {
    id: 12,
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/6/AF/MC/ZU/143012748/whatsapp-image-2022-05-09-at-12-50-20-pm-500x500.jpeg',
    heading: '17 Acres Land',
    description: 'Krishnagiri, India'
  },
  
  
];


const defaultTheme = createTheme();


export default function Bland() {
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
                  style={{ backgroundColor: "rgba(255,255,255,0.7" }}
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
  <Link to={`/details/land/${card.id}/${encodeURIComponent(card.heading)}/${encodeURIComponent(card.description)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
