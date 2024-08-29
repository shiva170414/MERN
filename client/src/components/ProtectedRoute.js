import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { token } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={token ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
