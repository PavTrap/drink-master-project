import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, refreshUser, updateUser, startLoadingMainPage, mainPageLoaded } from './authOperation';
import INITIAL_STATE from './InitialState';

const handleRejected = (state, { error, payload }) => {
  state.isRefreshing = false;
  state.error = payload ?? error.message;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      // REGISTER
      .addCase(register.fulfilled, (state, {payload}) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(register.pending, (state, _) => {
        state.isRefreshing = true;
        state.error = null;
      })

      // LOGIN
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = true;
      })
      .addCase(login.pending, (state, _) => {
        state.isRefreshing = false;
        state.error = null;
      })
      // Refresh  User
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state, _) => {
        state.isRefreshing = true;
        state.error = null;
      })

      // LogOut
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null, avatarURL: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logOut.pending, (state, _) => {
        state.isRefreshing = true;
        state.error = null;
      })
      //Updating User
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const newUserObject = {...state.user, ...payload};
        state.user = newUserObject;
        state.isRefreshing = false;
      })
      // Need load main page
      .addCase(startLoadingMainPage.fulfilled, (state, _) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(mainPageLoaded.fulfilled, (state, {payload})=>{
        console.log(payload)
       state.isRefreshing = false
        
      })

      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
