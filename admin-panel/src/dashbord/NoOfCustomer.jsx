import React, { useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const initialData = [
  { customer: 'Ali', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  { customer: 'Akber', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  // Add images to other initial data entries as well
  { customer: 'Iftikhar', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  { customer: 'Ahmed', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  { customer: 'Farhan', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  { customer: 'Sara', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  { customer: 'Ayesha', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  { customer: 'Bilal', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  { customer: 'Hina', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  { customer: 'Khalid', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  { customer: 'Nadia', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  { customer: 'Omar', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  { customer: 'Rehan', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  { customer: 'Sajid', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  { customer: 'Tariq', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  { customer: 'Uzma', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  { customer: 'Waqar', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  { customer: 'Yasir', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  { customer: 'Zara', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
  { customer: 'Hassan', email: 'abcd@gmail.com', image: 'https://via.placeholder.com/50' },
];

const NoOfCustomer = () => {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState({ customer: '', email: '', image: '' });

  const handleClickOpen = () => {
    setNewCustomer({ customer: '', email: '', image: '' });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddCustomer = () => {
    setData([...data, newCustomer]);
    handleClose();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCustomer({ ...newCustomer, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'customer',
        header: 'Customer',
        size: 150,
        Cell: ({ cell, row }) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={row.original.image}
              alt="Customer"
              style={{ marginRight: 10, borderRadius: '50%', width: 50, height: 50 }}
            />
            {cell.getValue()}
          </div>
        ),
      },
      {
        accessorKey: 'email',
        header: 'email',
        size: 150,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <Box sx={{ justifyContent: 'center', width: '308%', position: 'relative' }}>
      <h2>Number of Customers</h2>
      <IconButton
        color="primary"
        aria-label="add new customer"
        onClick={handleClickOpen}
        sx={{ position: 'absolute', top: 0, right: 0, m: 1, backgroundColor: 'wheat' }}
      >
        <AddIcon />
      </IconButton>
      <MaterialReactTable
        table={table}
        muiTableContainerProps={{ sx: { width: '100%' } }}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Customer</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Customer Name"
            type="text"
            fullWidth
            value={newCustomer.customer}
            onChange={(e) => setNewCustomer({ ...newCustomer, customer: e.target.value })}
          />
          <TextField
            margin="dense"
            id="email"
            label="email Number"
            type="text"
            fullWidth
            value={newCustomer.email}
            onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
          />
          <Button
            variant="contained"
            component="label"
            sx={{ marginTop: 2 }}
          >
            Upload Image
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageUpload}
            />
          </Button>
          {newCustomer.image && (
            <img
              src={newCustomer.image}
              alt="New Customer"
              style={{ marginTop: 10, borderRadius: '50%', width: 50, height: 50 }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddCustomer} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NoOfCustomer;
