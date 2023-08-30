import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = 'https://drink-master-back-end.onrender.com/';
axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTc0MTBjNGJhYmJiM2JlM2JjZDRiOSIsImlhdCI6MTY5MzA1MDU5OCwiZXhwIjoxNzI0NTg2NTk4fQ.EruneUfQbTsZkYOgBC4h3vLtqzylMjwDzVmkBiyAZG4`;

// GET	/recipes    Path to get all recipes	All recipes

// GET	/recipes/:id	  Path to get recipe by id	Found recipe

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
  
  // POST	/favorite   	Path to adding to fav recipe by ID (reuired user ID)	Message
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

  // DELETE	/favorite   	Path to remove recipe from fav by ID (reuired user ID)	Message
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