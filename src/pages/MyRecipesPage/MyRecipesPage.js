import { useDispatch, useSelector } from 'react-redux';
import { getMyRecipes, getPage } from 'redux/MyRecipe/MyRecipeSelector';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { useLocation } from 'react-router-dom';
import { fetchMyRecipes, deleteMyRecipes } from 'redux/MyRecipe/MyRecipeOperation';
import { useEffect } from 'react';
import { Paginator } from 'components/Paginator/Paginator';
import { changePage } from 'redux/MyRecipe/MyRecipeSlice';
import css from './MyRecipesPage.module.css';
import { NoRecipe } from 'components/NoRecipe/NoRecipe';

export default function MyRecipesPage() {
  const dispatch = useDispatch();
  const recipes = useSelector(getMyRecipes);
  const page = useSelector(getPage);
  const location = useLocation();
  useEffect(() => {
    dispatch(fetchMyRecipes(page));
  }, [dispatch, page]);
  return (
    <section className={css.myRecipeContainer}>
      <MainTitle title="My recipes" />
      {recipes?.data?.length > 0 ? (
        <>
          <RecipesList recipes={recipes.data} state={{ from: location }} onDelete={deleteMyRecipes} />
          {recipes.count.totalPages > 1 && <Paginator pages={recipes.count} onChangePage={changePage} />}
        </>
      ) : (
        <NoRecipe title="You haven't added any own cocktails yet" />
      )}
    </section>
  );
}
