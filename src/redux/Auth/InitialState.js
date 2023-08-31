const INITIAL_STATE = {
  user: { name: null, userId: null, avatarUrl: null, _id: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  isChangedUserBar: false
};

export default INITIAL_STATE;
