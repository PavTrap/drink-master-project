export const getAllCategories =  state => state.drinks.categoryList;
export const getAllIngredients = state=> state.drinks.ingredientList;
export const getIsLoading = state=>state.drinks.isLoading;
export const getDrinks = state=>state.drinks.entities;
export const getDrinksPage = state=> state.drinks.page;
export const getTotalPages = state=> state.drinks.totalPages;