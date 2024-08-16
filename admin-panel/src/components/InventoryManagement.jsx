import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const initialFormData = {
  name: '',
  id: '',
  quantity: '',
  price: '',
};

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([
    { name: 'Product 1', id: 'INV001', quantity: 100, price: 20 },
    { name: 'Product 2', id: 'INV002', quantity: 150, price: 30 },
    { name: 'Product 3', id: 'INV003', quantity: 200, price: 25 },
    { name: 'Product 4', id: 'INV004', quantity: 50, price: 35 },
  ]);

  const [formData, setFormData] = useState(initialFormData);
  const [editIndex, setEditIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddOrEditProduct = () => {
    if (editIndex !== null) {
      // Update the product data
      setInventory((prevData) => {
        const newData = [...prevData];
        newData[editIndex] = formData;
        return newData;
      });
      setEditIndex(null);
    } else {
      // Add a new product
      setInventory((prevData) => [...prevData, formData]);
    }
    setFormData(initialFormData);
    handleClose();
  };

  const handleEditProduct = (index) => {
    setFormData(inventory[index]);
    setEditIndex(index);
    setOpen(true);
  };

  const handleDeleteProduct = (index) => {
    setInventory((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setFormData(initialFormData);
    setEditIndex(null);
    setOpen(true);
  };

  return (
    <div style={{ padding: 16 }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventory.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>${item.price}</TableCell>
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

      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
        style={{ marginTop: 16 }}
      >
        Add Product
      </Button>

      {/* Add/Edit Product Dialog */}
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
            name="quantity"
            label="Quantity"
            value={formData.quantity}
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddOrEditProduct} color="primary">
            {editIndex !== null ? 'Save Changes' : 'Add Product'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InventoryManagement;
