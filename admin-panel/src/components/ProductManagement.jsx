import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Divider,
  TextField,
  Button,
} from '@mui/material';

const initialFormData = {
  name: '',
  id: '',
  price: '',
  sales: '',
};

const ProductManagement = () => {
  const [data, setData] = useState([
    { name: 'Product 1', id: 'P001', price: 20, sales: 100 },
    { name: 'Product 2', id: 'P002', price: 30, sales: 80 },
    { name: 'Product 3', id: 'P003', price: 25, sales: 120 },
    { name: 'Product 4', id: 'P004', price: 35, sales: 90 },
  ]);
  const [formData, setFormData] = useState(initialFormData);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    if (editIndex !== null) {
      // If an edit is in progress, update the product data
      setData((prevData) => {
        const newData = [...prevData];
        newData[editIndex] = formData;
        return newData;
      });
      setEditIndex(null);
    } else {
      // Otherwise, add a new product
      setData((prevData) => [...prevData, formData]);
    }
    setFormData(initialFormData);
  };

  const handleEditProduct = (index) => {
    // Set the form data to the selected product's data
    setFormData(data[index]);
    setEditIndex(index);
  };

  const handleDeleteProduct = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: 16 }}>
      <Grid container spacing={2}>
        {/* Add Product Form */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {editIndex !== null ? 'Edit Product' : 'Add Product'}
              </Typography>
              <Divider />
              <Box mt={2}>
                <TextField
                  name="name"
                  label="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  name="id"
                  label="ID"
                  value={formData.id}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  name="price"
                  label="Price"
                  value={formData.price}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  name="sales"
                  label="Sales"
                  value={formData.sales}
                  onChange={handleInputChange}
                  fullWidth
                />
                <Button variant="contained" color="primary" onClick={handleAddProduct}>
                  {editIndex !== null ? 'Save Changes' : 'Add Product'}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Product List */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Product Overview
              </Typography>
              <Divider />
              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>ID</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Sales</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>${row.price}</TableCell>
                        <TableCell>{row.sales}</TableCell>
                        <TableCell>
                          <Button variant="outlined" color="primary" onClick={() => handleEditProduct(index)}>
                            Edit
                          </Button>
                          <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => handleDeleteProduct(index)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductManagement;
