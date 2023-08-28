import React from 'react';
import { Navigate } from 'react-router-dom';
import isAuth from './isAuth';

const Privat = ({ component: Component }) => (isAuth ? Component : <Navigate to="/welcome" />);

export default Privat;
