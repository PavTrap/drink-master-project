import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getIsLoggedIn, getRefreshing } from 'redux/Auth/authSelectors';

export const PrivateRoute = ({ component, redirectTo }) => {
  // const isLoggedIn = useSelector(getIsLoggedIn);
  // const isRefreshing = useSelector(getRefreshing);
  // const shouldRedirect = !isLoggedIn && !isRefreshing;
  return <>{true ? <Navigate to={redirectTo} /> : component}</>;
};
