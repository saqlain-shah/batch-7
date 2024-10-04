import React, { useState, useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const initialFormData = {
  name: '',
  id: '',
  price: '',
  sales: '',
};

const ProductManagement = () => {
  const [data, setData] = useState([
    { name: 'Product 1', id: 'P001', price: 20, sales: 100, image: 'https://via.placeholder.com/150' },
    { name: 'Product 2', id: 'P002', price: 30, sales: 80, image: 'https://via.placeholder.com/150' },
    { name: 'Product 3', id: 'P003', price: 25, sales: 120, image: 'https://via.placeholder.com/150' },
    { name: 'Product 4', id: 'P004', price: 35, sales: 90, image: 'https://via.placeholder.com/150' },
  ]);
  const [formData, setFormData] = useState(initialFormData);
  const [editIndex, setEditIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
    handleClose();
  };

  const handleEditProduct = (index) => {
    // Set the form data to the selected product's data
    setFormData(data[index]);
    setEditIndex(index);
    setOpen(true);
  };

  const handleDeleteProduct = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = (row) => {
    setSelectedProduct(row);
    setDetailOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        size: 200,
        Cell: ({ cell, row }) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={row.original.image || 'https://via.placeholder.com/150'}
              alt="Product"
              style={{ marginRight: 10, borderRadius: '5px', width: 50, height: 50, cursor: 'pointer' }}
              onClick={() => handleImageClick(row.original)}
            />
            {cell.getValue()}
          </div>
        ),
      },
      {
        accessorKey: 'id',
        header: 'ID',
        size: 100,
      },
      {
        accessorKey: 'price',
        header: 'Price',
        size: 100,
        Cell: ({ cell }) => <span>${cell.getValue()}</span>,
      },
      {
        accessorKey: 'sales',
        header: 'Sales',
        size: 100,
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        size: 150,
        Cell: ({ row }) => (
          <div>
            <IconButton color="primary" onClick={() => handleEditProduct(row.index)}>
              <EditIcon />
            </IconButton>
            <IconButton color="secondary" onClick={() => handleDeleteProduct(row.index)}>
              <DeleteIcon />
            </IconButton>
          </div>
        ),
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    getRowId: (row) => row.id,
  });

  const handleClickOpen = () => {
    setFormData(initialFormData);
    setEditIndex(null);
    setOpen(true);
  };

  return (
    <div style={{ padding: 16, width:'170%' }}>
      <Grid container spacing={2}>
        {/* Add Product Form */}
      

        {/* Product List */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ width:'100%', height:'100px', display:'flex', flexDirection:'row' , justifyContent:'space-between', alignItems:"center"}}>
          
              <Typography variant="h6" gutterBottom>
                Product Overview
              </Typography>

             
              <Typography>
              <Button variant="contained" color="primary" onClick={handleClickOpen} sx={{ marginRight: 2 }}>
                  {editIndex !== null ? 'Save Changes' : 'Add Product'}
                </Button>
                </Typography>
                </Box>
              <Divider />
              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>ID</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Sales</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                              src={row.image || 'https://via.placeholder.com/150'}
                              alt="Product"
                              style={{ marginRight: 10, borderRadius: '5px', width: 50, height: 50, cursor: 'pointer' }}
                              onClick={() => handleImageClick(row)}
                            />
                            {row.name}
                          </div>
                        </TableCell>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>${row.price}</TableCell>
                        <TableCell>{row.sales}</TableCell>
                        <TableCell>
                          <IconButton color="primary" onClick={() => handleEditProduct(index)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton color="secondary" onClick={() => handleDeleteProduct(index)}>
                            <DeleteIcon />
                          </IconButton>
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

      {/* Edit / Add Product Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editIndex !== null ? 'Edit Product' : 'Add Product'}</DialogTitle>
        <DialogContent>
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
            sx={{ marginBottom: 2 }}
          />
          <Button variant="contained" component="label" sx={{ marginTop: 2 }}>
            Upload Image
            <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
          </Button>
          {formData.image && (
            <img
              src={formData.image}
              alt="Product"
              style={{ marginTop: 10, borderRadius: '5px', width: 150, height: 150 }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddProduct} color="primary">
            {editIndex !== null ? 'Save Changes' : 'Add Product'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Product Detail Dialog */}
      <Dialog open={detailOpen} onClose={() => setDetailOpen(false)}>
        <DialogTitle>Product Details</DialogTitle>
        <DialogContent>
          {selectedProduct && (
            <div>
              <Typography variant="h6">{selectedProduct.name}</Typography>
              <Typography>ID: {selectedProduct.id}</Typography>
              <Typography>Price: ${selectedProduct.price}</Typography>
              <Typography>Sales: {selectedProduct.sales}</Typography>
              <img
                src={selectedProduct.image || 'https://via.placeholder.com/150'}
                alt="Product"
                style={{ marginTop: 10, borderRadius: '5px', width: 150, height: 150 }}
              />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDetailOpen(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductManagement;
