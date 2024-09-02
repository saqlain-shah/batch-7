/* eslint-disable prettier/prettier */
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Box, IconButton, Menu, MenuItem, Button } from '@mui/material';
import { Visibility as VisibilityIcon, Edit as EditIcon, Delete as DeleteIcon, MoreVert as MoreVertIcon } from '@mui/icons-material';
import OrderDetailsModal from './OrderDetails'; // Import the OrderDetails modal

const Example = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRow, setCurrentRow] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [data, setData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to handle loading state

  // Fetch data from the backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/orders'); // Assuming endpoint is for orders
        console.log('response', response.data); // Assuming response.data is an array of orders
        setData(response.data); // Assuming response.data is an array of orders
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle menu open and close
  const handleClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setCurrentRow(row);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Define columns for the table
  const columns = useMemo(
    () => [
      {
        accessorKey: 'action',
        header: 'Actions',
        enableEditing: false,
        size: 100,
        Cell: ({ row }) => (
          <IconButton onClick={(event) => handleClick(event, row.original)}>
            <MoreVertIcon />
          </IconButton>
        )
      },
      {
        accessorKey: 'id',
        header: 'Order ID',
        enableEditing: false,
        size: 80
      },
      {
        accessorKey: 'name',
        header: 'Customer Name'
      },
      {
        accessorKey: 'date',
        header: 'Order Date'
      },
      {
        accessorKey: 'total',
        header: 'Total Amount'
      },
      {
        accessorKey: 'status',
        header: 'Order Status'
      }
    ],
    []
  );

  // Define table instance
  const table = useMaterialReactTable({
    columns,
    data, // Use the fetched data
    state: { isLoading: loading } // Display loading indicator while fetching data
  });

  // Handle view, edit, delete actions
  const handleView = () => {
    setModalOpen(true); // Open the OrderDetailsModal
    handleClose();
  };

  const handleEdit = () => {
    if (currentRow) {
      setEditModalOpen(true);
    } else {
      console.error('No row selected for editing');
    }
    handleClose();
  };

  const handleDelete = () => {
    alert('Deleting:', currentRow);
    handleClose();
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };

  const handleOpenAddModal = () => {
    setAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setAddModalOpen(false);
  };

  // Save edited order
  const handleSaveEdit = (updatedOrder) => {
    console.log('Saving edited order:', updatedOrder);
    // Here you should update your data source
    handleCloseEditModal();
  };

  return (
    <>
      {/* Button to add a new order (if applicable) */}
      <Box sx={{ mb: 2 }}>
        <Button variant="contained" color="primary" onClick={handleOpenAddModal}>
          Add New Order
        </Button>
      </Box>

      <MaterialReactTable table={table} />

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleView}>
          <VisibilityIcon sx={{ marginRight: 1 }} />
          View
        </MenuItem>
        <MenuItem onClick={handleEdit}>
          <EditIcon sx={{ marginRight: 1 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
          <DeleteIcon sx={{ marginRight: 1 }} />
          Delete
        </MenuItem>
      </Menu>

      {/* OrderDetailsModal to view details of the selected order */}
      <OrderDetailsModal open={modalOpen} handleClose={handleCloseModal} orderDetails={currentRow} />

      </>
  );
};

export default Example;
