import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://drink-master-back-end.onrender.com/';

// получается, что запрос одина
export const fetchDrinks = createAsyncThunk(
  'drinks/fetchDrinks',
  async (data, thunkAPI) => {
    try {
      const {
        word = '',
        category = 'cocktail',
        ingredient = '',
        page = 1,
      } = data;
      // по айдишнику категории
      let addUrl = '';

      if (ingredient !== '')
        addUrl = `api/search?ingredient=${ingredient}&page=${page}&limit=9`;
      else if (word !== '')
        addUrl = `api/search?q=${word}&page=${page}&limit=9`;
      else if (category !== '')
        addUrl = `api/search?category=${category}&page=${page}&limit=9`;

      const response = await axios.get(addUrl);
      console.log('response.data from DRINK ==>> ', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'drinks/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('api/recipes/category-list');
      console.log('response.data from CATEGORIES ==>> ', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchGlasses = createAsyncThunk(
  'drinks/fetchGlasses',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('api/glasses');
      console.log('response.data from GLASSES ==>> ', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
