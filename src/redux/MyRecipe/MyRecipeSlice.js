import {  createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchMyRecipes, addMyRecipes, deleteMyRecipes } from "./MyRecipeOperation";

const handlePending = (state) => {
    state.isLoading = true;
}

const handleRejected = (state, {payload}) => {
    state.isLoading = false;
    state.recipes = payload;
}


const myRecipesSlice =  createSlice({
    name: 'myRecipes',
    initialState: {
        recipes: [],
        isLoading: false,
        error: null,
    },
    
    extraReducers: builder => { 
        builder
        // FETCH
        .addCase(fetchMyRecipes.fulfilled, (state, { payload: recipes }) => {
            state.recipes = recipes;
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
    .addMatcher(isAnyOf(
            fetchMyRecipes.pending,
            addMyRecipes.pending,
            deleteMyRecipes.pending,
    ), handlePending)
            
            
    // REJECTED 
    .addMatcher(isAnyOf(
            fetchMyRecipes.rejected,
            addMyRecipes.rejected,
            deleteMyRecipes.rejected,
    ), handleRejected)
    } 
})


export const myRecipesReducer = myRecipesSlice.reducer;