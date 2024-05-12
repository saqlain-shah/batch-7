import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import ProductDetails from './SingleProductDetails';

const columns = [
  { field: 'name', headerName: 'Product Name', flex: 1 },
  { field: 'price', headerName: 'Price',  flex: 1},
  { field: 'quantity', headerName: 'Quantity', flex: 1 },
  { field: 'sale', headerName: 'Sale',  flex: 1 },
];

const rows = [
  { id: 1, name: 'Laptop', price: '$1000', quantity: 10, sale: '346', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', warranty: '1 year warranty' },
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

const ProductManagement = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRowClick = (params) => {
    setSelectedProduct(params.row);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Typography variant="h5" gutterBottom>
        Products
      </Typography>
      
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        disableSelectionOnClick
        onRowClick={handleRowClick}
      />
      {selectedProduct && <ProductDetails product={selectedProduct} onClose={handleClose} />}
    </Box>
  );
};

export default ProductManagement;
