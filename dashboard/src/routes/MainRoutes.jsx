import { lazy } from 'react';

// project-imports
import MainLayout from 'layout/Dashboard/index';
import Loadable from 'components/Loadable';

// render - data display components
const Dashboard = Loadable(lazy(() => import('pages/dashboard/default')));
const Artifacts = Loadable(lazy(() => import('pages/artifacts/TableIndex.jsx')));
const StockRegistering = Loadable(lazy(() => import('pages/stocks/ViewStock')));
const Users = Loadable(lazy(() => import('pages/users/AddUser')));
const Settings = Loadable(lazy(() => import('pages/setting/Setting')));
const Invoice = Loadable(lazy(() => import('pages/Invoice/Invoice')));

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
      path: 'users',
      element: <Users />
    },
    {
      path: 'invoice',
      element: <Invoice />
    },
    {
      path: 'settings',
      element: <Settings />
    }
  ]
};

export default ComponentsRoutes;
