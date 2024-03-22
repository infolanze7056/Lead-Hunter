// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/register" replace />
  );
};

export default PrivateRoute;
