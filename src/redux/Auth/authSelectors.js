export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectUserId = state => state.auth.userю_id;

export const selectIsRefreshing = state => state.auth.isRefreshing;


const authSelectors = {
    selectIsLoggedIn,
    selectUser,
    selectIsRefreshing,
    selectUserId
}

export default authSelectors;