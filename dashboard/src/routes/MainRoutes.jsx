/* eslint-disable prettier/prettier */
import { lazy } from 'react';

// project-imports
import MainLayout from 'layout/Dashboard/index';
import Loadable from 'components/Loadable';

// render - data display components
const Dashboard = Loadable(lazy(() => import('pages/dashboard/default')));
const Users = Loadable(lazy(() => import('pages/users/AddUser')));
const Settings = Loadable(lazy(() => import('pages/setting/Setting')));
const Invoice = Loadable(lazy(() => import('pages/Invoice/Invoice')));
const Orders = Loadable(lazy(() => import('pages/Orders/Orders')));
const Products = Loadable(lazy(() => import('pages/Products/Products')));
const Buyer = Loadable(lazy(() => import('pages/Buyer/Buyer')));
const Customers = Loadable(lazy(() => import('pages/Customers/Customers')));

// ==============================|| COMPONENTS ROUTES ||============================== //

const ComponentsRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'dashboard',
      element: <Dashboard />
    },
    {
      path: 'orders',
      element: <Orders />
    },
    {
      path: 'products',
      element: <Products />
    },
    {
      path: 'buyer',
      element: <Buyer />
    },
    {
      path: 'customers',
      element: <Customers />
    },
    {
      path: 'invoices',
      element: <Invoice />
    },
    {
      path: 'users',
      element: <Users />
    },
    {
      path: 'settings',
      element: <Settings />
    }
  ]
};

export default ComponentsRoutes;
