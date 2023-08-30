import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, refreshUser } from './authOperation';
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
      .addCase(register.fulfilled, (state, _) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(register.pending, (state, _) => {
        state.isRefreshing = false;
        state.error = null;
      })

      // LOGIN
      .addCase(login.fulfilled, (state, { payload }) => {
        const { _id, name, avatarURL } = payload.user;
        state.user = { _id, name, avatarURL };
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
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
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
