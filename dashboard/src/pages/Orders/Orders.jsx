/* eslint-disable prettier/prettier */
import React, { useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { MenuItem, IconButton, Menu } from '@mui/material';
import { Visibility as VisibilityIcon, Delete as DeleteIcon, MoreVert as MoreVertIcon } from '@mui/icons-material';
import OrderDetailsModal from './OrderDetails'; // Import the OrderDetails modal

// Dummy data
const DummyData = [
  {
    id: '001',
    name: 'John Doe',
    date: '2024-08-29',
    total: '$150.00',
    status: 'Completed',
    orderNo: '#5355619',
    orderCreatedAt: '16/06/2021 at 04:23 PM',
    email: 'john@example.com',
    contactNo: '767-251-8637',
    deliveryAddress: {
      name: 'Home',
      address: '123 Main St, Springfield, USA',
      phone: '123-456-7890',
    },
    billingAddress: {
      name: 'Workplace',
      address: '456 Office St, Metropolis, USA',
      phone: '098-765-4321',
    },
    orderItems: [
      { name: 'Laptop', quantity: 1, price: '$1,000.00', total: '$1,000.00' },
      { name: 'Headphones', quantity: 1, price: '$150.00', total: '$150.00' },
    ],
    priceDetails: {
      subTotal: '$1,150.00',
      shipping: 'Free',
      tax: '$172.50',
      total: '$1,322.50',
    },
    invoice: {
      invoiceNo: '#123456',
      sellerGST: '12HY87072641Z0',
      purchaseGST: '22HG9838964Z1',
    },
  },
  {
    id: '002',
    name: 'Jane Doe',
    date: '2024-08-28',
    total: '$200.00',
    status: 'Pending',
    orderNo: '#5355620',
    orderCreatedAt: '17/06/2021 at 10:00 AM',
    email: 'jane@example.com',
    contactNo: '123-456-1234',
    deliveryAddress: {
      name: 'Home',
      address: '789 Park Ave, Springfield, USA',
      phone: '321-654-0987',
    },
    billingAddress: {
      name: 'Workplace',
      address: '987 Industrial Blvd, Gotham, USA',
      phone: '987-654-3210',
    },
    orderItems: [
      { name: 'Smartphone', quantity: 1, price: '$800.00', total: '$800.00' },
      { name: 'Charger', quantity: 1, price: '$50.00', total: '$50.00' },
    ],
    priceDetails: {
      subTotal: '$850.00',
      shipping: 'Free',
      tax: '$127.50',
      total: '$977.50',
    },
    invoice: {
      invoiceNo: '#123457',
      sellerGST: '13HY87072641Z0',
      purchaseGST: '23HG9838964Z1',
    },
  },
  {
    id: '003',
    name: 'Joe Doe',
    date: '2024-08-27',
    total: '$300.00',
    status: 'Shipped',
    orderNo: '#5355621',
    orderCreatedAt: '18/06/2021 at 01:30 PM',
    email: 'joe@example.com',
    contactNo: '555-555-5555',
    deliveryAddress: {
      name: 'Home',
      address: '321 Elm St, Springfield, USA',
      phone: '555-123-4567',
    },
    billingAddress: {
      name: 'Workplace',
      address: '654 Market St, Star City, USA',
      phone: '555-765-4321',
    },
    orderItems: [
      { name: 'Tablet', quantity: 1, price: '$300.00', total: '$300.00' },
    ],
    priceDetails: {
      subTotal: '$300.00',
      shipping: 'Free',
      tax: '$45.00',
      total: '$345.00',
    },
    invoice: {
      invoiceNo: '#123458',
      sellerGST: '14HY87072641Z0',
      purchaseGST: '24HG9838964Z1',
    },
  },
  {
    id: '004',
    name: 'Kevin Vandy',
    date: '2024-08-26',
    total: '$400.00',
    status: 'Completed',
    orderNo: '#5355622',
    orderCreatedAt: '19/06/2021 at 03:45 PM',
    email: 'kevin@example.com',
    contactNo: '444-444-4444',
    deliveryAddress: {
      name: 'Home',
      address: '789 Maple St, Springfield, USA',
      phone: '444-123-4567',
    },
    billingAddress: {
      name: 'Workplace',
      address: '987 Ocean Ave, Central City, USA',
      phone: '444-765-4321',
    },
    orderItems: [
      { name: 'Monitor', quantity: 1, price: '$400.00', total: '$400.00' },
    ],
    priceDetails: {
      subTotal: '$400.00',
      shipping: 'Free',
      tax: '$60.00',
      total: '$460.00',
    },
    invoice: {
      invoiceNo: '#123459',
      sellerGST: '15HY87072641Z0',
      purchaseGST: '25HG9838964Z1',
    },
  },
  {
    id: '005',
    name: 'Joshua Rolluffs',
    date: '2024-08-25',
    total: '$500.00',
    status: 'Cancelled',
    orderNo: '#5355623',
    orderCreatedAt: '20/06/2021 at 05:00 PM',
    email: 'joshua@example.com',
    contactNo: '333-333-3333',
    deliveryAddress: {
      name: 'Home',
      address: '456 Oak St, Springfield, USA',
      phone: '333-123-4567',
    },
    billingAddress: {
      name: 'Workplace',
      address: '654 Pine St, Coast City, USA',
      phone: '333-765-4321',
    },
    orderItems: [
      { name: 'Gaming Console', quantity: 1, price: '$500.00', total: '$500.00' },
    ],
    priceDetails: {
      subTotal: '$500.00',
      shipping: 'Free',
      tax: '$75.00',
      total: '$575.00',
    },
    invoice: {
      invoiceNo: '#123460',
      sellerGST: '16HY87072641Z0',
      purchaseGST: '26HG9838964Z1',
    },
  }
];


const Example = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRow, setCurrentRow] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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
        accessorKey: 'id',
        header: 'Order ID',
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
      },
      {
        accessorKey: 'action',
        header: 'Actions',
        size: 100,
        Cell: ({ row }) => (
          <>
            <IconButton onClick={(event) => handleClick(event, row.original)}>
              <MoreVertIcon />
            </IconButton>
          </>
        )
      }
    ],
    [] // Keep empty dependency array to avoid unnecessary re-renders
  );

  // Define table instance
  const table = useMaterialReactTable({
    columns,
    data: DummyData, // Correctly pass the data array here
  });

  // Handle view action
  const handleView = () => {
    setModalOpen(true); // Open the OrderDetailsModal
    handleClose();
  };

  // Handle delete action
  const handleDelete = () => {
    alert('Deleting:', currentRow);
    handleClose();
  };

  // Close the view modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <MaterialReactTable table={table} />

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleView}>
          <VisibilityIcon sx={{ marginRight: 1 }} />
          View
        </MenuItem>
        <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
          <DeleteIcon sx={{ marginRight: 1 }} />
          Delete
        </MenuItem>
      </Menu>

      {/* OrderDetailsModal to view details of the selected order */}
      {currentRow && (
        <OrderDetailsModal open={modalOpen} handleClose={handleCloseModal} orderDetails={currentRow} />
      )}
    </>
  );
};

export default Example;
