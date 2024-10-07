import React, { useState, useMemo } from 'react';
import {
  Box,
  Button,
  IconButton,
  Menu,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
} from 'material-react-table';

const initialOrders = [
  { id: '001', name: 'John Doe', date: '2024-08-29', total: '$150.00', status: 'Completed' },
  { id: '002', name: 'Jane Smith', date: '2024-08-28', total: '$250.00', status: 'Pending' },
  { id: '003', name: 'Alex Brown', date: '2024-08-27', total: '$120.00', status: 'Shipped' },
  { id: '004', name: 'Emma Johnson', date: '2024-08-26', total: '$350.00', status: 'Cancelled' },
];

const OrderTable = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [openModal, setOpenModal] = useState(false);
  const [formValues, setFormValues] = useState({
    id: '',
    name: '',
    date: '',
    total: '',
    status: '',
  });
  const [isEditing, setIsEditing] = useState(false);

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
            color='primary'
              onClick={() => {
                setFormValues(row.original);
                setIsEditing(true);
                setOpenModal(true);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
            color='error'
              onClick={() => {
                setOrders(orders.filter(order => order.id !== row.original.id));
              }}
            >
              <DeleteIcon />
            </IconButton>
          </>
        ),
      },
    ],
    [orders],
  );

  const table = useMaterialReactTable({
    columns,
    data: orders,
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableRowSelection: true,
    initialState: {
      showColumnFilters: false,
      showGlobalFilter: true,
    },
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
