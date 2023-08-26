import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = "*";

export const fetchRecipe = createAsyncThunk(
    'recipe/fetch',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/recipe");
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const addToFavorite = createAsyncThunk(
    'recipe/addToFavorite',
    async (recipe, thunkAPI) => {
      try {
        const response = await axios.post("/recipe", recipe );
        return response.data;
       
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const deleteFromFavorite = createAsyncThunk(
    'recipe/deleteFromFavorite',
    async (id, thunkAPI ) => {
      try {
         const response = await axios.delete(`/recipe/${id}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );