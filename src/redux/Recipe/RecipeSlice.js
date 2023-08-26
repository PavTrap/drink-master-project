import { createSlice } from "@reduxjs/toolkit";
import { addToFavorite, deleteFromFavorite, fetchRecipe } from "./RecipeOperation";

const initialState = {
    recipes: [],
    favorites: [],
    isLoading: false,
    error: null,
};

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    extraReducers: builder =>
    builder
      .addCase(fetchRecipe.pending, handlePending)
      .addCase(fetchRecipe.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.recipes = payload;
      })
      .addCase(fetchRecipe.rejected, handleRejected)

      .addCase(addToFavorite.pending, handlePending)
      .addCase(addToFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.favorites.push(payload);
      })
      .addCase(addToFavorite.rejected, handleRejected)

      .addCase(deleteFromFavorite.pending, handlePending)
      .addCase(deleteFromFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.favorites = state.favorites.filter(favorite => favorite.id !== payload.id);
      })
      .addCase(deleteFromFavorite.rejected, handleRejected),
});

export const recipeReducer = recipeSlice.reducer;