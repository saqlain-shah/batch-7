// src/components/Categories.jsx
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const categories = [
  { name: 'Electronics', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Fashion', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Home & Kitchen', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Beauty & Health', imageUrl: 'https://via.placeholder.com/200' },
];

const Categories = () => {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {categories.map((category, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper
            sx={{
              height: '200px',
              backgroundImage: `url(${category.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textShadow: '1px 1px 2px black',
            }}
          >
            <Typography variant="h6">{category.name}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Categories;
