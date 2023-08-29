import { useSelector } from 'react-redux';

import { selectUser, selectIsRefreshing, selectIsLoggedIn, selectUserId } from '../redux/Auth/authSelectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const userData = useSelector(selectUser);
  const userId = useSelector(selectUserId);

  return {
    isLoggedIn,
    isRefreshing,
    userData,
    userId
  };
};

export default useAuth;
