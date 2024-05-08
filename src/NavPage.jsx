import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <List sx={{ display: 'flex' }}>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Product" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Shop" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
          </List>
          <List sx={{ display: 'flex', marginLeft: 'auto' }}>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <Button variant="contained">Sign Up</Button>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button variant="contained">Log In</Button>
            </Link>
          </List>
        </Toolbar>
      </AppBar>
      <div>
      <br /><br /> <br /> <br />
      <Typography variant="h4" component="h4">
      WELCOME TO MY APP
      </Typography>

    <br />
     <Link to="/signup" style={{ textDecoration: 'none' }}>
     <Button variant="contained">Sign Up</Button>
   </Link>
   <br />
   <br /><br />
   <Link to="/login" style={{ textDecoration: 'none' }}>
     <Button variant="contained">Log In</Button>
   </Link>
   </div>
      </Box>


  );
}