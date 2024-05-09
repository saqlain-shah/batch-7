// MenuItem.jsx
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function MenuItem({ item, index, handleMenuClick, selectedMenu, openSubMenu }) {
  const handleClick = () => {
    handleMenuClick(index);
  };

  return (
    <>
      <ListItem
        disablePadding
        sx={{ display: 'block' }}
        button
        selected={selectedMenu === index}
        onClick={handleClick}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon sx={{ minWidth: 0, mr: 3, justifyContent: 'center' }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text} sx={{ opacity: 1 }} />
          {openSubMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={openSubMenu && selectedMenu === index} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.subMenu.map((subItem, subIndex) => (
            <ListItem key={subIndex} disablePadding button>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'initial',
                  px: 4,
                }}
              >
                <ListItemText primary={subItem.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}
