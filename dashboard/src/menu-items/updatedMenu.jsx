// type
import { Home3, HomeTrendUp, Box, Archive, User, Setting2 } from 'iconsax-react';

// icons
const icons = {
  navigation: Home3,
  dashboard: HomeTrendUp,
  artifacts: Box,
  stockRegistering: Archive,
  users: User,
  settings: Setting2
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const UpdatedMenu = {
  id: 'group-dashboard',
  title: 'Navigation',
  icon: icons.navigation,
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.dashboard,
      breadcrumbs: false
    },
    {
      id: 'users',
      title: 'Users',
      type: 'item',
      url: '/users',
      icon: icons.users,
      breadcrumbs: false
    },
    {
      id: 'invoice',
      title: 'Invoice',
      type: 'item',
      url: '/invoice',
      icon: icons.users,
      breadcrumbs: false
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/settings',
      icon: icons.settings,
      breadcrumbs: false
    }
  ]
};

export default UpdatedMenu;
