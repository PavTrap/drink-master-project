import { useDispatch, useSelector } from 'react-redux';
import { getMyRecipes, getPage } from 'redux/MyRecipe/MyRecipeSelector';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { useLocation } from 'react-router-dom';
import { fetchMyRecipes } from 'redux/MyRecipe/MyRecipeOperation';
import { useEffect } from 'react';
import { Paginator } from 'components/Paginator/Paginator';
import { changePage} from 'redux/MyRecipe/MyRecipeSlice';

export default function MyRecipesPage() {
  const dispatch = useDispatch();
  const recipes = useSelector(getMyRecipes);
  const page = useSelector(getPage);
  const location = useLocation();
  useEffect(() => {
    dispatch(fetchMyRecipes(page));
  }, [dispatch, page]);
  return (
    <>
      <MainTitle title="My recipes" />
      {recipes.length !== 0 && (
        <>
          <RecipesList recipes={recipes.data} state={{ from: location }} />
          <Paginator
            pages={recipes.count}
            onChangePage={changePage}
          />
        </>
      )}
    </>
  );
}