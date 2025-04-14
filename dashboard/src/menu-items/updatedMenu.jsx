// type
import { Home3, HomeTrendUp, Box, Archive, User, Setting2, ShoppingCart, Bag2, UserSquare , ReceiptItem } from 'iconsax-react';

// icons
const icons = {
  navigation: Home3,
  dashboard: HomeTrendUp,
  artifacts: Box,
  stockRegistering: Archive,
  users: User,
  settings: Setting2,
  orders: ShoppingCart,
  products: Bag2,
  buyer: UserSquare,
  customers: User,
  invoices: ReceiptItem
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
      id: 'orders',
      title: 'Orders',
      type: 'item',
      url: '/orders',
      icon: icons.orders,
      breadcrumbs: false
    },
    {
      id: 'products',
      title: 'Products',
      type: 'item',
      url: '/products',
      icon: icons.products,
      breadcrumbs: false
    },
    // {
    //   id: 'buyer',
    //   title: 'Buyer',
    //   type: 'item',
    //   url: '/buyer',
    //   icon: icons.buyer,
    //   breadcrumbs: false
    // },
    {
      id: 'customers',
      title: 'Customers',
      type: 'item',
      url: '/customers',
      icon: icons.customers,
      breadcrumbs: false
    },
    {
      id: 'invoices',
      title: 'Invoices',
      type: 'item',
      url: '/invoices',
      icon: icons.invoices,
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
