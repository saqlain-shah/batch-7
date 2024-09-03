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

const initialProducts = [
  { id: 'P001', name: 'Cotton T-Shirt', category: 'T-Shirts', price: '19.99', stock: 50 },
  { id: 'P002', name: 'Denim Jeans', category: 'Jeans', price: '39.99', stock: 30 },
  { id: 'P003', name: 'Leather Jacket', category: 'Jackets', price: '89.99', stock: 15 },
  { id: 'P004', name: 'Wool Sweater', category: 'Sweaters', price: '29.99', stock: 40 },
  { id: 'P005', name: 'Silk Scarf', category: 'Accessories', price: '14.99', stock: 60 },
];

const ProductList = () => {
  const [products, setProducts] = useState(initialProducts);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openDetailModal, setOpenDetailModal] = useState(false); // For viewing details
  const [formValues, setFormValues] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    stock: '',
  });

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'Product ID',
      },
      {
        accessorKey: 'name',
        header: 'Product Name',
      },
      {
        accessorKey: 'category',
        header: 'Category',
      },
      {
        accessorKey: 'price',
        header: 'Price ($)',
      },
      {
        accessorKey: 'stock',
        header: 'Stock',
      },
      {
        id: 'actions',
        header: 'Actions',
        Cell: ({ row }) => (
          <>
            <IconButton
              onClick={(event) => {
                setAnchorEl(event.currentTarget);
                setSelectedProduct(row.original);
              }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && selectedProduct?.id === row.original.id}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem
                onClick={() => {
                  setFormValues(selectedProduct);
                  setIsEditing(true);
                  setOpenModal(true);
                  setAnchorEl(null);
                }}
              >
                Edit
              </MenuItem>
              <MenuItem onClick={() => {
                setProducts(products.filter(product => product.id !== row.original.id));
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
    [anchorEl, selectedProduct, products],
  );

  const table = useMaterialReactTable({
    columns,
    data: products,
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
      <MaterialReactTable table={table} />

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '10%', width: 400, borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h6" gutterBottom>
            {isEditing ? 'Edit Product' : 'Add New Product'}
          </Typography>
          <form>
            <TextField
              label="Product ID"
              value={formValues.id}
              onChange={(e) => setFormValues({ ...formValues, id: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Product Name"
              value={formValues.name}
              onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Category"
              value={formValues.category}
              onChange={(e) => setFormValues({ ...formValues, category: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Price"
              value={formValues.price}
              onChange={(e) => setFormValues({ ...formValues, price: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Stock"
              value={formValues.stock}
              onChange={(e) => setFormValues({ ...formValues, stock: e.target.value })}
              fullWidth
              margin="normal"
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
              <Button onClick={handleFormSubmit} variant="contained" color="primary">
                {isEditing ? 'Save Changes' : 'Add Product'}
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>

      {/* Detail Modal for Viewing Product */}
      <Modal open={openDetailModal} onClose={() => setOpenDetailModal(false)}>
        <Box sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '10%', width: 400, borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h6" gutterBottom>
            Product Details
          </Typography>
          {selectedProduct && (
            <Box>
              <Typography variant="body1"><strong>Product ID:</strong> {selectedProduct.id}</Typography>
              <Typography variant="body1"><strong>Product Name:</strong> {selectedProduct.name}</Typography>
              <Typography variant="body1"><strong>Category:</strong> {selectedProduct.category}</Typography>
              <Typography variant="body1"><strong>Price:</strong> ${selectedProduct.price}</Typography>
              <Typography variant="body1"><strong>Stock:</strong> {selectedProduct.stock}</Typography>
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


export default ProductList;
