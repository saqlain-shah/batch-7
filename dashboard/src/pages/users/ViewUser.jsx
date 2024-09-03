import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
} from 'material-react-table';
import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  Typography,
  lighten,
} from '@mui/material';
import { AccountCircle, Send } from '@mui/icons-material';

const orders = [
  { id: '#3210', name: 'Cortie Gemson', date: 'May 23, 2021', total: '$239.00', status: 'Processing' },
  { id: '#3211', name: 'Mathilde Tumilson', date: 'May 15, 2021', total: '$650.50', status: 'Shipped' },
  { id: '#3212', name: 'Audrye Heaford', date: 'Apr 24, 2021', total: '$100.00', status: 'Completed' },
  { id: '#3213', name: 'Brantley Mell', date: 'Apr 10, 2021', total: '$19.00', status: 'Refunded' },
  { id: '#3214', name: 'Dominique Enriques', date: 'March 5, 2021', total: '$150.00', status: 'Cancelled' },
];

const OrderDashboard = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'Order ID',
        size: 150,
      },
      {
        accessorKey: 'name',
        header: 'Customer Name',
        size: 250,
      },
      {
        accessorFn: (row) => new Date(row.date),
        id: 'date',
        header: 'Order Date',
        Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(),
        filterVariant: 'date',
        filterFn: 'lessThan',
        sortingFn: 'datetime',
      },
      {
        accessorKey: 'total',
        header: 'Total Amount',
        size: 150,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 150,
        Cell: ({ cell }) => (
          <Box
            component="span"
            sx={(theme) => ({
              backgroundColor: 
                cell.getValue() === 'Processing'
                  ? theme.palette.warning.dark
                  : cell.getValue() === 'Shipped'
                  ? theme.palette.info.dark
                  : cell.getValue() === 'Completed'
                  ? theme.palette.success.dark
                  : cell.getValue() === 'Refunded'
                  ? theme.palette.error.dark
                  : theme.palette.grey[500],
              borderRadius: '0.25rem',
              color: '#fff',
              padding: '0.25rem',
            })}
          >
            {cell.getValue()}
          </Box>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: orders,
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableRowActions: true,
    enableRowSelection: true,
    initialState: {
      showColumnFilters: true,
      showGlobalFilter: true,
    },
  });

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f0f0f0' }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default OrderDashboa;
