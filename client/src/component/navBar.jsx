import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import logo from '../../public/logo.jpeg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const officeInfo = [
  { label: 'Our Office', detail: 'Rinor.netbot, Skardu, Pakistan' },
  { label: 'Email Us', detail: 'netbot@gmail.com' },
  { label: 'Call Us', detail: '+01123223453' },
];

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
    <AppBar position="fixed" sx={{ backgroundColor: 'darkblue' }}>
      <Toolbar
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 10%',
          backgroundColor: 'darkblue',
        }}
      >
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
          <Box>
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  backgroundColor: 'darkblue',
                  padding: '4px 16px',
                  borderRadius: '30px',
                  fontFamily: 'sans-serif',
                  fontWeight: 'bolder',
                  '&:hover': {
                    color: 'yellow',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                NETBOTS
              </Typography>
            </Link>
          </Box>
          <Box sx={{ width: '80%', display: 'flex', justifyContent: 'space-around', gap: 4 }}>
            {officeInfo.map((info, index) => (
              <Box key={index}>
                <Typography variant="body1" color="white">
                  {info.label}
                </Typography>
                <Typography variant="body2" color="white">
                  {info.detail}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'whitesmoke',
            py: 1,
            px: 3,
            mt: 1,
            borderRadius: '5px',
          }}
        >
          <Box sx={{ margin: '0% 12% 0% 4%' }}>
            <img src={logo} alt="Logo" width={40} height={30} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Box
              component="ul"
              sx={{
                width: '80%',
                display: 'flex',
                gap: 10,
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              {navLinks.map((link, index) => (
                <Box component="li" key={index}>
                  <Link to={link.path} style={{ textDecoration: 'none', color: 'darkblue' }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: 'sans-serif',
                        '&:hover': {
                          color: 'red',
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
                {/* User Avatar and Dropdown */}
                <IconButton onClick={handleMenuClick} sx={{ p: 0 }}>
                  <Avatar alt={userName} sx={{ bgcolor: 'darkblue' }}>
                    <AccountCircleIcon />
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                  sx={{ mt: '15px'}}
                >
                  <MenuItem onClick={() => { handleCloseMenu(); navigate('/profile'); }}>
                    My Profile
                  </MenuItem>
                  <MenuItem onClick={() => { handleCloseMenu(); navigate('/orders'); }}>
                    My Orders
                  </MenuItem>
                  <MenuItem onClick={() => { handleCloseMenu(); navigate('/wishlist'); }}>
                    Wishlist
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/login"
                  variant="contained"
                  sx={{
                    backgroundColor: 'darkblue',
                    color: 'white',
                    borderRadius: '5px',
                    '&:hover': {
                      backgroundColor: 'lightblue',
                      color: 'red',
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  sx={{
                    backgroundColor: 'darkblue',
                    color: 'white',
                    borderRadius: '5px',
                    '&:hover': {
                      backgroundColor: 'lightblue',
                      color: 'red',
                    },
                  }}
                >
                  Signup
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
