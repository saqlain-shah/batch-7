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
];

const InvoiceList = () => {
  const [invoices, setInvoices] = useState(initialInvoices);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openDetailModal, setOpenDetailModal] = useState(false);
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
                setInvoices(invoices.filter(invoice => invoice.invoiceNumber !== row.original.invoiceNumber));
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                setSelectedInvoice(row.original);
                setOpenDetailModal(true);
              }}
            >
              <InfoIcon />
            </IconButton>
          </>
        ),
      },
    ],
    [invoices],
  );

  const table = useMaterialReactTable({
    columns,
    data: invoices,
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
      <Box sx={{ overflowX: 'auto' }}>
        <MaterialReactTable table={table} />
      </Box>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '1%', width: 400, borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
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
            <TextField
              label="Created At"
              value={formValues.createdAt}
              onChange={(e) => setFormValues({ ...formValues, createdAt: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Updated At"
              value={formValues.updatedAt}
              onChange={(e) => setFormValues({ ...formValues, updatedAt: e.target.value })}
              fullWidth
              margin="normal"
            />
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={handleFormSubmit}
              sx={{ marginTop: 2 }}
            >
              {isEditing ? 'Update Invoice' : 'Add Invoice'}
            </Button>
          </form>
        </Box>
      </Modal>

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
          <Typography>Created At: {selectedInvoice?.createdAt}</Typography>
          <Typography>Updated At: {selectedInvoice?.updatedAt}</Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default InvoiceList;
