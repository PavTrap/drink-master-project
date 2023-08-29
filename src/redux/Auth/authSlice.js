import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, refreshUser } from './authOperation';
import INITIAL_STATE from './InitialState';

const handlePending = state => {
  state.isRefreshing = true;
  state.error = null;
};

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

      // LOGIN
      .addCase(login.fulfilled, (state, { payload }) => {
        const { _id, name, avatarURL } = payload.user;
        state.user = { _id, name, avatarURL };
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      // Refresh  User
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      // LogOut
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null, avatarURL: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
