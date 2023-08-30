import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { token } = JSON.parse(localStorage.getItem('persist:auth'));
const normatizedToken = JSON.parse(token);



axios.defaults.baseURL = 'https://drink-master-back-end.onrender.com/';
axios.defaults.headers.common.Authorization = `Bearer ${normatizedToken}`



// Register
export const register = createAsyncThunk('/users/register', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post('/users/register', user);
    return response.data;
  } catch (e) {
    return rejectWithValue(e.response.data.message);
  }
});

//  login
export const login = createAsyncThunk('/users/login', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post('/users/login', user);
    return response.data;
  } catch (e) {
    return rejectWithValue(e.response.data.message);
  }
});

//  refresh
export const refreshUser = createAsyncThunk('/users/current', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.get('/users/current');
    return response.data;
  } catch (e) {
    return rejectWithValue(e.response.data.message);
  }
});


//  logOut
export const logOut = createAsyncThunk('/users/logout', async (user, { rejectWithValue }) => {
  try {
    await axios.post('/users/logout');
  } catch (e) {
    return rejectWithValue(e.response.data.message);
  }
});
