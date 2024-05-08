import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RegForm from './src/Form';
import Login from './src/Login';
import About from './src/About';
import Contact from './src/Contact';
import Product from './src/Product';
import Shop from './src/Shop';
import Payment from './src/Payment';
import Cart from './src/Cart';
import DummyJson from "./DummyJson"

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ReturnsAndOrders from './src/ReturnAndOrder';
 // Corrected import statement for ProductDetails

const App = () => {
  const menuItems = [
    { title: 'Login',
     path: '/LoginForm' },
    { title: 'Register', path: '/reg' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/Contact' },
    { title: 'product', path: '/Product' },
    { title: 'shop', path: '/Shop' },
    { title: 'payment', path: '/Payment' },
    { title: 'cart', path: '/Cart' },
    { title: 'returnandorder', path: '/ReturnAndOrder' },
    { title: 'dummy', path: '/DummyJson'}




  ];
  return (
    <BrowserRouter>
      <AppBar position="static" style={{ backgroundColor: 'blue' }}>
        <Toolbar>
          {/* Logo on the right */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <Typography variant="h4">
              RINOR
            </Typography>
          </Box>

          {/* Menu items on the left */}
          {menuItems.map((item) => (
            <Button
              key={item.title}
              color="inherit"
              sx={{ marginLeft: 2, '&:hover': { backgroundColor: 'blue' } }}
              component={Link} // Use the Link component as the root component of Button
              to={item.path} // Set the navigation path
            >
              {item.title}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/reg" element={<RegForm />} />
        <Route path="/loginform" element={<Login />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/returnandorder" element={<ReturnsAndOrders/>} />
        <Route path="/dummy" element={<DummyJson />} />





       {/* Use element prop instead of component for rendering React components */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
