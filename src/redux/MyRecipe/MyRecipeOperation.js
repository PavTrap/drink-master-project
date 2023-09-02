import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import setAuthHeader from 'helpers/axiosHedder';

axios.defaults.baseURL = 'https://drink-master-back-end.onrender.com/';

export const fetchMyRecipes = createAsyncThunk('myRecipes/fetch', async (page = 1, { getState, rejectWithValue }) => {
  const state = getState();
  const persistedToken = state.auth.token;
  try {
    setAuthHeader(persistedToken);
    const response = await axios.get(`api/own?page=${page}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteMyRecipes = createAsyncThunk('myRecipes/deleteMyRecipes', async (id, { getState, rejectWithValue }) => {
  const state = getState();
  const persistedToken = state.auth.token;
  try {
    setAuthHeader(persistedToken);
    const response = await axios.delete(`api/own`, { data: { cocktailId: id } });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addMyRecipes = createAsyncThunk('myRecipes/addMyRecipes', async (recipe, { getState, rejectWithValue }) => {
  const state = getState();
  const persistedToken = state.auth.token;
  try {
    setAuthHeader(persistedToken);
    const response = await axios.post('api/own/', recipe);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
