// SingleProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';

const SingleProductDetails = () => {
    const { productId } = useParams(); // Accessing the product ID from the URL params
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/carts');
                const foundProduct = response.data.carts.flatMap(cart => cart.products).find(product => product.id === parseInt(productId));
                setProduct(foundProduct);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [productId]); // Fetch product whenever productId changes

    if (!product) {
        return <Typography variant="h6">Product not found.</Typography>;
    }

    return (
        <Container>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                Product Details
            </Typography>
            <Card variant="outlined">
                <CardMedia
                    component="img"
                    height="400"
                    image={product.thumbnail}
                    title={product.title}
                />
                <CardContent>
                    <Typography variant="h6" component="h2" gutterBottom>
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Price: {product.price}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default SingleProductDetails;
