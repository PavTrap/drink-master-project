import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { allCategoriesStr } from 'components/DrinksSearch/DrinksSearch';

axios.defaults.baseURL = 'https://drink-master-back-end.onrender.com/';


export const fetchDrinks = createAsyncThunk('drinks/fetchDrinks', async (data, thunkAPI) => {
  try {
    const { q = '', category = '', ingredient = '', page = 1, lastRequest } = data;

    let url = null;

    if (category === allCategoriesStr) {
      url = '/api/recipes/main-page';
      const response = await axios.get(url);
      console.log('response.data ==>> ', response.data)
      return { url, data: response.data }
    }


    

    if (lastRequest && page !== 1) {
      const urlParamList = Object.entries(lastRequest)[0]
      url = `api/search?${urlParamList[0]}=${urlParamList[1]}&page=${page}&limit=9`;
    } else {
      const params = new URLSearchParams();
      params.append('q', q);
      params.append('page', page); 
      params.append('category', category);
      params.append('ingredient', ingredient);
      url = `/api/search?${params.toString()}`;
    }

    console.log('url', url)
    
    const response = await axios.get(url);
    return { url, data: response.data };
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
