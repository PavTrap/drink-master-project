import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { Paginator } from 'components/Paginator/Paginator';
import { getFavoriteRecipes } from 'redux/FavoriteCocktails/FavoritesSelectors';
import { fetchFavorites } from 'redux/FavoriteCocktails/FavoritesOperation';

export default function FavoritePage() {
  const favorites = useSelector(getFavoriteRecipes);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);
  return (
    <>
      <MainTitle title="Favorites" />
      {favorites.length !== 0 && (
        <>
          <RecipesList recipes={favorites.data} state={{ from: location }} />
          <Paginator pages={favorites.count} />
        </>
      )}
    </>
  );
}
