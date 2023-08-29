export const getIsLoggedIn = state => state.auth.isLogin;

export const getUser = state => state.auth.user;

export const getIsRefreshing = state => state.auth.isRefreshing;


const authSelectors = {
    getIsLoggedIn,
    getUser,
    getIsRefreshing
}

export default authSelectors;