import React, { useState, useMemo } from 'react';
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
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
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

const initialOrders = [
  { id: '001', name: 'John Doe', date: '2024-08-29', total: '$150.00', status: 'Completed' },
  { id: '002', name: 'Jane Smith', date: '2024-08-28', total: '$250.00', status: 'Pending' },
  { id: '003', name: 'Alex Brown', date: '2024-08-27', total: '$120.00', status: 'Shipped' },
  { id: '004', name: 'Emma Johnson', date: '2024-08-26', total: '$350.00', status: 'Cancelled' },
];

const OrderTable = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [formValues, setFormValues] = useState({
    id: '',
    name: '',
    date: '',
    total: '',
    status: '',
  });

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'Order ID',
        size: 100,
      },
      {
        accessorKey: 'name',
        header: 'Customer Name',
        size: 250,
      },
      {
        accessorKey: 'date',
        header: 'Order Date',
        size: 150,
      },
      {
        accessorKey: 'total',
        header: 'Total Amount',
        size: 150,
      },
      {
        accessorKey: 'status',
        header: 'Order Status',
        size: 150,
      },
      {
        id: 'actions',
        header: 'Actions',
        size: 150,
        Cell: ({ row }) => (
          <>
            <IconButton
              onClick={(event) => {
                setAnchorEl(event.currentTarget);
                setSelectedOrder(row.original);
              }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && selectedOrder?.id === row.original.id}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem
                onClick={() => {
                  setFormValues(selectedOrder);
                  setIsEditing(true);
                  setOpenModal(true);
                  setAnchorEl(null);
                }}
              >
                Edit
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setOrders(orders.filter(order => order.id !== row.original.id));
                  setAnchorEl(null);
                }}
              >
                Delete
              </MenuItem>
            </Menu>
          </>
        ),
      },
    ],
    [anchorEl, selectedOrder, orders],
  );

  const table = useMaterialReactTable({
    columns,
    data: orders,
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableRowSelection: true,
    initialState: {
      showColumnFilters: true,
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
    renderTopToolbar: ({ table }) => (
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
    ),
  });

  const handleAddOrder = () => {
    setIsEditing(false);
    setFormValues({ id: '', name: '', date: '', total: '', status: '' });
    setOpenModal(true);
  };

  const handleFormSubmit = () => {
    if (isEditing) {
      setOrders(orders.map(order => (order.id === formValues.id ? formValues : order)));
    } else {
      const newOrder = { ...formValues, id: String(orders.length + 1).padStart(3, '0') };
      setOrders([...orders, newOrder]);
    }
    setOpenModal(false);
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f0f2f5' }}>
      <Button variant="contained" color="primary" sx={{ marginBottom: 2 }} onClick={handleAddOrder}>
        Add New Order
      </Button>
      <Box sx={{ overflowX: 'auto' }}>
        <MaterialReactTable table={table} />
      </Box>

      {/* Modal for Adding/Editing Orders */}
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
            {isEditing ? 'Edit Order' : 'Add New Order'}
          </Typography>
          <form>
            <TextField
              label="Customer Name"
              value={formValues.name}
              onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Order Date"
              value={formValues.date}
              onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Total Amount"
              value={formValues.total}
              onChange={(e) => setFormValues({ ...formValues, total: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Order Status"
              value={formValues.status}
              onChange={(e) => setFormValues({ ...formValues, status: e.target.value })}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={handleFormSubmit}>
              {isEditing ? 'Save Changes' : 'Add Order'}
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default OrderTable;
