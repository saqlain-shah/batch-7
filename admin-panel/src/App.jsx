import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './topbar';
import Sidebar from './Sidebar';
import Dashboard from './components/dashboard';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Topbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main style={{ flexGrow: 1, padding: '16px', transition: 'margin-left 0.3s', marginLeft: isSidebarOpen ? '0px' : '0px' }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard isSidebarOpen={isSidebarOpen} />} />
            {/* Add more routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
