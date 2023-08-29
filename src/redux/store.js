import { configureStore } from '@reduxjs/toolkit';
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
import { myRecipesReducer } from './MyRecipe/MyRecipeSlice';
import { favoritesReducer } from './FavoriteCocktails/FavoritesSlice';
import { drinksReducer } from './Drinks/DrinksSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token','user'],
};

const myRecipesPersistConfig = {
  key: 'myRecipes',
  storage,
};

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
};

const drinksPersistConfig = {
  key: "drinks",
  storage,
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    myRecipes: persistReducer(myRecipesPersistConfig, myRecipesReducer),
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
    drinks: persistReducer(drinksPersistConfig, drinksReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
