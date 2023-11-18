import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import setAuthHeader from 'helpers/axiosHedder';


axios.defaults.baseURL = 'https://drink-master-back-end.onrender.com/';

export const fetchDrinks = createAsyncThunk(
  'drinks/fetchDrinks',
  async ({category = '', ingredient = '', q = '', page = 1}, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get(`api/search?q=${q}&category=${category}&ingredient=${ingredient}&page=${page}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCategories = createAsyncThunk('drinks/fetchCategories', async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const persistedToken = state.auth.token;
  try {
    setAuthHeader(persistedToken);
    const response = await axios.get('api/recipes/category-list');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchIngredients = createAsyncThunk('drinks/fetchIngredients', async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const persistedToken = state.auth.token;
  try {
    setAuthHeader(persistedToken);
    const response = await axios.get('api/ingredients/list');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
