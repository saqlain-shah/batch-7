import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  InputBase,
  Paper,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Topbar = ({ toggleSidebar }) => {
  const [searchText, setSearchText] = useState(''); // State for search input

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          
        </Typography>
         {/* Search bar with Paper for visual separation */}
         <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '30%', // Adjust width as needed
            borderRadius: 1,
          }}
        >
          <IconButton type="submit" sx={{ p: 1 }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            value={searchText}
            onChange={handleSearchChange}
            inputProps={{ 'aria-label': 'search' }}
          />
        </Paper>
        <IconButton color="inherit">
          {/* Add dummy message count here (replace with actual data fetching if needed) */}
          <Badge badgeContent={3} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={5} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>

       

        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      {/* Consider adding a Divider to visually separate the search bar from the rest */}
      {/* <Divider variant="middle" /> */}
    </AppBar>
  );
};

export default Topbar;
