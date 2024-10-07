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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
} from 'material-react-table';

const initialProducts = [
  { id: 'P001', name: 'Cotton T-Shirt', category: 'T-Shirts', price: '19.99', stock: 50 },
  { id: 'P002', name: 'Denim Jeans', category: 'Jeans', price: '39.99', stock: 30 },
  { id: 'P003', name: 'Leather Jacket', category: 'Jackets', price: '89.99', stock: 15 },
  { id: 'P004', name: 'Wool Sweater', category: 'Sweaters', price: '29.99', stock: 40 },
  { id: 'P005', name: 'Silk Scarf', category: 'Accessories', price: '14.99', stock: 60 },
];

const ProductList = () => {
  const [products, setProducts] = useState(initialProducts);
  const [openModal, setOpenModal] = useState(false);
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [formValues, setFormValues] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    stock: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'Product ID',
        size: 50,
      },
      {
        accessorKey: 'name',
        header: 'Product Name',
        size: 130,
      },
      {
        accessorKey: 'category',
        header: 'Category',
        size: 80,
      },
      {
        accessorKey: 'price',
        header: 'Price ($)',
        size: 60,
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
                setProducts(products.filter(product => product.id !== row.original.id));
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                setSelectedProduct(row.original);
                setOpenDetailModal(true);
              }}
            >
              <InfoIcon />
            </IconButton>
          </>
        ),
      },
    ],
    [products],
  );

  const table = useMaterialReactTable({
    columns,
    data: products,
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
        padding: '6px',
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #e0e0e0',
      },
    },
    muiTableHeadCellProps: {
      sx: {
        padding: '6px',
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
        maxHeight: '400px',
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

  const handleAddProduct = () => {
    setIsEditing(false);
    setFormValues({ id: '', name: '', category: '', price: '', stock: '' });
    setOpenModal(true);
  };

  const handleFormSubmit = () => {
    if (isEditing) {
      setProducts(products.map((product) =>
        product.id === formValues.id ? formValues : product
      ));
    } else {
      setProducts([...products, formValues]);
    }
    setOpenModal(false);
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f0f2f5' }}>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: 2 }}
        onClick={handleAddProduct}
      >
        Add New Product
      </Button>
      <Box sx={{ overflowX: 'auto' }}>
        <MaterialReactTable table={table} />
      </Box>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '10%', width: 400, borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h6" gutterBottom>
            {isEditing ? 'Edit Product' : 'Add New Product'}
          </Typography>
          <form>
            <TextField sx={{ marginBottom: "3%" }}
              label="Product ID"
              value={formValues.id}
              onChange={(e) => setFormValues({ ...formValues, id: e.target.value })}
              fullWidth
              margin="small"
            />
            <TextField sx={{ marginBottom: "3%" }}
              label="Product Name"
              value={formValues.name}
              onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
              fullWidth
              margin="small"
            />
            <TextField sx={{ marginBottom: "3%" }}
              label="Category"
              value={formValues.category}
              onChange={(e) => setFormValues({ ...formValues, category: e.target.value })}
              fullWidth
              margin="small"
            />
            <TextField sx={{ marginBottom: "3%" }}
              label="Price"
              value={formValues.price}
              onChange={(e) => setFormValues({ ...formValues, price: e.target.value })}
              fullWidth
              margin="small"
            />
            <TextField sx={{ marginBottom: "3%" }}
              label="Stock"
              value={formValues.stock}
              onChange={(e) => setFormValues({ ...formValues, stock: e.target.value })}
              fullWidth
              margin="small"
            />
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={handleFormSubmit}>
              {isEditing ? 'Save Changes' : 'Add Product'}
            </Button>
          </form>
        </Box>
      </Modal>

      {/* Detail Modal */}
      {selectedProduct && (
        <Modal open={openDetailModal} onClose={() => setOpenDetailModal(false)}>
          <Box sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '1%', width: 400, borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h6" gutterBottom>
              Product Details
            </Typography>
            <Typography>ID: {selectedProduct.id}</Typography>
            <Typography>Name: {selectedProduct.name}</Typography>
            <Typography>Category: {selectedProduct.category}</Typography>
            <Typography>Price: {selectedProduct.price}</Typography>
            <Typography>Stock: {selectedProduct.stock}</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={() => setOpenDetailModal(false)}
            >
              Close
            </Button>
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default ProductList;
