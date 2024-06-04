import React, { useState } from 'react';
import { CssBaseline, Box, Toolbar } from '@mui/material';
import Sidebar from './Sidebar';
import Topbar from './topbar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Topbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: 'margin 0.3s',
          marginLeft: isSidebarOpen ? '240px' : '0',
        }}
      >
        <Toolbar />
        <div>
          {/* Your main content goes here */}
          <h1>Welcome to the Admin Dashboard</h1>
        </div>
      </Box>
    </Box>
  );
}

export default App;
