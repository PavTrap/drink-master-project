import React from 'react';
import { Navigate} from 'react-router-dom';

import  useAuth  from '../../hooks/useAuth'


export const Privat = ({ component: Component }) => {
    const { isLoggedIn, isRefreshing } = useAuth();

    const shouldRedirect = !isLoggedIn && !isRefreshing;
  
    return shouldRedirect ?  <Navigate to="/" /> : Component;
  };


export default Privat;


