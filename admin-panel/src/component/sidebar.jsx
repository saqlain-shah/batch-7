// Sidebar.js

import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = () => {
    setOpen(!open);
  };

  const handleMainLinkClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubLinkClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Dashboard Overview" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={() => handleSubLinkClick("Sale Summary")}>
              <ListItemText primary="Sale Summary" />
            </ListItem>
            {/* Add other sub-links under "Dashboard Overview" here */}
          </List>
        </Collapse>
        <ListItem button onClick={() => handleMainLinkClick("Order Management")}>
          <ListItemText primary="Order Management" />
          {selectedOption === "Order Management" && open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open && selectedOption === "Order Management"} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={() => handleSubLinkClick("List of Orders")}>
              <ListItemText primary="List of Orders" />
            </ListItem>
            {/* Add other sub-links under "Order Management" here */}
          </List>
        </Collapse>
        {/* Add other main links here */}
      </List>
    </Drawer>
  );
}

export default Sidebar;
