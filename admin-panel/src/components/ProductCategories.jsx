import React from 'react';
import { Grid, Card, CardContent, Typography, ListItem, ListItemText, Divider, Paper, Box } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';

const ProductCategories = () => {
  // Updated data for specific categories with details and images
  const categories = [
    {
      name: 'Men',
      details: 'Explore the latest in men’s fashion including clothing, shoes, and accessories.',
      img: 'https://via.placeholder.com/150?text=Men' // Replace with actual image URL
    },
    {
      name: 'Women',
      details: 'Discover a wide range of women’s fashion, from clothing and shoes to accessories and beauty products.',
      img: 'https://via.placeholder.com/150?text=Women' // Replace with actual image URL
    },
    {
      name: 'Kids',
      details: 'Find the best in children’s clothing, toys, and more for every age group.',
      img: 'https://via.placeholder.com/150?text=Kids' // Replace with actual image URL
    }
  ];

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        Explore Categories
      </Typography>
      <Divider />
      <Grid container spacing={2} mt={2}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3}>
              <ListItem button>
                <img
                  src={category.img}
                  alt={category.name}
                  style={{ width: 100, height: 100, objectFit: 'cover', marginRight: 16 }}
                />
                <ListItemText
                  primary={category.name}
                  secondary={category.details}
                />
              </ListItem>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCategories;
