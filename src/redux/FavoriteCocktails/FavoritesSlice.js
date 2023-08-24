import {  createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchFavorites, addFavorites, deleteFavorites } from "./FavoritesOperation";

const handlePending = (state) => {
    state.isLoading = true;

}

const handleRejected = (state, {payload}) => {
    state.isLoading = false;
    state.entities = payload;
}


const favoritesSlice =  createSlice({
    name: 'favorites',
    initialState: {
        entities: [],
        isLoading: false,
        error: null,
    },
    
    extraReducers: builder => { 
        builder
        // FETCH
        .addCase(fetchFavorites.fulfilled, (state, { payload: favorites }) => {
            state.entities = favorites;
            state.isLoading = false;
        })
            
 
        // ADD
      .addCase(addFavorites.fulfilled, (state, action) => {
        state.entities.push(action.payload);
        state.isLoading = false;
      })


        // DELETE
      .addCase(deleteFavorites.fulfilled, (state, action) => {
          const index = state.entities.findIndex(
        contact => contact.id === action.payload.id
          );
             state.entities.splice(index, 1);
          state.isLoading = false; 
          
      })
    
            
    // PENDING
    .addMatcher(isAnyOf(
            fetchFavorites.pending,
            addFavorites.pending,
            deleteFavorites.pending,
    ), handlePending)
            
            
    // REJECTED 
    .addMatcher(isAnyOf(
            fetchFavorites.rejected,
            addFavorites.rejected,
            deleteFavorites.rejected,
    ), handleRejected)
    } 
})


export const favoritesReducer = favoritesSlice.reducer;