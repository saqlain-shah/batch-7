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
} from '@mui/material';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

const initialInvoices = [
  {
    invoiceNumber: 'INV001',
    issueDate: '2024-01-01',
    dueDate: '2024-01-15',
    customer: 'John Doe',
    items: 'T-Shirt, Jeans',
    quantities: '2, 1',
    subtotal: '59.97',
    total: '59.97',
    paymentStatus: 'Paid',
    notes: '',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-10',
  },
  {
    invoiceNumber: 'INV002',
    issueDate: '2024-02-05',
    dueDate: '2024-02-20',
    customer: 'Jane Smith',
    items: 'Leather Jacket',
    quantities: '1',
    subtotal: '89.99',
    total: '89.99',
    paymentStatus: 'Unpaid',
    notes: 'Pending payment',
    createdAt: '2024-02-05',
    updatedAt: '2024-02-15',
  },
  // Add more invoices here
];

const InvoiceList = () => {
  const [invoices, setInvoices] = useState(initialInvoices);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openDetailModal, setOpenDetailModal] = useState(false); // For viewing details
  const [formValues, setFormValues] = useState({
    invoiceNumber: '',
    issueDate: '',
    dueDate: '',
    customer: '',
    items: '',
    quantities: '',
    subtotal: '',
    total: '',
    paymentStatus: '',
    notes: '',
    createdAt: '',
    updatedAt: '',
  });

  const columns = useMemo(
    () => [
      {
        accessorKey: 'invoiceNumber',
        header: 'Invoice Number',
      },
      {
        accessorKey: 'issueDate',
        header: 'Issue Date',
      },
      {
        accessorKey: 'dueDate',
        header: 'Due Date',
      },
      {
        accessorKey: 'customer',
        header: 'Customer',
      },
      {
        accessorKey: 'total',
        header: 'Total ($)',
      },
      {
        accessorKey: 'paymentStatus',
        header: 'Payment Status',
      },
      {
        id: 'actions',
        header: 'Actions',
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
                onClick={() => {
                  setFormValues(selectedInvoice);
                  setIsEditing(true);
                  setOpenModal(true);
                  setAnchorEl(null);
                }}
              >
                Edit
              </MenuItem>
              <MenuItem onClick={() => {
                setInvoices(invoices.filter(invoice => invoice.invoiceNumber !== row.original.invoiceNumber));
                setAnchorEl(null);
              }}>
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
    muiTableBodyCellProps: {
      sx: {
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #e0e0e0',
      },
    },
    muiTableBodyRowProps: {
      sx: {
        '&:nth-of-type(odd)': {
          backgroundColor: '#fafafa',
        },
        '&:hover': {
          backgroundColor: '#f1f1f1',
        },
      },
    },
    muiTableHeadCellProps: {
      sx: {
        backgroundColor: '#1976d2',
        color: '#ffffff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
    },
    muiTableContainerProps: {
      sx: {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
      },
    },
  });

  const handleAddInvoice = () => {
    setIsEditing(false);
    setFormValues({
      invoiceNumber: '',
      issueDate: '',
      dueDate: '',
      customer: '',
      items: '',
      quantities: '',
      subtotal: '',
      total: '',
      paymentStatus: '',
      notes: '',
      createdAt: '',
      updatedAt: '',
    });
    setOpenModal(true);
  };

  const handleFormSubmit = () => {
    if (isEditing) {
      setInvoices(invoices.map((invoice) =>
        invoice.invoiceNumber === formValues.invoiceNumber ? formValues : invoice
      ));
    } else {
      setInvoices([...invoices, formValues]);
    }
    setOpenModal(false);
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f0f2f5' }}>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: 2 }}
        onClick={handleAddInvoice}
      >
        Add New Invoice
      </Button>
      <MaterialReactTable table={table} />

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '10%', width: 400, borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h6" gutterBottom>
            {isEditing ? 'Edit Invoice' : 'Add New Invoice'}
          </Typography>
          <form>
            <TextField
              label="Invoice Number"
              value={formValues.invoiceNumber}
              onChange={(e) => setFormValues({ ...formValues, invoiceNumber: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Issue Date"
              value={formValues.issueDate}
              onChange={(e) => setFormValues({ ...formValues, issueDate: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Due Date"
              value={formValues.dueDate}
              onChange={(e) => setFormValues({ ...formValues, dueDate: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Customer"
              value={formValues.customer}
              onChange={(e) => setFormValues({ ...formValues, customer: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Items"
              value={formValues.items}
              onChange={(e) => setFormValues({ ...formValues, items: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Quantities"
              value={formValues.quantities}
              onChange={(e) => setFormValues({ ...formValues, quantities: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Subtotal"
              value={formValues.subtotal}
              onChange={(e) => setFormValues({ ...formValues, subtotal: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Total"
              value={formValues.total}
              onChange={(e) => setFormValues({ ...formValues, total: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Payment Status"
              value={formValues.paymentStatus}
              onChange={(e) => setFormValues({ ...formValues, paymentStatus: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Notes"
              value={formValues.notes}
              onChange={(e) => setFormValues({ ...formValues, notes: e.target.value })}
              fullWidth
              margin="normal"
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
              <Button onClick={handleFormSubmit} variant="contained" color="primary">
                {isEditing ? 'Save Changes' : 'Add Invoice'}
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>

      {/* Detail Modal for Viewing Invoice */}
      <Modal open={openDetailModal} onClose={() => setOpenDetailModal(false)}>
        <Box sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '10%', width: 400, borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h6" gutterBottom>
            Invoice Details
          </Typography>
          {selectedInvoice && (
            <Box>
              <Typography variant="body1"><strong>Invoice Number:</strong> {selectedInvoice.invoiceNumber}</Typography>
              <Typography variant="body1"><strong>Issue Date:</strong> {selectedInvoice.issueDate}</Typography>
              <Typography variant="body1"><strong>Due Date:</strong> {selectedInvoice.dueDate}</Typography>
              <Typography variant="body1"><strong>Customer:</strong> {selectedInvoice.customer}</Typography>
              <Typography variant="body1"><strong>Items:</strong> {selectedInvoice.items}</Typography>
              <Typography variant="body1"><strong>Quantities:</strong> {selectedInvoice.quantities}</Typography>
              <Typography variant="body1"><strong>Subtotal:</strong> ${selectedInvoice.subtotal}</Typography>
              <Typography variant="body1"><strong>Total:</strong> ${selectedInvoice.total}</Typography>
              <Typography variant="body1"><strong>Payment Status:</strong> {selectedInvoice.paymentStatus}</Typography>
              <Typography variant="body1"><strong>Notes:</strong> {selectedInvoice.notes}</Typography>
              <Typography variant="body1"><strong>Created At:</strong> {selectedInvoice.createdAt}</Typography>
              <Typography variant="body1"><strong>Updated At:</strong> {selectedInvoice.updatedAt}</Typography>
            </Box>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
            <Button onClick={() => setOpenDetailModal(false)} variant="contained" color="primary">
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default InvoiceList;