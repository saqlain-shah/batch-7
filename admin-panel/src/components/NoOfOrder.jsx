import React, { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

// Extended data with varied product names
const data = [
  { product: 'Shoes', orderId: 'P001', price: 50, quantity: 10 },
  { product: 'Bags', orderId: 'P002', price: 30, quantity: 20 },
  { product: 'Hats', orderId: 'P003', price: 20, quantity: 15 },
  { product: 'Belts', orderId: 'P004', price: 10, quantity: 25 },
  { product: 'Socks', orderId: 'P005', price: 5, quantity: 50 },
  { product: 'Gloves', orderId: 'P006', price: 15, quantity: 35 },
  { product: 'Scarves', orderId: 'P007', price: 25, quantity: 30 },
  { product: 'T-Shirts', orderId: 'P008', price: 20, quantity: 45 },
  { product: 'Jeans', orderId: 'P009', price: 40, quantity: 40 },
  { product: 'Jackets', orderId: 'P010', price: 60, quantity: 20 },
  { product: 'Sweaters', orderId: 'P011', price: 45, quantity: 25 },
  { product: 'Shorts', orderId: 'P012', price: 35, quantity: 15 },
  { product: 'Skirts', orderId: 'P013', price: 50, quantity: 10 },
  { product: 'Dresses', orderId: 'P014', price: 70, quantity: 18 },
  { product: 'Suits', orderId: 'P015', price: 100, quantity: 5 },
  { product: 'Blazers', orderId: 'P016', price: 80, quantity: 12 },
  { product: 'Coats', orderId: 'P017', price: 90, quantity: 22 },
  { product: 'Ties', orderId: 'P018', price: 15, quantity: 60 },
  { product: 'Sunglasses', orderId: 'P019', price: 30, quantity: 35 },
  { product: 'Watches', orderId: 'P020', price: 200, quantity: 8 },
  { product: 'Bracelets', orderId: 'P021', price: 25, quantity: 55 },
  { product: 'Necklaces', orderId: 'P022', price: 40, quantity: 40 },
  { product: 'Earrings', orderId: 'P023', price: 20, quantity: 70 },
  { product: 'Rings', orderId: 'P024', price: 50, quantity: 25 },
  { product: 'Wallets', orderId: 'P025', price: 35, quantity: 45 },
  { product: 'Backpacks', orderId: 'P026', price: 60, quantity: 15 },
  { product: 'Laptops', orderId: 'P027', price: 800, quantity: 7 },
  { product: 'Tablets', orderId: 'P028', price: 300, quantity: 12 },
  { product: 'Phones', orderId: 'P029', price: 700, quantity: 20 },
  { product: 'Headphones', orderId: 'P030', price: 150, quantity: 30 },
  { product: 'Speakers', orderId: 'P031', price: 100, quantity: 25 },
  { product: 'Monitors', orderId: 'P032', price: 200, quantity: 10 },
  { product: 'Keyboards', orderId: 'P033', price: 50, quantity: 40 },
  { product: 'Mice', orderId: 'P034', price: 30, quantity: 35 },
  { product: 'Printers', orderId: 'P035', price: 100, quantity: 8 },
  { product: 'Scanners', orderId: 'P036', price: 120, quantity: 6 },
  { product: 'Cameras', orderId: 'P037', price: 500, quantity: 9 },
  { product: 'Lenses', orderId: 'P038', price: 250, quantity: 20 },
  { product: 'Tripods', orderId: 'P039', price: 75, quantity: 15 },
  { product: 'Lights', orderId: 'P040', price: 60, quantity: 50 },
];

const NoOfOrder = () => {
  // Memoized columns for the table
  const columns = useMemo(
    () => [
      {
        accessorKey: 'product',
        header: 'Product',
        size: 150,
        Cell: ({ cell }) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="https://via.placeholder.com/50"
              alt="Customer"
              style={{ marginRight: 10, borderRadius: '50%' }}
            />
            {cell.getValue()}
          </div>
        ),
      },
      {
        accessorKey: 'orderId',
        header: 'Order ID',
        size: 150,
      },
      {
        accessorKey: 'price',
        header: 'Price',
        size: 200,
      },
      {
        accessorKey: 'quantity',
        header: 'Quantity',
        size: 150,
      },
    ],
    [],
  );

  // Initialize the table instance
  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <div style={{ width: '143%' }}>
      <h2>Number of Orders</h2>
      <div style={{ width: '100%' }}>
        <MaterialReactTable
          table={table}
          muiTableContainerProps={{ sx: { width: '100%' } }}
        />
      </div>
    </div>
  );
};

export default NoOfOrder;
