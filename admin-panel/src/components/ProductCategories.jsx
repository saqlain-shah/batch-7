import React from 'react';
import { Grid, Card, CardContent, Typography, List, ListItem, ListItemText, Divider, Paper, Box } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';

const ProductCategories = () => {
  // Dummy data for product categories
  const categories = [
    'Electronics',
    'Clothing, Shoes & Jewelry',
    'Home, Garden & Tools',
    'Beauty & Health',
    'Toys, Kids & Baby',
    'Books & Audible',
    'Sports & Outdoors',
    'Automotive & Industrial',
    'Handmade',
    'Pet Supplies',
    'Grocery & Gourmet Food',
    'Music, Movies & TV Shows',
    'Digital Downloads',
    'Services',
    'Furniture',
    'Office Supplies',
    'Fitness & Wellness',
    'Art & Crafts',
    'Collectibles',
    'Travel & Leisure',
    'Party Supplies',
  ];

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        Explore Categories
      </Typography>
      <Divider />
      <Grid container spacing={2} mt={2}>
        {categories.map((category, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Paper elevation={3}>
              <ListItem button>
                <CategoryIcon />
                <ListItemText primary={category} />
              </ListItem>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCategories;
