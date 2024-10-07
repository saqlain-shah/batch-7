import React, { useState, useMemo } from 'react';
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  lighten,
} from '@mui/material';
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
} from 'material-react-table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';

const initialData = [
  {
    id: '1',
    fullname: 'John Doe',
    email: 'john@example.com',
    country: 'USA',
    date: '2024-01-01',
    status: 'Active',
  },
  {
    id: '2',
    fullname: 'Jane Smith',
    email: 'jane@example.com',
    country: 'Canada',
    date: '2024-02-05',
    status: 'Inactive',
  },
  // Add more data here
];

const UserList = () => {
  const [data, setData] = useState(initialData);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [formValues, setFormValues] = useState({
    id: '',
    fullname: '',
    email: '',
    country: '',
    date: '',
    status: '',
  });

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 100,
      },
      {
        accessorKey: 'fullname',
        header: 'Fullname',
        size: 200,
      },
      {
        accessorKey: 'country',
        header: 'Country',
        size: 150,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 100,
      },
      {
        id: 'actions',
        header: 'Actions',
        size: 150,
        Cell: ({ row }) => (
          <>
            <IconButton
              onClick={() => {
                setFormValues(row.original);
                setIsEditing(true);
                setOpenModal(true);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                setData(data.filter((user) => user.id !== row.original.id));
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                setSelectedUser(row.original);
                setOpenDetailModal(true);
              }}
            >
              <InfoIcon />
            </IconButton>
          </>
        ),
      },
    ],
    [data],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableRowActions: true,
    enableRowSelection: true,
    initialState: {
      showColumnFilters: false,
      showGlobalFilter: true,
    },
    muiTableBodyCellProps: {
      sx: {
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #e0e0e0',
      },
    },
    muiTableBodyRowProps: {
      sx: {
        '&:nth-of-type(odd)': {
          backgroundColor: '#ffffff',
        },
        '&:hover': {
          backgroundColor: '#f1f1f1',
        },
      },
    },
    muiTableHeadCellProps: {
      sx: {
        backgroundColor: '#ffffff',
        color: '#000000',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
    },
    muiTableContainerProps: {
      sx: {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        overflow: 'auto',
        maxWidth: '100%',
      },
    },
    renderTopToolbar: ({ table }) => {
      return (
        <Box
          sx={(theme) => ({
            backgroundColor: lighten(theme.palette.background.default, 0.05),
            display: 'flex',
            gap: '0.5rem',
            p: '8px',
            justifyContent: 'space-between',
          })}
        >
          <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <MRT_GlobalFilterTextField table={table} />
            <MRT_ToggleFiltersButton table={table} />
          </Box>
        </Box>
      );
    },
  });

  const handleAddUser = () => {
    setIsEditing(false);
    setFormValues({
      id: '',
      fullname: '',
      email: '',
      country: '',
      date: '',
      status: '',
    });
    setOpenModal(true);
  };

  const handleFormSubmit = () => {
    if (isEditing) {
      setData(data.map((user) => (user.id === formValues.id ? formValues : user)));
    } else {
      setData([...data, formValues]);
    }
    setOpenModal(false);
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f0f2f5', maxWidth: '100%' }}>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: 2 }}
        onClick={handleAddUser}
      >
        Add New User
      </Button>
      <Box sx={{ overflowX: 'auto' }}>
        <MaterialReactTable table={table} />
      </Box>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            padding: 4,
            backgroundColor: 'white',
            margin: 'auto',
            marginTop: '1%',
            width: 400,
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h6" gutterBottom>
            {isEditing ? 'Edit User' : 'Add New User'}
          </Typography>
          <form>
            <TextField
              label="ID"
              value={formValues.id}
              onChange={(e) => setFormValues({ ...formValues, id: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Fullname"
              value={formValues.fullname}
              onChange={(e) => setFormValues({ ...formValues, fullname: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              value={formValues.email}
              onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Country"
              value={formValues.country}
              onChange={(e) => setFormValues({ ...formValues, country: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Date"
              value={formValues.date}
              onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Status"
              value={formValues.status}
              onChange={(e) => setFormValues({ ...formValues, status: e.target.value })}
              fullWidth
              margin="normal"
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
              <Button onClick={handleFormSubmit} variant="contained" color="primary">
                {isEditing ? 'Save Changes' : 'Add User'}
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>

      <Modal open={openDetailModal} onClose={() => setOpenDetailModal(false)}>
        <Box
          sx={{
            padding: 4,
            backgroundColor: 'white',
            margin: 'auto',
            marginTop: '10%',
            width: 400,
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h6" gutterBottom>
            User Details
          </Typography>
          <Typography>ID: {selectedUser?.id}</Typography>
          <Typography>Fullname: {selectedUser?.fullname}</Typography>
          <Typography>Email: {selectedUser?.email}</Typography>
          <Typography>Country: {selectedUser?.country}</Typography>
          <Typography>Date: {selectedUser?.date}</Typography>
          <Typography>Status: {selectedUser?.status}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
            <Button variant="contained" color="primary" onClick={() => setOpenDetailModal(false)}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default UserList;
