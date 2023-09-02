import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://drink-master-back-end.onrender.com/';

// получается, что запрос одина
export const fetchDrinks = createAsyncThunk('drinks/fetchDrinks', async (data, thunkAPI) => {
  try {
    const { word = '', category = '', ingredient = '', page = 1 } = data;
    // let addUrl = '';
    
    const params = new URLSearchParams();
    params.append('q', word); // Добавляем параметр "q" со значением "search_query"
    params.append('page', page); // Добавляем параметр "page" со значением "1
    params.append('category', category); 
    params.append('ingredient', ingredient); 
    // console.log('params.toString', params)

    const url = `/api/search?${params.toString()}`;

    // if(lastRequest && page !== 1) addUrl = `api/search?${Object.entries(lastRequest)[0]}=${Object.entries(lastRequest)[1]}&page=${page}&limit=9`
   

    // if (ingredient !== '') addUrl = `api/search?ingredient=${ingredient}&page=${page}&limit=9`;
    // else if (word !== '') addUrl = `api/search?q=${word}&page=${page}&limit=9`;
    // else if (ingredient === '' && category !== '') addUrl = `api/search?category=${category}&page=${page}&limit=9`;
    // console.log('addUrl', addUrl);
    const response = await axios.get(url);
    return {url, data: response.data};
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

export const fetchIngredients = createAsyncThunk('drinks/fetchIngredients', async (_, thunkAPI) => {
  try {
    const response = await axios.get('api/ingredients/list');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
