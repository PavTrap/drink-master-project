// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import authSelectors from 'redux/Auth/authSelectors';

// export const PrivateRoute = ({ component: Component, redirectTo = '/welcome' }) => {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   const isRefreshing = useSelector(authSelectors.getRefreshing);
//   const shouldRedirect = !isLoggedIn && !isRefreshing;
//   return <>{shouldRedirect ? <Navigate to={redirectTo} /> : Component}</>;
// };

import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import authSelectors from 'redux/Auth/authSelectors';

export const PrivateRoute = ({ component, redirectTo }) => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const isRefreshing = useSelector(authSelectors.getRefreshing);
  // const shouldRedirect = !isLoggedIn && !isRefreshing;
  return <>{true ? <Navigate to={redirectTo} /> : component}</>;
};