import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import setAuthHeader from 'helpers/axiosHedder';

axios.defaults.baseURL = 'https://drink-master-back-end.onrender.com/';

export const fetchFavorites = createAsyncThunk('favorites/fetch', async (page=1, { getState, rejectWithValue }) => {
  const state = getState();
  const persistedToken = state.auth.token;
  try {
    setAuthHeader(persistedToken);
    const response = await axios.get(`api/favorite?page=${page}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteFavorites = createAsyncThunk('api/favorites/deleteFavorites', async (id, { getState, rejectWithValue }) => {
  const state = getState();
  const persistedToken = state.auth.token;
  try {
    setAuthHeader(persistedToken);
    const response = await axios.delete(`api/favorite`, { data: { cocktailId: id } });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addFavorites = createAsyncThunk('favorite/addFavorites', async (id, { getState, rejectWithValue }) => {
  const state = getState();
  const persistedToken = state.auth.token;
  try {
    setAuthHeader(persistedToken);
    const response = await axios.post('api/favorite', { data: { cocktailId: id } });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
