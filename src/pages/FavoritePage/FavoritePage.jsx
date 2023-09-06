import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// components
import { MainTitle } from 'components/MainTitle/MainTitle';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { Paginator } from 'components/Paginator/Paginator';
import { NoRecipe } from 'components/NoRecipe/NoRecipe';
import Dots from 'components/Spinner/Dots';
// redux
import { getFavoriteRecipes, getFavPage, getIsLoading, getTotalPages } from 'redux/FavoriteCocktails/FavoritesSelectors';
import { deleteFavorites, fetchFavorites } from 'redux/FavoriteCocktails/FavoritesOperation';
import { changeFavPage } from 'redux/FavoriteCocktails/FavoritesSlice';
// styles
import css from './FavoritePage.module.css';

export default function FavoritePage() {
  const favorites = useSelector(getFavoriteRecipes);
  const page = useSelector(getFavPage);
  const totalPages = useSelector(getTotalPages);
  const isLoading = useSelector(getIsLoading);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites(page));
  }, [dispatch, page]);

  return (
    <section className={css.favoritesContainer}>
      <MainTitle title="Favorites" />
      {favorites?.length === 0 ? (
        <NoRecipe title="You haven't added any favorite cocktails yet" />
      ) : (
        <>
          <RecipesList recipes={favorites} state={{ from: location }} onDelete={deleteFavorites} />
          {totalPages > 1 && <Paginator page={page} totalPages={totalPages} onChangePage={changeFavPage} />}
        </>
      )}
      {isLoading && <Dots />}
    </section>
  );
}
