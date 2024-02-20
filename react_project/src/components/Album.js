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
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    image: 'path/to/your/image1.jpg', // Change this to the path of your image
    heading: 'Custom Heading 1',
    description: 'Your custom description for card 1.',
  },
  {
    id: 2,
    image: 'path/to/your/image2.jpg', // Change this to the path of your image
    heading: 'Custom Heading 2',
    description: 'Your custom description for card 2.',
  },
  {
    id: 2,
    image: 'path/to/your/image2.jpg', // Change this to the path of your image
    heading: 'Custom Heading 2',
    description: 'Your custom description for card 2.',
  },
  {
    id: 2,
    image: 'path/to/your/image2.jpg', // Change this to the path of your image
    heading: 'Custom Heading 2',
    description: 'Your custom description for card 2.',
  },
  {
    id: 2,
    image: 'path/to/your/image2.jpg', // Change this to the path of your image
    heading: 'Custom Heading 2',
    description: 'Your custom description for card 2.',
  },
  {
    id: 2,
    image: 'path/to/your/image2.jpg', // Change this to the path of your image
    heading: 'Custom Heading 2',
    description: 'Your custom description for card 2.',
  },
  {
    id: 2,
    image: 'path/to/your/image2.jpg', // Change this to the path of your image
    heading: 'Custom Heading 2',
    description: 'Your custom description for card 2.',
  },
  {
    id: 2,
    image: 'path/to/your/image2.jpg', // Change this to the path of your image
    heading: 'Custom Heading 2',
    description: 'Your custom description for card 2.',
  },
  {
    id: 2,
    image: 'path/to/your/image2.jpg', // Change this to the path of your image
    heading: 'Custom Heading 2',
    description: 'Your custom description for card 2.',
  },
  {
    id: 2,
    image: 'path/to/your/image2.jpg', // Change this to the path of your image
    heading: 'Custom Heading 2',
    description: 'Your custom description for card 2.',
  },
  {
    id: 2,
    image: 'path/to/your/image2.jpg', // Change this to the path of your image
    heading: 'Custom Heading 2',
    description: 'Your custom description for card 2.',
  },
  {
    id: 2,
    image: 'path/to/your/image2.jpg', // Change this to the path of your image
    heading: 'Custom Heading 2',
    description: 'Your custom description for card 2.',
  },
  
  // Add more cards as needed
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

// ... (existing code)

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Real Estate
          </Typography>
        </Toolbar>
      </AppBar>
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
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
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
