import { useDispatch, useSelector } from 'react-redux';
import { getMyRecipes } from 'redux/MyRecipe/MyRecipeSelector';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { useLocation } from 'react-router-dom';
import { fetchMyRecipes } from 'redux/MyRecipe/MyRecipeOperation';
import { useEffect } from 'react';

export default function MyRecipesPage() {
  const recipes = useSelector(getMyRecipes);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMyRecipes());
  }, [dispatch]);
  return (
    <>
      <MainTitle title="My recipes" />
      {recipes.length !== 0 && (
        <RecipesList recipes={recipes} state={{ from: location }} />
      )}
    </>
  );
}
