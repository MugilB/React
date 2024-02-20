import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
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
    image: 'https://static.wixstatic.com/media/0fd877_43a4485035ee44b8a31667ce8cdc20a2~mv2.jpg/v1/fill/w_2500,h_1674,al_c,q_90/Exterior%20View%20(4)%2020min%20copy%202.jpg',
    heading: '2BHK Home',
    description: 'Madurai, India'
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fx3DRcHXbXVtjpuUgIZYlWpXtXj3hyxPAQ&usqp=CAU',
    heading: '3800sq.ft with 5BHK',
    description: 'Salem, India'
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD12A4UK2wJdd0yaCroCYYFTaDohGD3AGxQw&usqp=CAU',
    heading: '3BHK Home',
    description: 'Trichy, India'
  },
  {
    id: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuY1tLU62kmvxjwauWjVxjaU1byM4QULwrA&usqp=CAU',
    heading: '2700Sq.ft Home',
    description: 'Chennai, India'
  },
  {
    id: 5,
    image: 'https://images.99land.com/wp-content/uploads/2023/04/01092343/603ce664-5481-4b32-bceb-d3a4904d9f95-scaled.jpeg',
    heading: '2BHK Home',
    description: 'Namakkal, India'
  },
  {
    id: 6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQW6PFrh10il_iatFMjf-41ZtG0V-z_Tm-fA&usqp=CAU',
    heading: '3BHK Home',
    description: 'Hosur, India'
  },
  {
    id: 7,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRB-IJloS9a4sHPxYtKJHaBqZtgEhtGEP2w&usqp=CAU',
    heading: '2BHK Home',
    description: 'Erode, India'
  },
  {
    id: 8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKKxC7woJEa4euUSD84JnEZsyZVjZBLrvAQ&usqp=CAU',
    heading: '1875Sq.ft Home',
    description: 'Dindugul, India'
  },
  {
    id: 9,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdbCpAQmBCTHS_2Nxz-PZFSDriXKRHtSxayHS7yD3MDiF3ESyybLsAJS0awEWQwP2NDls&usqp=CAU',
    heading: '3BHK Home',
    description: 'Virudhunagar, India'
  },
  {
    id: 10,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyztuOaHF3dpkVXqMgosyGpbXQS6b9hYgDqxSR0B1R-rQjuByhi9yHqb5_6cQAwFqDTYM&usqp=CAU',
    heading: '4618Sq.ft Home',
    description: 'Thiruvarur, India'
  },
  {
    id: 11,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRywqzqmkr8kUY0ns0qtjE0J5vd4XZEmgmy61o1PVZK92npT-4sWJMvJ87KMYMwTY0tOs0&usqp=CAU',
    heading: 'Luxury Home',
    description: 'Madurai, India'
  },
  {
    id: 12,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpGufHIRDHEFHmu_dgfi16V5a-WXiPNPtwDw&usqp=CAU',
    heading: '2BHK Home',
    description: 'Krishnagiri, India'
  },
  
  
];


const defaultTheme = createTheme();



export default function Bhome() {
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
                  <Link to={`/details/houses/${card.id}/${encodeURIComponent(card.heading)}/${encodeURIComponent(card.description)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
