import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const ProductCards = () => {
  // Initialize the dummy data directly inside the component
  const products = [
    { id: 1, name: 'Laptop', price: '$1000', quantity: 10, sale: '346', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', warranty: '1 year warranty' },
    { id: 2, name: 'Smartphone', price: '$800', quantity: 15, sale: '457', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', warranty: '6 months warranty' },
    { id: 2, name: 'Smartphone', price: '$800', quantity: 15, sale: '457', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', warranty: '6 months warranty' },
    { id: 3, name: 'Tablet', price: '$500', quantity: 20, sale: '675', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', warranty: '1 year warranty' },
    { id: 4, name: 'Headphones', price: '$100', quantity: 50, sale: '436', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', warranty: '6 months warranty' },
    { id: 5, name: 'Smartwatch', price: '$300', quantity: 30, sale: '1234', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', warranty: '1 year warranty' },
    { id: 6, name: 'Speaker', price: '$150', quantity: 25, sale: '44' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', warranty: '6 months warranty'},
    { id: 7, name: 'Camera', price: '$700', quantity: 8, sale: '87', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', warranty: '1 year warranty'},
    { id: 8, name: 'Monitor', price: '$400', quantity: 12, sale: '234', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', warranty: '6 months warranty' },
    { id: 9, name: 'Keyboard', price: '$50', quantity: 40, sale: '546' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', warranty: '6 months warranty'},
    { id: 10, name: 'Mouse', price: '$30', quantity: 45, sale: '452' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', warranty: '1 year warranty'},
  ];

  return (
    <><Typography variant="h5" gutterBottom> Products Details
    </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
       
      {products.map((product) => (
        <Card key={product.id} sx={{ minWidth: 275, maxWidth: 300 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Price: {product.price}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Quantity: {product.quantity}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Sale: {product.sale}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Description: {product.description}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Warranty: {product.warranty}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
    </>
  );
};

export default ProductCards;
