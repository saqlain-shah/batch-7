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
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
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
        <ListItem button onClick={() => handleClick('dashboard')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {openItems['dashboard'] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openItems['dashboard']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Sub-item 1" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Sub-item 2" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => handleClick('orders')}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
          {openItems['orders'] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openItems['orders']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Order 1" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
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
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Customer 1" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Customer 2" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick('categories')}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
          {openItems['categories'] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openItems['categories']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Category 1" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Category 2" />
            </ListItem>
          </List>
        </Collapse>


        <ListItem button onClick={() => handleClick('invoice')}>
          <ListItemIcon>
            <ReceiptIcon />
          </ListItemIcon>
          <ListItemText primary="invoice" />
          {openItems['invoice'] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openItems['invoice']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="invoice 1" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="invoice 2" />
            </ListItem>
          </List>
        </Collapse>


<ListItem button onClick={() => handleClick('Payment')}>
          <ListItemIcon>
            <PaymentsIcon />
          </ListItemIcon>
          <ListItemText primary="Payment" />
          {openItems['Payment'] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openItems['Payment']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Payment 1" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Payment 2" />
            </ListItem>
          </List>
        </Collapse>



      </List>
    </Drawer>
  );
};

export default Sidebar;
