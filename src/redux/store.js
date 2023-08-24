import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import { authReducer } from './Auth/authSlice';
import { myRecipesReducer } from "./MyRecipe/MyRecipeSlice";
import { favoritesReducer } from './FavoriteCocktails/FavoritesSlice';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


const rootReducer = combineReducers({
    myRecipes: myRecipesReducer,
    favorites: favoritesReducer,
  auth: persistReducer(authPersistConfig, authReducer),

});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    
    serializableCheck: {
        
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// export const persistor = persistStore(store);