import { useSelector } from 'react-redux';

import { getUser, getIsRefreshing, getIsLoggedIn } from '../redux/Auth/authSelectors';

const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const userData = useSelector(getUser);

  return {
    isLoggedIn,
    isRefreshing,
    userData,
  };
};

export default useAuth;