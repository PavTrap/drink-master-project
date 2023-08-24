import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = "*";


export const fetchMyRecipes = createAsyncThunk(
  'myRecipes/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/myRecipes");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



export const deleteMyRecipes = createAsyncThunk(
  'myRecipes/deleteMyRecipes',
  async (id, thunkAPI ) => {
    try {
       const response = await axios.delete(`/myRecipes/${id}`);
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
      const response = await axios.post("/MyRecipes", recipe );
      return response.data;
     
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);