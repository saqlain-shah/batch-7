import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Typography,
} from '@mui/material';
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
} from 'material-react-table';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

// Backend API URL
const API_URL = 'http://localhost:8000/api/invoice/';

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [openDetailModal, setOpenDetailModal] = useState(false);

  // Fetch invoices from backend
  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get(API_URL);
        setInvoices(response.data); // Assuming data contains the invoices
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };
    fetchInvoices();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'invoiceNumber',
        header: 'Invoice Number',
        size: 100,
      },
      {
        accessorKey: 'customer',
        header: 'Customer',
        size: 200,
      },
      {
        accessorKey: 'total',
        header: 'Total ($)',
        size: 100,
      },
      {
        accessorKey: 'paymentStatus',
        header: 'Payment Status',
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
                setSelectedInvoice(row.original);
              }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && selectedInvoice?.invoiceNumber === row.original.invoiceNumber}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem
                onClick={async () => {
                  try {
                    await axios.delete(`${API_URL}${row.original.invoiceNumber}`);
                    setInvoices(invoices.filter(invoice => invoice.invoiceNumber !== row.original.invoiceNumber));
                  } catch (error) {
                    console.error('Error deleting invoice:', error);
                  }
                  setAnchorEl(null);
                }}
              >
                Delete
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setOpenDetailModal(true);
                  setAnchorEl(null);
                }}
              >
                View
              </MenuItem>
            </Menu>
          </>
        ),
      },
    ],
    [anchorEl, selectedInvoice, invoices],
  );

  const table = useMaterialReactTable({
    columns,
    data: invoices,
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
    <Box sx={{ padding: 4, backgroundColor: '#f0f2f5' }}>
      <Box sx={{ overflowX: 'auto' }}>
        <MaterialReactTable table={table} />
      </Box>

      {/* Detail Modal */}
      <Modal open={openDetailModal} onClose={() => setOpenDetailModal(false)}>
        <Box sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '1%', width: 400, borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h6" gutterBottom>
            Invoice Details
          </Typography>
          <Typography>Invoice Number: {selectedInvoice?.invoiceNumber}</Typography>
          <Typography>Issue Date: {selectedInvoice?.issueDate}</Typography>
          <Typography>Due Date: {selectedInvoice?.dueDate}</Typography>
          <Typography>Customer: {selectedInvoice?.customer}</Typography>
          <Typography>Items: {selectedInvoice?.items}</Typography>
          <Typography>Quantities: {selectedInvoice?.quantities}</Typography>
          <Typography>Subtotal: {selectedInvoice?.subtotal}</Typography>
          <Typography>Total: {selectedInvoice?.total}</Typography>
          <Typography>Payment Status: {selectedInvoice?.paymentStatus}</Typography>
          <Typography>Notes: {selectedInvoice?.notes}</Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default InvoiceList;
