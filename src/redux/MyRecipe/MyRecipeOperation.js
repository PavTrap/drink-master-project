import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://drink-master-back-end.onrender.com/';
axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWJlYjcwNzZlZWQ0NDBkZTBhNzY5ZSIsImlhdCI6MTY5MzE4MjkwNiwiZXhwIjoxNzI0NzE4OTA2fQ.aKHMUKz4HfM81w-3X4iIJbmaKXpJXR69mEId8E2zVs8`;

export const fetchMyRecipes = createAsyncThunk(
  'myRecipes/fetch',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`api/recipes?page=${page}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteMyRecipes = createAsyncThunk(
  'myRecipes/deleteMyRecipes',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`api/own/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addMyRecipes = createAsyncThunk(
  'myRecipes/addMyRecipes',
  async (recipe, thunkAPI) => {
    try {
      const response = await axios.post('api/own', recipe);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
