
/* eslint-disable prettier/prettier */
import { lazy } from 'react';

// project-imports
import Loadable from 'components/Loadable';

// render - data display components
const Login = Loadable(lazy(() => import('../pages/registration/login')))
const Signup = Loadable(lazy(() => import('../pages/registration/registration')))

// ==============================|| COMPONENTS ROUTES ||============================== //

const MainRoutes = [
  {
    path: '/register',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  }
];

export default MainRoutes;
