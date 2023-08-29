import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://drink-master-back-end.onrender.com/';

// получается, что запрос одина
export const fetchDrinks = createAsyncThunk('drinks/fetchDrinks', async (data, thunkAPI) => {
  try {
    const { word = '', category = 'cocktail', ingredient = '', page = 1 } = data;
    // по айдишнику категории
    let addUrl = '';
    // console.log('category in FETCHDRINKS', category);
    console.log('data', data);
    console.log('word', word)

    if (ingredient !== '') addUrl = `api/search?ingredient=${ingredient}&page=${page}&limit=9`;
    else if (word !== '') addUrl = `api/search?q=${word}&page=${page}&limit=9`;
    else if (ingredient === '' && category !== '') addUrl = `api/search?category=${category}&page=${page}&limit=9`;
    console.log('addUrl', addUrl);
    const response = await axios.get(addUrl);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCategories = createAsyncThunk('drinks/fetchCategories', async (_, thunkAPI) => {
  try {
    const response = await axios.get('api/recipes/category-list');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchIngredients = createAsyncThunk('drinks/fetchGlasses', async (_, thunkAPI) => {
  try {
    const response = await axios.get('api/ingredients/list');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
