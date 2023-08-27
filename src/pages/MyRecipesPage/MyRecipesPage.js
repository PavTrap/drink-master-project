import { useDispatch, useSelector } from 'react-redux';
import { getMyRecipes } from 'redux/MyRecipe/MyRecipeSelector';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { useLocation } from 'react-router-dom';
import { fetchMyRecipes } from 'redux/MyRecipe/MyRecipeOperation';
import { useEffect } from 'react';
import { Paginator } from 'components/Paginator/Paginator';

export default function MyRecipesPage() {
  const recipes = useSelector(getMyRecipes);
  const items = recipes.data;
  const pages = recipes.count;
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMyRecipes());
  }, [dispatch]);
  return (
    <>
      <MainTitle title="My recipes" />
      {items.length !== 0 && (
        <>
          <RecipesList recipes={items} state={{ from: location }} />
          <Paginator pages={pages}/>
        </>
      )}
    </>
  );
}
