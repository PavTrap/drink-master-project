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
    entities: [],
    isLoading: false,
    error: null,
    categoryList: [],
    ingredientList: [],
    filter: '',
    lastRequest: {},
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDrinks.fulfilled, (state, { payload }) => {
        console.log('payload', payload)
        state.entities = payload.data;
        state.isLoading = false;
        state.lastRequest = payload.url
        // state.lastRequest = {q: drinks}
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
export const { changeFilter } = drinksSlice.actions;
