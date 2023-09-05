import { useSelector } from 'react-redux';
import { getAllCategories, getAllIngredients, getDrinks, getIsLoading, getDrinksPage, getTotalPages } from 'redux/Drinks/DrinksSelectors';

const useDrinks = () => {
    const categoryList = useSelector(getAllCategories);
    const ingredientList = useSelector(getAllIngredients);
    const isLoading = useSelector(getIsLoading);
    const entities = useSelector(getDrinks);
    const currentPage = useSelector(getDrinksPage);
    const totalPages = useSelector(getTotalPages);

  return {
   categoryList,
   ingredientList,
   isLoading,
   entities,
   currentPage,
   totalPages,
  };
};

export default useDrinks;