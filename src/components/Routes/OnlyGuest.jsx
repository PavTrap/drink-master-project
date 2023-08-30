import React from 'react';
import { Navigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

export const OnlyGuest = ({ component: Component }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to="/main" /> : Component;
};

export default OnlyGuest;
