import { createBrowserRouter, Navigate } from 'react-router-dom';

// project imports
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';

const isLoggedIn = !!localStorage.getItem('token'); // your auth logic

const router = createBrowserRouter(
  [
    // redirect / to login or dashboard based on auth
    {
      path: '/',
      element: isLoggedIn ? <Navigate to="/dashboard/default" /> : <Navigate to="/login" />
    },
    LoginRoutes,
    MainRoutes
    
  ],
  { basename: import.meta.env.VITE_APP_BASE_NAME }
);

export default router;
