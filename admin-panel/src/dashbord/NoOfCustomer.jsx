
import React, { useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton, Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const initialData = [
  { customer: 'Ali', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { customer: 'Akber', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { customer: 'hassan', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { customer: 'Akber', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { customer: 'hassan', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { customer: 'Akber', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { customer: 'hassan', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { customer: 'Akber', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { customer: 'Ali', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { customer: 'Akber', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { customer: 'Ali', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { customer: 'Akber', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { customer: 'Ali', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { customer: 'Akber', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { customer: 'Ali', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { customer: 'Akber', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { customer: 'Ali', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { customer: 'Akber', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
 

  // ... other initial data entries
];

const NoOfCustomer = () => {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [newCustomer, setNewCustomer] = useState({ customer: '', email: '', phone: '', fathername: '', address: '', dob: '', image: 'https://via.placeholder.com/50' });

  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleClickOpen = () => {
    setNewCustomer({ customer: '', email: '', phone: '', fathername: '', address: '', dob: '', image: 'https://via.placeholder.com/50' });
    setIsEditing(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddCustomer = () => {
    if (isEditing) {
      const updatedData = [...data];
      updatedData[currentIndex] = newCustomer;
      setData(updatedData);
    } else {
      setData([...data, newCustomer]);
    }
    handleClose();
  };

  const handleEditCustomer = (index) => {
    setCurrentIndex(index);
    setNewCustomer(data[index]);
    setIsEditing(true);
    setOpen(true);
  };

  const handleDeleteCustomer = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
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

  const handleImageClick = (row) => {
    setSelectedUser(row.original);
    setDetailOpen(true);
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
              src={row.original.image || 'https://via.placeholder.com/50'}
              alt="Customer"
              style={{ marginRight: 10, borderRadius: '50%', width: 35, height: 50, cursor: 'pointer' }}
              onClick={() => handleImageClick(row)}
            />
            {cell.getValue()}
          </div>
        ),
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 150,
      },
      // {
      //   accessorKey: 'phone',
      //   header: 'Phone',
      //   size: 150,
      // },
      {
        accessorKey: 'fathername',
        header: 'Father Name',
        size: 150,
      },
      // {
      //   accessorKey: 'address',
      //   header: 'Address',
      //   size: 150,
      // },
      // {
      //   accessorKey: 'dob',
      //   header: 'Date of Birth',
      //   size: 150,
      // },
      {
        accessorKey: 'actions',
        header: 'Edit and Delete',
        size: 150,
        Cell: ({ row }) => (
          <div>
            <IconButton
              color="primary"
              onClick={() => handleEditCustomer(row.index)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="secondary"
              onClick={() => handleDeleteCustomer(row.index)}
            >
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
    getRowId: (row) => row.customer,
  });

  return (
    <Box sx={{ justifyContent: 'center', width: '180%', position: 'relative' }}>
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
        muiTableBodyProps={{ sx: { width: '100%' } }}
        muiTablePaperProps={{ sx: { width: '100%' } }}
        muiTableHeadCellProps={{ sx: { width: '100%' } }}
        muiTableHeadProps={{ sx: { width: '100%' } }}
        muiTableFooterProps={{ sx: { width: '100%' } }}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? 'Edit Customer' : 'Add New Customer'}</DialogTitle>
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
            label="Email"
            type="text"
            fullWidth
            value={newCustomer.email}
            onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
          />
          <TextField
            margin="dense"
            id="phone"
            label="Phone"
            type="text"
            fullWidth
            value={newCustomer.phone}
            onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
          />
          <TextField
            margin="dense"
            id="fathername"
            label="Father Name"
            type="text"
            fullWidth
            value={newCustomer.fathername}
            onChange={(e) => setNewCustomer({ ...newCustomer, fathername: e.target.value })}
          />
          <TextField
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            value={newCustomer.address}
            onChange={(e) => setNewCustomer({ ...newCustomer, address: e.target.value })}
          />
          <TextField
            margin="dense"
            id="dob"
            label="Date of Birth"
            type="date"
            fullWidth
            value={newCustomer.dob}
            onChange={(e) => setNewCustomer({ ...newCustomer, dob: e.target.value })}
            InputLabelProps={{
              shrink: true,
            }}
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
            {isEditing ? 'Save' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={detailOpen} onClose={() => setDetailOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
          {selectedUser && (
            <Box display="flex" alignItems="center">
              <img
                src={selectedUser.image}
                alt="User"
                style={{ borderRadius: '50%', width: 100, height: 100, marginRight: 20 }}
              />
              <Box>
                <Typography variant="h6">{selectedUser.customer}</Typography>
                <Typography variant="body1">{selectedUser.email}</Typography>
                <Typography variant="body1">{selectedUser.phone}</Typography>
                <Typography variant="body1">{selectedUser.fathername}</Typography>
                <Typography variant="body1">{selectedUser.address}</Typography>
                <Typography variant="body1">{selectedUser.dob}</Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDetailOpen(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NoOfCustomer;
