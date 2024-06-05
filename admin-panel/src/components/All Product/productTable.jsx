import React, { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Box, Button, ListItemIcon, MenuItem, Typography, lighten } from '@mui/material';
import { AccountCircle, Send } from '@mui/icons-material';
import { data } from './makeData';

const ProductTable = () => {
  const columns = useMemo(
    () => [
      {
        id: 'product',
        header: 'Product',
        columns: [
          {
            accessorKey: 'name',
            header: 'Name',
            size: 250,
          },
          {
            accessorKey: 'price',
            header: 'Price',
            size: 200,
            Cell: ({ cell }) => (
              <Box>
                ${cell.getValue()?.toFixed(2)}
              </Box>
            ),
          },
        ],
      },
      {
        id: 'details',
        header: 'Details',
        columns: [
          {
            accessorKey: 'description',
            header: 'Description',
            size: 400,
          },
          {
            accessorKey: 'category',
            header: 'Category',
            size: 200,
          },
        ],
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    initialState: {
      showColumnFilters: true,
      showGlobalFilter: true,
    },
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
  });

  return <MaterialReactTable table={table} />;
};

export default ProductTable;
