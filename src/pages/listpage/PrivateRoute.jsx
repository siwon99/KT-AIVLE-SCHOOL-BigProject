import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, isAdmin, ...rest }) => {
  return isAdmin ? <Route {...rest}>{children}</Route> : <Navigate to="/" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, 
  isAdmin: PropTypes.bool.isRequired,
};

export default PrivateRoute;
