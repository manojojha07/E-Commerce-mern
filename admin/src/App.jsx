import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AddItems from './pages/AddItems';
import ListItems from './pages/ListItems';
import Orders from './pages/Orders';
import Login from './components/Login';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ✅ Backend URL and currency
export const backendURL = import.meta.env.VITE_BACK_URL;
export const curruncy = '₹';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthenticated = Boolean(token);

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('token', token);

      // If on login page and already logged in, redirect to /add
      if (location.pathname === '/login') {
        navigate('/add');
      }
    } else {
      localStorage.removeItem('token');

      // Prevent redirect loop
      if (location.pathname !== '/login') {
        navigate('/login');
      }
    }
  }, [token, navigate, location.pathname, isAuthenticated]);

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      
      {/* Navbar only if logged in */}
      {isAuthenticated && <Navbar setToken={setToken} />}

      <div className='flex w-full'>
        {/* Sidebar only if logged in */}
        {isAuthenticated && <Sidebar />}

        <div className='w-full ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
          <Routes>
            {/* Public Route */}
            <Route
              path='/login'
              element={
                !isAuthenticated ? (
                  <Login setToken={setToken} />
                ) : (
                  <Navigate to='/add' replace />
                )
              }
            />

            {/* Protected Routes */}
            <Route
              path='/add'
              element={
                isAuthenticated ? (
                  <AddItems token={token} />
                ) : (
                  <Navigate to='/login' replace />
                )
              }
            />

            <Route
              path='/list'
              element={
                isAuthenticated ? (
                  <ListItems token={token} />
                ) : (
                  <Navigate to='/login' replace />
                )
              }
            />

            <Route
              path='/orders'
              element={
                isAuthenticated ? (
                  <Orders token={token} />
                ) : (
                  <Navigate to='/login' replace />
                )
              }
            />

            {/* Catch-all route */}
            <Route
              path='*'
              element={
                isAuthenticated ? (
                  <Navigate to='/add' replace />
                ) : (
                  <Navigate to='/login' replace />
                )
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
