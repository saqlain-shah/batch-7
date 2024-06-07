import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Box,
  Collapse,
} from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import CategoryIcon from '@mui/icons-material/Category';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaymentsIcon from '@mui/icons-material/Payments';

const drawerWidth = 300;

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openItems, setOpenItems] = useState({});

  const handleClick = (item) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [item]: !prevOpenItems[item],
    }));
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      sx={{
        width: isOpen ? drawerWidth : 0,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          transition: 'width 0.3s',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '8px',
        }}
      >
        <IconButton onClick={toggleSidebar}>
          {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Divider />
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button onClick={() => handleClick('orders')}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
          {openItems['orders'] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openItems['orders']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/orders/order1" sx={{ pl: 4 }}>
              <ListItemText primary="Order 1" />
            </ListItem>
            <ListItem button component={Link} to="/orders/order2" sx={{ pl: 4 }}>
              <ListItemText primary="Order 2" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => handleClick('customers')}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Customers" />
          {openItems['customers'] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openItems['customers']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/customers/customer1" sx={{ pl: 4 }}>
              <ListItemText primary="Customer 1" />
            </ListItem>
            <ListItem button component={Link} to="/customers/customer2" sx={{ pl: 4 }}>
              <ListItemText primary="Customer 2" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button component={Link} to="/categories">
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>

        <ListItem button component={Link} to="/invoices">
          <ListItemIcon>
            <ReceiptIcon />
          </ListItemIcon>
          <ListItemText primary="Invoices" />
        </ListItem>

        <ListItem button component={Link} to="/payments">
          <ListItemIcon>
            <PaymentsIcon />
          </ListItemIcon>
          <ListItemText primary="Payments" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
