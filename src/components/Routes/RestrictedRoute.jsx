import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/Auth/authSelectors';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/',
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <> {!isLoggedIn ? Component : <Navigate to={redirectTo} />}</>;
};
