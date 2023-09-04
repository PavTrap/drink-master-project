import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCategories, fetchDrinks, fetchIngredients } from './DrinksOperation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.entities = payload;
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState: {
    page: 1,
    totalPages: 0,
    entities: [],
    isLoading: false,
    error: null,
    categoryList: [],
    ingredientList: [],
  },
  reducers: {
    changeDrinksPage(state, action) {
      state.page = action.payload;
    },},
  extraReducers: builder => {
    builder
      .addCase(fetchDrinks.fulfilled, (state, { payload }) => {
        state.totalPages= payload.count.totalPages;
        state.entities = payload.data;
        state.isLoading = false;
      })
      .addCase(fetchCategories.fulfilled, (state, { payload: categoryList }) => {
        state.categoryList = categoryList;
        state.isLoading = false;
      })
      .addCase(fetchIngredients.fulfilled, (state, { payload: ingredientList }) => {
        state.ingredientList = ingredientList;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchDrinks.pending,
          fetchCategories.pending,
          fetchIngredients.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchDrinks.rejected,
          fetchCategories.rejected,
          fetchIngredients.rejected
        ),
        handleRejected
      );
  },
});

export const drinksReducer = drinksSlice.reducer;
export const { changeDrinksPage } = drinksSlice.actions;
