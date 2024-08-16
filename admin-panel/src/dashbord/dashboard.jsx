import React, { useState } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Pets, Flag } from '@mui/icons-material';

const Dashboard = ({ isOpen }) => {
  // Dummy data for the charts
  const data = [
    { name: 'Jan', sales: 4000, income: 2400, visitors: 2400 },
    { name: 'Feb', sales: 3000, income: 1398, visitors: 2210 },
    { name: 'Mar', sales: 2000, income: 9800, visitors: 2290 },
    { name: 'Apr', sales: 2780, income: 3908, visitors: 2000 },
    { name: 'May', sales: 1890, income: 4800, visitors: 2181 },
    { name: 'Jun', sales: 2390, income: 3800, visitors: 2500 },
    { name: 'Jul', sales: 3490, income: 4300, visitors: 2100 },
  ];

  const initialProducts = [
    { name: 'Patimax Fragrance Long...', items: 100, price: 27.00, icon: <Pets /> },
    { name: 'Nulo MedalSeries Adult Cat...', items: 100, price: 27.00, icon: <Pets /> },
    { name: 'Pedigree Puppy Dry Dog...', items: 100, price: 27.00, icon: <Pets /> },
    { name: 'Biscoito Premier Cookie...', items: 100, price: 27.00, icon: <Pets /> },
    { name: 'Pedigree Adult Dry Dog...', items: 100, price: 27.00, icon: <Pets /> },
    { name: 'Royal Canin Dry Cat...', items: 100, price: 30.00, icon: <Pets /> },
    { name: 'Hill\'s Science Diet...', items: 100, price: 25.00, icon: <Pets /> },
    { name: 'Blue Buffalo Wilderness...', items: 100, price: 28.00, icon: <Pets /> },
    { name: 'Purina ONE SmartBlend...', items: 100, price: 26.00, icon: <Pets /> },
    { name: 'Wellness CORE Grain-Free...', items: 100, price: 32.00, icon: <Pets /> },
  ];

  const initialCountries = [
    { country: 'Turkey', sales: 6972, icon: <Flag /> },
    { country: 'Belgium', sales: 6972, icon: <Flag /> },
    { country: 'Sweden', sales: 6972, icon: <Flag /> },
    { country: 'Vietnam', sales: 6972, icon: <Flag /> },
    { country: 'Australia', sales: 6972, icon: <Flag /> },
    { country: 'Saudi Arabia', sales: 6972, icon: <Flag /> },
    { country: 'United States', sales: 6972, icon: <Flag /> },
    { country: 'Canada', sales: 6972, icon: <Flag /> },
    { country: 'Germany', sales: 6972, icon: <Flag /> },
    { country: 'Japan', sales: 6972, icon: <Flag /> },
  ];

  const initialSellers = [
    { name: 'Robert', purchases: 73, categories: 'Kitchen, Pets', total: '$1,000', status: '100%' },
    { name: 'Calvin', purchases: 66, categories: 'Health, Grocery', total: '$4,000', status: '100%' },
    { name: 'Dwight', purchases: 15890, categories: 'Electronics', total: '$2,700', status: '100%' },
    { name: 'Cody', purchases: 15, categories: 'Movies, Music', total: '$2,100', status: '100%' },
    { name: 'Bruce', purchases: 127, categories: 'Sports, Fitness', total: '$4,400', status: '100%' },
    { name: 'Jorge', purchases: 30, categories: 'Toys, Baby', total: '$4,750', status: '100%' },
    { name: 'Kristin Watson', purchases: 93, categories: 'Gift Cards', total: '$1,000', status: '100%' },
  ];

  const initialProductOverview = [
    { name: 'Soft Fluffy Cats', productId: '#327', price: 11.70, quantity: 28, sale: 'On sale', revenue: 328.85, status: 'Not Available' },
    { name: 'Taste of the Wild Formula Finder', productId: '#380', price: 8.99, quantity: 10, sale: 'On sale', revenue: 105.55, status: 'Not Available' },
    { name: 'Wellness Natural Food', productId: '#126', price: 5.22, quantity: 578, sale: '--/--', revenue: 202.87, status: 'Not Available' },
    { name: 'Dog Food Rachael Ray', productId: '#582', price: 14.81, quantity: 36, sale: '--/--', revenue: 475.22, status: 'Available' },
    { name: 'Best Buddy Bits Dog Treats', productId: '#293', price: 6.48, quantity: 84, sale: '--/--', revenue: 219.78, status: 'Not Available' },
  ];

  const [products, setProducts] = useState(initialProducts.slice(0, 5));
  const [countries, setCountries] = useState(initialCountries.slice(0, 5));
  const [showMoreProducts, setShowMoreProducts] = useState(false);
  const [showMoreCountries, setShowMoreCountries] = useState(false);

  const handleShowMoreProducts = () => {
    setShowMoreProducts(!showMoreProducts);
    setProducts(showMoreProducts ? initialProducts.slice(0, 5) : initialProducts);
  };

  const handleShowMoreCountries = () => {
    setShowMoreCountries(!showMoreCountries);
    setCountries(showMoreCountries ? initialCountries.slice(0, 5) : initialCountries);
  };

  return (
    <div style={{ marginLeft: isOpen ? '300px' : '0',marginLeft: '0%', transition: 'margin-left 0.3s' }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ padding: 2, backgroundColor: '#f44336', color: '#fff' }}>
            <Typography variant="h6">Total Sales</Typography>
            <Typography variant="h4">$123,456</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ padding: 2, backgroundColor: '#2196f3', color: '#fff' }}>
            <Typography variant="h6">Total Income</Typography>
            <Typography variant="h4">$78,910</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ padding: 2, backgroundColor: '#4caf50', color: '#fff' }}>
            <Typography variant="h6">Total Orders</Typography>
            <Typography variant="h4">1,234</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ padding: 2, backgroundColor: '#ff9800', color: '#fff' }}>
            <Typography variant="h6">Total Visitors</Typography>
            <Typography variant="h4">3,456</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Sales, Income, and Visitors
            </Typography>
            <LineChart width={1200} height={300} data={data}>
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              <Line type="monotone" dataKey="income" stroke="#82ca9d" />
              <Line type="monotone" dataKey="visitors" stroke="#ffc658" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 2, height: '100%' }}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Top Products
              </Typography>
              <List>
                {products.map((product, index) => (
                  <ListItem key={index}>
                    {product.icon}
                    <ListItemText primary={product.name} secondary={`${product.items} Items -15% $${product.price}`} />
                  </ListItem>
                ))}
              </List>
            </Box>
            <Button onClick={handleShowMoreProducts}>
              {showMoreProducts ? 'Show Less' : 'Show More'}
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 2, height: '100%' }}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Top Countries By Sales
              </Typography>
              <Typography variant="h4">$37,802</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                1.56% since last weekend
              </Typography>
              <List>
                {countries.map((item, index) => (
                  <ListItem key={index}>
                    {item.icon}
                    <ListItemText primary={item.country} secondary={item.sales} />
                  </ListItem>
                ))}
              </List>
            </Box>
            <Button onClick={handleShowMoreCountries}>
              {showMoreCountries ? 'Show Less' : 'Show More'}
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 2, height: '100%' }}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Best Shop Sellers
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Shop</TableCell>
                      <TableCell>Categories</TableCell>
                      <TableCell>Total</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {initialSellers.map((seller, index) => (
                      <TableRow key={index}>
                        <TableCell>{seller.name}</TableCell>
                        <TableCell>{seller.categories}</TableCell>
                        <TableCell>{seller.total}</TableCell>
                        <TableCell>{seller.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 2, height: '100%' }}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Product Overview
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Product ID</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Sale</TableCell>
                      <TableCell>Revenue</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {initialProductOverview.map((product, index) => (
                      <TableRow key={index}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.productId}</TableCell>
                        <TableCell>${product.price.toFixed(2)}</TableCell>
                        <TableCell>{product.quantity}</TableCell>
                        <TableCell>{product.sale}</TableCell>
                        <TableCell>${product.revenue.toFixed(2)}</TableCell>
                        <TableCell>{product.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;