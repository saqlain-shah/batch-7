import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Sidebar from './component/sidebar';
import Dashboard from './dashbord/dashboard';
import NoOfCustomer from './dashbord/NoOfCustomer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopSellingProducts from './dashbord/TopSales';

export default function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar /> {/* Sidebar remains consistent across routes */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/customer" element={<NoOfCustomer />} />
            <Route path="/Top Sales" element={<TopSellingProducts />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
