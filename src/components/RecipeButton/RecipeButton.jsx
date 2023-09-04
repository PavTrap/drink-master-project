import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addFavorites, deleteFavorites } from '../../redux/FavoriteCocktails/FavoritesOperation';
import { getFavoriteRecipes } from 'redux/FavoriteCocktails/FavoritesSelectors';
// import useAuth from 'hooks/useAuth';
// import { selectUserId } from 'redux/Auth/authSelectors';
import css from './RecipeButton.module.css';

const RecipeButton = ({ favorites }) => {
    // console.log(favorites);
    // const { userId } = useAuth();
    // console.log(userId);
    // const userid = useSelector(selectUserId);
    // console.log(userid);


    const { recipeId } = useParams();
    const [isAddToFavorite, setIsAddToFavorite] = useState(false);
    const favoriteRecipe = useSelector(getFavoriteRecipes);
    const dispatch = useDispatch();

    useEffect(() => {
        const isFavorite = favoriteRecipe.data.some((recipe) => recipe._id === recipeId);
        setIsAddToFavorite(isFavorite);

        // console.log('Favorite status updated:', isFavorite);

      }, [favoriteRecipe, recipeId]);

  return (
    <>
      {!isAddToFavorite ? (
        <button className={css.button} type="button" onClick={() => dispatch(addFavorites(recipeId))}>
          Add to favorite recipe
        </button>
      ) : (
        <button className={css.button} type="button" onClick={() => dispatch(deleteFavorites(recipeId))}>
          Remove from favorites
        </button>
      )}
    </>
  );
};

export default RecipeButton;
