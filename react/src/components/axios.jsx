import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent } from '@mui/material';

const DummyDataComponent = () => {
    const [dummyData, setDummyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/carts');
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

    return (
        <Container maxWidth="md">
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                Dummy Data
            </Typography>
            {dummyData.map((cart) => (
                <Card key={cart.id} variant="outlined" style={{ marginBottom: '1rem' }}>
                    <CardContent>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {cart.title}
                        </Typography>
                        <Typography variant="body1" component="p">
                            {cart.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Price: {cart.price}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
};

export default DummyDataComponent;
