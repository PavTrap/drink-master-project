import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://drink-master-back-end.onrender.com/';
axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTc0MTBjNGJhYmJiM2JlM2JjZDRiOSIsImlhdCI6MTY5MzA1MDU5OCwiZXhwIjoxNzI0NTg2NTk4fQ.EruneUfQbTsZkYOgBC4h3vLtqzylMjwDzVmkBiyAZG4`;

export const fetchMyRecipes = createAsyncThunk('myRecipes/fetch', async (page, thunkAPI) => {
  try {
    const response = await axios.get(`api/own?page=${page}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteMyRecipes = createAsyncThunk('myRecipes/deleteMyRecipes', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`api/own`, {data: {cocktailId: id}});
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addMyRecipes = createAsyncThunk('myRecipes/addMyRecipes', async (recipe, thunkAPI) => {
  try {
    const response = await axios.post('api/own/', recipe);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
