import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import logo from '../../public/logo.jpeg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const navLinks = [
  { title: 'Home', path: '/home' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

const NavBar = () => {
  const [userName, setUserName] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userValue = JSON.parse(user);
      setUserName(userValue);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUserName('');
    handleCloseMenu();
    navigate('/login');
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#4A90E2' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" width={40} height={30} />
          <Typography variant="h5" sx={{ color: 'yellow', marginLeft: 2 }}>
            Gucci
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'left', paddingLeft:'10%' }}>
          <Box
            component="ul"
            sx={{
              display: 'flex',
              gap: 15,
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {navLinks.map((link, index) => (
              <Box component="li" key={index}>
                <Link to={link.path} style={{ textDecoration: 'none' }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      '&:hover': {
                        color: '#FF4081', // Highlight color for hover effect
                        fontWeight: 'bold',
                      },
                    }}
                  >
                    {link.title}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          {userName ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton onClick={handleMenuClick} sx={{ p: 0 }}>
                <Avatar alt={userName} sx={{ bgcolor: 'darkblue' }}>
                  <AccountCircleIcon />
                </Avatar>
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu} sx={{ mt: '15px' }}>
                <MenuItem onClick={() => { handleCloseMenu(); navigate('/profile'); }}>My Profile</MenuItem>
                <MenuItem onClick={() => { handleCloseMenu(); navigate('/myOrder'); }}>My Orders</MenuItem>
                <MenuItem onClick={() => { handleCloseMenu(); navigate('/wishlist'); }}>Wishlist</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
          ) : (
            <>
              <Button
                component={Link}
                to="/login"
                variant="contained"
                sx={{
                  backgroundColor: '#FF4081',
                  color: 'white=',
                  borderRadius: '5px',
                  '&:hover': {
                    backgroundColor: '#FF79B0',
                    color: 'white',
                  },
                  marginRight: 1,
                }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/register"
                variant="contained"
                sx={{
                  backgroundColor: '#FF4081',
                  color: 'white',
                  borderRadius: '5px',
                  '&:hover': {
                    backgroundColor: '#FF79B0',
                    color: 'white',
                  },
                }}
              >
                Signup
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
