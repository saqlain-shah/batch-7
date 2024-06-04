import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Card, CardContent, CardMedia, Typography, Grid, CircularProgress } from '@mui/material';

const DummyJson = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/');
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
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Dummy Data
      </Typography>
      <Grid container spacing={3}>
        {data.map(item => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            {/* Wrap each product card with a Link component */}
            <Link to={`/product/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography variant="body1" component="p">
                    Price: ${item.price}
                  </Typography>
                  {/* Description: Add your description here */}
                  <Typography variant="body1" component="p">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DummyJson;
