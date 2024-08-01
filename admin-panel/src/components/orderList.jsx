import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Order ID', width: 150 },
  { field: 'customer', headerName: 'Customer Name', width: 200 },
  { field: 'totalPrice', headerName: 'Total Price', width: 150 },
  { field: 'status', headerName: 'Status', width: 150 },
];

const orders = [
  { id: 'ORD001', customer: 'John Doe', totalPrice: 150, status: 'Pending' },
  { id: 'ORD002', customer: 'Jane Smith', totalPrice: 200, status: 'Delivered' },
  { id: 'ORD003', customer: 'Michael Johnson', totalPrice: 100, status: 'Shipped' },
  { id: 'ORD004', customer: 'Emily Wilson', totalPrice: 180, status: 'Pending' },
];

export default function OrderList() {
  const [searchText, setSearchText] = useState('');

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchText.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchText.toLowerCase()) ||
      order.status.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Orders
        </Typography>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ marginBottom: 20 }}
        />
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={filteredOrders}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
          />
        </div>
      </CardContent>
    </Card>
  );
}
