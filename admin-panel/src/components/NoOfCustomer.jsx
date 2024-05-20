import React, { useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const initialData = [
  { customer: 'Ali', phone: '03445565443', image: 'https://via.placeholder.com/50' },
  { customer: 'Akber', phone: '03293848589', image: 'https://via.placeholder.com/50' },
  // Add images to other initial data entries as well
  { customer: 'Iftikhar', phone: '03555353564', image: 'https://via.placeholder.com/50' },
  { customer: 'Ahmed', phone: '03001234567', image: 'https://via.placeholder.com/50' },
  { customer: 'Farhan', phone: '03112345678', image: 'https://via.placeholder.com/50' },
  { customer: 'Sara', phone: '03223456789', image: 'https://via.placeholder.com/50' },
  { customer: 'Ayesha', phone: '03334567890', image: 'https://via.placeholder.com/50' },
  { customer: 'Bilal', phone: '03445678901', image: 'https://via.placeholder.com/50' },
  { customer: 'Hina', phone: '03556789012', image: 'https://via.placeholder.com/50' },
  { customer: 'Khalid', phone: '03667890123', image: 'https://via.placeholder.com/50' },
  { customer: 'Nadia', phone: '03778901234', image: 'https://via.placeholder.com/50' },
  { customer: 'Omar', phone: '03889012345', image: 'https://via.placeholder.com/50' },
  { customer: 'Rehan', phone: '03990123456', image: 'https://via.placeholder.com/50' },
  { customer: 'Sajid', phone: '03010234567', image: 'https://via.placeholder.com/50' },
  { customer: 'Tariq', phone: '03120345678', image: 'https://via.placeholder.com/50' },
  { customer: 'Uzma', phone: '03230456789', image: 'https://via.placeholder.com/50' },
  { customer: 'Waqar', phone: '03340567890', image: 'https://via.placeholder.com/50' },
  { customer: 'Yasir', phone: '03450678901', image: 'https://via.placeholder.com/50' },
  { customer: 'Zara', phone: '03560789012', image: 'https://via.placeholder.com/50' },
  { customer: 'Hassan', phone: '03670890123', image: 'https://via.placeholder.com/50' },
];

const NoOfCustomer = () => {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState({ customer: '', phone: '', image: '' });

  const handleClickOpen = () => {
    setNewCustomer({ customer: '', phone: '', image: '' });
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
        accessorKey: 'phone',
        header: 'Phone',
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
            id="phone"
            label="Phone Number"
            type="text"
            fullWidth
            value={newCustomer.phone}
            onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
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
