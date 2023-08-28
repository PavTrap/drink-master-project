import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://drink-master-back-end.onrender.com/';

const setAuthHeader = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
const cleanAuthHeader = () =>
  (axios.defaults.headers.common.Authorization = '');


   // Register 
export const register = createAsyncThunk(
  '/users/register',
  async (user, { rejectWithValue }) => {
    console.log(user)
    try {
      const response = await axios.post('/users/register', user);
      setAuthHeader(response.data.token);
       console.log(response)
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

//  login 
export const login = createAsyncThunk(
  '/users/login',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);


//  logOut 
export const logOut = createAsyncThunk(
  '/users/logout',
  async (user, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout', user);
      cleanAuthHeader();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);


