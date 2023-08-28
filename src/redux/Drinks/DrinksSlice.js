import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCategories, fetchDrinks, fetchGlasses } from './DrinksOperation';

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
    glasses: [],
    filter: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDrinks.fulfilled, (state, { payload: drinks }) => {
        state.entities = drinks;
        state.isLoading = false;
      })
      .addCase(fetchCategories.fulfilled, (state, { payload: categoryList }) => {
        state.categoryList = categoryList;
        state.isLoading = false;
      })
      .addCase(fetchGlasses.fulfilled, (state, { payload: glasses }) => {
        state.glasses = glasses;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchDrinks.pending,
          fetchCategories.pending,
          fetchGlasses.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchDrinks.rejected,
          fetchCategories.rejected,
          fetchGlasses.rejected
        ),
        handleRejected
      );
  },
});

export const drinksReducer = drinksSlice.reducer;
export const { changeFilter } = drinksSlice.actions;
