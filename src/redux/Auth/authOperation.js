import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import setAuthHeader, { clearAuthHeader } from 'helpers/axiosHedder';

axios.defaults.baseURL = 'https://drink-master-back-end.onrender.com/';

// Register
export const register = createAsyncThunk('/auth/register', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post('/users/register', user);
    return response.data;
  } catch (e) {
    return rejectWithValue(e.response.data.message);
  }
});

//  login
export const login = createAsyncThunk('/auth/login', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post('/users/login', user);
    return response.data;
  } catch (e) {
    return rejectWithValue(e.response.data.message);
  }
});

//  refresh
export const refreshUser = createAsyncThunk('/auth/refresh', async (_,  { rejectWithValue, getState }) => {
  const state = getState();

  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    const response = await axios.get('/users/current');
    return response.data;
  } catch (e) {
    return rejectWithValue(e.response.data.message);
  }
});

//  logOut
export const logOut = createAsyncThunk('/auth/logout', async (_,  { rejectWithValue, getState }) => {
  const state = getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (e) {
    return rejectWithValue(e.response.data.message);
  }
});
