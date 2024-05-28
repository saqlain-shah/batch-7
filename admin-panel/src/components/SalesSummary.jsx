import { Grid, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Divider } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Product 1', id: 'P001', price: 20, sales: 100 },
  { name: 'Product 2', id: 'P002', price: 30, sales: 80 },
  { name: 'Product 3', id: 'P003', price: 25, sales: 120 },
  { name: 'Product 4', id: 'P004', price: 35, sales: 90 },
];

export default function Dashboard() {

  return (
    <div style={{ padding: 16 }}>
      <Grid container spacing={2}>

        {/* Sales, Total Income, Order Paid */}
        <Grid item xs={12}>
          <Grid container spacing={2} direction="row" alignItems="center">
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Sales
                  </Typography>
                  <Typography variant="h3">
                    $1000
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Total Income
                  </Typography>
                  <Typography variant="h3">
                    $5000
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Order Paid
                  </Typography>
                  <Typography variant="h3">
                    500
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Product Overview */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Product Overview
              </Typography>
              <Divider />
              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Product ID</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Sales</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>${row.price}</TableCell>
                        <TableCell>{row.sales}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Bar Chart */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Product Sales Chart
              </Typography>
              <Divider />
              <Box height={300}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Orders */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Orders
              </Typography>
              <Divider />
              <Box mt={2}>
                {/* Add your orders here */}
                <Typography>No orders available</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Earnings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Earnings
              </Typography>
              <Divider />
              <Box mt={2}>
                {/* Add your earning details here */}
                <Typography>Total Revenue: $5000</Typography>
                <Typography>Total Profit: $2000</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </div>
  );
}
