import React, { useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton, Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const initialData = [
  { firstName: 'Ali', lastName: 'Ahmed', username: 'ali123', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { firstName: 'Akber', lastName: 'Khan', username: 'akber456', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { firstName: 'Hassan', lastName: 'Ali', username: 'hassan789', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { firstName: 'Asad', lastName: 'Ahmed', username: 'asad123', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { firstName: 'Qammar', lastName: 'Khan', username: 'qammar456', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { firstName: 'Hassanain', lastName: 'Ali', username: 'hassanain789', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { firstName: 'Kazim', lastName: 'Ahmed', username: 'kazim123', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { firstName: 'Abdul', lastName: 'Khan', username: 'abdul456', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { firstName: 'Hussain', lastName: 'Ali', username: 'hussain789', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { firstName: 'Abbas', lastName: 'Ali', username: 'abbas123', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { firstName: 'Abuzar', lastName: 'Khan', username: 'abuzar456', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { firstName: 'Hadi', lastName: 'Ali', username: 'hadi789', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { firstName: 'Aslam', lastName: 'Ali', username: 'aslam123', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { firstName: 'Qasair', lastName: 'Khan', username: 'qasair456', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { firstName: 'Hamid', lastName: 'Ali', username: 'hamid789', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { firstName: 'Kashif', lastName: 'Hassan', username: 'kashif123', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { firstName: 'Abid', lastName: 'Khan', username: 'abid456', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
  { firstName: 'Zafar', lastName: 'Ali', username: 'zafar789', email: 'abcd@gmail.com', phone: '034567890', fathername: 'John', address: '123 Street', dob: '1990-01-01', image: 'https://via.placeholder.com/50' },
];

const NoOfCustomer = () => {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [newCustomer, setNewCustomer] = useState({ firstName: '', lastName: '', username: '', email: '', phone: '', fathername: '', address: '', dob: '', image: 'https://via.placeholder.com/50' });

  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleClickOpen = () => {
    setNewCustomer({ firstName: '', lastName: '', username: '', email: '', phone: '', fathername: '', address: '', dob: '', image: 'https://via.placeholder.com/50' });
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
        accessorKey: 'picture',
        header: 'Picture',
        size: 100,
        Cell: ({ row }) => (
          <img
            src={row.original.image}
            alt="Customer"
            style={{ width: 50, height: 50, borderRadius: '50%' }}
            onClick={() => handleImageClick(row)}
          />
        ),
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 200,
        Cell: ({ row }) => `${row.original.firstName} ${row.original.lastName}`,
      },
      {
        accessorKey: 'username',
        header: 'Username',
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 150,
      },
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
    getRowId: (row) => row.username, // Changed to ensure uniqueness
  });

  return (
    <Box sx={{ backgroundColor: '#78aaf0', justifyContent: 'center', width: '117%', position: 'relative', margin: 'auto', padding: 5 }}>
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
            id="firstName"
            label="First Name"
            type="text"
            fullWidth
            value={newCustomer.firstName}
            onChange={(e) => setNewCustomer({ ...newCustomer, firstName: e.target.value })}
          />
          <TextField
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            value={newCustomer.lastName}
            onChange={(e) => setNewCustomer({ ...newCustomer, lastName: e.target.value })}
          />
          <TextField
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            value={newCustomer.username}
            onChange={(e) => setNewCustomer({ ...newCustomer, username: e.target.value })}
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
            <Box mt={2}>
              <img
                src={newCustomer.image}
                alt="Customer"
                style={{ width: 100, height: 100, borderRadius: '50%' }}
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddCustomer} color="primary">
            {isEditing ? 'Save Changes' : 'Add Customer'}
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
                <Typography variant="h6">{selectedUser.firstName} {selectedUser.lastName}</Typography>
                <Typography variant="body1">Username: {selectedUser.username}</Typography>
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
