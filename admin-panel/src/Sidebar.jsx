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

  // Array of sidebar items
  const sidebarItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, link: '/dashboard' },
    {
      text: 'Orders',
      icon: <ShoppingCartIcon />,
      subItems: [
        { text: 'Order 1', link: '/orders/order1' },
        { text: 'Order 2', link: '/orders/order2' },
      ],
    },
    {
      text: 'Customers',
      icon: <PeopleIcon />,
      subItems: [
        { text: 'Customer 1', link: '/customers/customer1' },
        { text: 'Customer 2', link: '/customers/customer2' },
      ],
    },
    { text: 'Categories', icon: <CategoryIcon />, link: '/categories' },
    { text: 'Invoices', icon: <ReceiptIcon />, link: '/invoices' },
    { text: 'Payments', icon: <PaymentsIcon />, link: '/payments' },
  ];

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
        {sidebarItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              button
              component={Link}
              to={item.link}
              onClick={() => item.subItems && handleClick(item.text)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
              {item.subItems && (openItems[item.text] ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            {item.subItems && (
              <Collapse in={openItems[item.text]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem, subIndex) => (
                    <ListItem
                      key={subIndex}
                      button
                      component={Link}
                      to={subItem.link}
                      sx={{ pl: 4 }}
                    >
                      <ListItemText primary={subItem.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
