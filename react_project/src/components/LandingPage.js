import React from 'react';
import './LandingPage.css';
import { CssBaseline, Popover, Typography, Button, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box'; 
import styled from 'styled-components';
import './LandingPage.css'
import logoImage from './logo.jpg';

const GlassContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  padding: 20px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  `;

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

const LandingPage = ({ theme, setTheme }) => {
  const [buyMenuAnchor, setBuyMenuAnchor] = React.useState(null);
  const [rentMenuAnchor, setRentMenuAnchor] = React.useState(null);
  const [sellMenuAnchor, setSellMenuAnchor] = React.useState(null);

  const handleBuyMenuOpen = (event) => {
    setBuyMenuAnchor(event.currentTarget);
  };

  const handleBuyMenuClose = () => {
    setBuyMenuAnchor(null);
  };

  const handleRentMenuOpen = (event) => {
    setRentMenuAnchor(event.currentTarget);
  };

  const handleRentMenuClose = () => {
    setRentMenuAnchor(null);
  };

  const handleSellMenuOpen = (event) => {
    setSellMenuAnchor(event.currentTarget);
  };

  const handleSellMenuClose = () => {
    setSellMenuAnchor(null);
  };

  return (
    <>
      
        <div className='navbar'>
          <div className='logo-container'>
            <img src={logoImage} alt="Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <h3>Real Estate</h3>
          </div>
          <ul>
            <Button onClick={handleBuyMenuOpen} style={{ color: 'white' }}>
              Buy
            </Button>
            <Popover
              open={Boolean(buyMenuAnchor)}
              anchorEl={buyMenuAnchor}
              onClose={handleBuyMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <Typography>
                <MenuItem onClick={handleBuyMenuClose}>
                  <Link to="/buy/houses" style={{ color: 'black', textDecoration: 'none' }}>Houses</Link>
                </MenuItem>
                <MenuItem onClick={handleBuyMenuClose}>
                  <Link to="/buy/apartments" style={{ color: 'black', textDecoration: 'none' }}>Apartments</Link>
                </MenuItem>
                <MenuItem onClick={handleBuyMenuClose}>
                  <Link to="/buy/land" style={{ color: 'black', textDecoration: 'none' }}>Land</Link>
                </MenuItem>
                
              </Typography>
            </Popover>

            <Button onClick={handleRentMenuOpen} style={{ color: 'white' }}>
              Rent
            </Button>
            <Popover
              open={Boolean(rentMenuAnchor)}
              anchorEl={rentMenuAnchor}
              onClose={handleRentMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <Typography>
                <MenuItem onClick={handleRentMenuClose}>
                  <Link to="/buy/houses" style={{ color: 'black', textDecoration: 'none' }}>Houses</Link>
                </MenuItem>
                <MenuItem onClick={handleRentMenuClose}>
                  <Link to="/buy/apartments" style={{ color: 'black', textDecoration: 'none' }}>Apartments</Link>
                </MenuItem>
                <MenuItem onClick={handleRentMenuClose}>
                  <Link to="/buy/land" style={{ color: 'black', textDecoration: 'none' }}>Land</Link>
                </MenuItem>
                
              </Typography>
            </Popover>

            <Button onClick={handleSellMenuOpen} style={{ color: 'white' }} component={RouterLink} to="/about">
              About Us
            </Button>
            <Button id="end" onClick={handleSellMenuOpen} style={{ color: 'white' }} component={RouterLink} to="/">
              Sign Out
            </Button>
            

            
          </ul>
        </div> 

        
        <CssBaseline />
        
        
        <Box sx={{ bgcolor: 'background.paper', p: 5 }} style={{position: 'fixed',
        bottom: '0',
        width: '100%',height:'40px',backgroundColor:'rgba(255,255,255,0.7)'}}>
        
        <Typography variant="h6" align="center" gutterBottom>
        Copyright © Real Estate.in
        </Typography>
       
      </Box>
    </>
  );
};

export default LandingPage;