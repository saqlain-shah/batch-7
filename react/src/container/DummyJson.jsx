import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Grid, CircularProgress, Skeleton } from '@mui/material';

const DummyJson = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        // Assume each product in the response contains color and image information
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    // Display skeleton loading while data is being fetched
    return (
      <Grid container spacing={3}>
        {[...Array(9)].map((_, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ height: '100%' }}>
              <Skeleton variant="rectangular" height={200} />
              <CardContent>
                <Skeleton variant="text" />
                <Skeleton variant="text" width="60%" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Dummy Data
      </Typography>
      <Grid container spacing={3} sx={{marginTop:'1%'}}>
        {data.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent style={{ backgroundColor: item.color, height: '100%' }}>
                <Typography variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography variant="body1" component="p">
                  Price: ${item.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DummyJson;
