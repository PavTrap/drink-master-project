import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = "*";


export const fetchFavorites = createAsyncThunk(
  'favorites/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/favorites");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



export const deleteFavorites = createAsyncThunk(
  'favorites/deleteFavorites',
  async (id, thunkAPI ) => {
    try {
       const response = await axios.delete(`/favorites/${id}`);
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
      const response = await axios.post("/favorites", favorite );
      return response.data;
     
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);