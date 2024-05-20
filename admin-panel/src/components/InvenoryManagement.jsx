import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';

const InventoryManagement = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [supplier, setSupplier] = useState('');
  const [price, setPrice] = useState(0);

  const addItem = () => {
    const newItem = {
      itemName,
      quantity,
      description,
      supplier,
      price
    };
    setItems([...items, newItem]);
    // You can also send this data to a backend server for further processing and storage.
    // For simplicity, I'm just adding it to the state.
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Inventory Management System
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Supplier"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={addItem}>
            Add Item
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Inventory List</Typography>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item.itemName} - {item.quantity} - {item.description} - {item.supplier} - ${item.price}
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InventoryManagement;
