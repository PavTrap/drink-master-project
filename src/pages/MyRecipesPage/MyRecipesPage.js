import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// components
import { RecipesList } from 'components/RecipesList/RecipesList';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import { Paginator } from 'components/Paginator/Paginator';
import { changePage } from 'redux/MyRecipe/MyRecipeSlice';
import { NoRecipe } from 'components/NoRecipe/NoRecipe';
import Dots from 'components/Spinner/Dots';
// redux
import { fetchMyRecipes, deleteMyRecipes } from 'redux/MyRecipe/MyRecipeOperation';
import { getIsLoading, getMyRecipes, getPage, getTotalPages } from 'redux/MyRecipe/MyRecipeSelector';
// styles
import css from './MyRecipesPage.module.css';

export default function MyRecipesPage() {
  const dispatch = useDispatch();
  const recipes = useSelector(getMyRecipes);
  const page = useSelector(getPage);
  const totalPages = useSelector(getTotalPages);
  const isLoading = useSelector(getIsLoading);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchMyRecipes());
  }, [dispatch]);

  return (
    <section className={css.myRecipeContainer}>
      <>
      <MainTitle title="My recipes" isLoading={isLoading}/>
      </>

      {recipes?.length > 0 ? (
        <>
          <RecipesList recipes={recipes} state={{ from: location }} onDelete={deleteMyRecipes} />
          {totalPages > 1 && <Paginator page={page} totalPages={totalPages} onChangePage={changePage} />}
        </>
      ) : (
        <NoRecipe title="You haven't added any own cocktails yet" />
      )}
      {/* {isLoading && <Dots />} */}
    </section>
  );
}
