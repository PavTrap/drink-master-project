import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const { token } = JSON.parse(localStorage.getItem('persist:auth'));
const normatizedToken = JSON.parse(token);


axios.defaults.baseURL = "https://drink-master-back-end.onrender.com/";
axios.defaults.headers.common.Authorization = `Bearer ${normatizedToken}`
export const fetchFavorites = createAsyncThunk(
  'favorites/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("api/favorite");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavorites = createAsyncThunk(
  'api/favorites/deleteFavorites',
  async (id, thunkAPI ) => {
    try {
       const response = await axios.delete(`api/favorite/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



export const addFavorites = createAsyncThunk(
  'favorite/addFavorites',
  async (favorite, thunkAPI) => {
    try {
      const response = await axios.post("api/favorite", favorite );
      return response.data;
     
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);