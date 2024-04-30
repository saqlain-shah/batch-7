import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

const DummyDataComponent = () => {
    const [dummyData, setDummyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/carts');
                console.log('Response:', response.data);
                if (!Array.isArray(response.data.carts)) {
                    console.error('Cart data is not an array:', response.data.carts);
                    return;
                }
                setDummyData(response.data.carts);
            } catch (error) {
                console.error('Error fetching dummy data:', error);
            }
        };

        fetchData();
    }, []);

    console.log('dummyData:', dummyData);

    return (
        <Container >
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                Dummy Data
            </Typography>
            {dummyData.map((cart, index) => (
                <Grid container spacing={2}>
                    {cart.products.map((product, i) => (
                        <Grid key={i} sx={{mb:2}} item xs={12} sm={6} md={4} lg={2.4}>
                            <Card  variant="outlined">

                                <CardMedia
                                    sx={{minHeight:"400px" }}
                                    image={product.thumbnail}
                                    title={product.title}
                                />
                                <CardContent >
                                    <Typography variant="h6" component="h2" gutterBottom>
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body1" component="p">

                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Price: {product.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ))
            }
        </Container>
    );
};

export default DummyDataComponent;
