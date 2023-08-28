import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchMyRecipes,
  addMyRecipes,
  deleteMyRecipes,
} from './MyRecipeOperation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const myRecipesSlice = createSlice({
  name: 'myRecipes',
  initialState: {
    page: 1,
    recipes: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    changePage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // FETCH
      .addCase(fetchMyRecipes.fulfilled, (state, { payload }) => {
        state.recipes = payload;
        state.error = null;
        state.isLoading = false;
      })

      // ADD
      .addCase(addMyRecipes.fulfilled, (state, action) => {
        state.recipes.push(action.payload);
        state.isLoading = false;
      })

      // DELETE
      .addCase(deleteMyRecipes.fulfilled, (state, action) => {
        const index = state.recipes.findIndex(
          recipe => recipe.id === action.payload.id
        );

        state.recipes.splice(index, 1);
        state.isLoading = false;
      })

      // PENDING
      .addMatcher(
        isAnyOf(
          fetchMyRecipes.pending,
          addMyRecipes.pending,
          deleteMyRecipes.pending
        ),
        handlePending
      )

      // REJECTED
      .addMatcher(
        isAnyOf(
          fetchMyRecipes.rejected,
          addMyRecipes.rejected,
          deleteMyRecipes.rejected
        ),
        handleRejected
      );
  },
});

export const { changePage, incrementPage, decrementPage } =
  myRecipesSlice.actions;
export const myRecipesReducer = myRecipesSlice.reducer;
