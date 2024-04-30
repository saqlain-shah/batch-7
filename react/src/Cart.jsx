import React from 'react';
import { IconButton, Badge, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const products = [
    { id: 1, name: 'Amazon Echo Dot (3rd Gen)', price: 39.99 },
    { id: 2, name: 'Kindle Paperwhite', price: 129.99 },
    { id: 3, name: 'Fire TV Stick 4K', price: 49.99 },
    // Add more products if necessary
  ];

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const totalItems = cartItems.length;

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)} color="inherit">
        <Badge badgeContent={totalItems} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          <ListItem>
            <ListItemText primary={`Cart (${totalItems})`} />
          </ListItem>
          <Divider />
          {totalItems === 0 ? (
            <ListItem>
              <ListItemText primary="Your cart is empty" />
            </ListItem>
          ) : (
            cartItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item.name} secondary={`$${item.price}`} />
                <IconButton onClick={() => removeFromCart(index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))
          )}
        </List>
      </Drawer>
    </div>
  );
};

export default Cart;
