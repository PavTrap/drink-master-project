import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = "https://drink-master-back-end.onrender.com/";
axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTc0MTBjNGJhYmJiM2JlM2JjZDRiOSIsImlhdCI6MTY5MzA1MDU5OCwiZXhwIjoxNzI0NTg2NTk4fQ.EruneUfQbTsZkYOgBC4h3vLtqzylMjwDzVmkBiyAZG4`;

export const fetchFavorites = createAsyncThunk(
  'favorites/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("api/recipes");
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
       const response = await axios.delete(`api/favorites/${id}`);
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
      const response = await axios.post("api/favorites", favorite );
      return response.data;
     
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);