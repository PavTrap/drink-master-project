export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectUserId = state => state.auth.user_id;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectError = state => state.auth.error;

export const selectToken = state => state.auth.token;

const authSelectors = {
    selectIsLoggedIn,
    selectUser,
    selectIsRefreshing,
    selectUserId,
    selectError,
    selectToken
}

export default authSelectors;