import { useSelector } from 'react-redux';

import { selectUser, selectIsRefreshing, selectIsLoggedIn } from '../redux/Auth/authSelectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const userData = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    userData,
  };
};

export default useAuth;