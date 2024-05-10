// MenuList.jsx
import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuItem from './MenuItem';

export default function MenuList({ menuItems, handleMenuClick, selectedMenu, openSubMenu }) {
  return (
    <List>
      {menuItems.map((item, index) => (
        <div key={index}>
          <MenuItem
            item={item}
            index={index}
            handleMenuClick={handleMenuClick}
            selectedMenu={selectedMenu}
            openSubMenu={openSubMenu}
          />
          {openSubMenu && <Divider />}
        </div>
      ))}
    </List>
  );
}
