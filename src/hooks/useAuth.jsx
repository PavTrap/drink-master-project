import { useSelector } from 'react-redux';

import { selectUser, selectIsRefreshing, selectIsLoggedIn, selectUserId,selectError,selectToken } from '../redux/Auth/authSelectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const userData = useSelector(selectUser);
  const userId = useSelector(selectUserId);
  const BackEndError = useSelector(selectError)
  const ReduxToken = useSelector (selectToken)

  return {
    isLoggedIn,
    isRefreshing,
    userData,
    userId,
    BackEndError,
    ReduxToken
  };
};

export default useAuth;
