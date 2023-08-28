import React from 'react';
import { Navigate} from 'react-router-dom';
import isAuth from './isAuth';

const OnlyGuest = ({  component: Component }) => (!isAuth ? Component : <Navigate to="/main" />);

export default OnlyGuest;
