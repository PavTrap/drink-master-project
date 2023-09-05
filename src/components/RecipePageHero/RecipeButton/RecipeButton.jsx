import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addFavorites, deleteFavorites } from '../../../redux/FavoriteCocktails/FavoritesOperation';
import { getFavoriteRecipes } from 'redux/FavoriteCocktails/FavoritesSelectors';
// import useAuth from 'hooks/useAuth';
// import { selectUserId } from 'redux/Auth/authSelectors';
import css from './RecipeButton.module.css';

const RecipeButton = ({ favorites }) => {
  //   const { userId } = useAuth();
  //   console.log(favorites);
  //   console.log(userId);

  const { recipeId } = useParams();
  const [isAddToFavorite, setIsAddToFavorite] = useState(false);
  const favoriteRecipe = useSelector(getFavoriteRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    const isFavorite = favoriteRecipe.data.some(recipe => recipe._id === recipeId);
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

// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addFavorites, deleteFavorites } from '../../redux/FavoriteCocktails/FavoritesOperation';
// import useAuth from 'hooks/useAuth';
// import css from './RecipeButton.module.css';
// import axios from 'axios';
// import setAuthHeader from 'helpers/axiosHedder';

// // Шаг 1 - как рисовать кнопку при загрузке страницы: есть ли фав = проверять респонз.includes( или some,  или файнд или фильтр) юзер айди
// // Шаг 2 - как понять что юзер на нее нажал, чтоб поменять:

// // Вар.1 - обработать ответ в редакс слайсе. Добавить поле в инигиас Стейт и его обрабатывать, а на компоненте отслеживать тру или нет , и менять кнопку
// // Вар.2. - прямой пост через аксиос респонз = аксиос...
// // Если респонз 200 менять, если 400 выводить тост с ошибкой..

// // Вар.3 написать переключатель в  стейт нажато ? да : нет
// // И если нажать и пошел диспатч, cтейт (превстейт => ! превстейт)

// const RecipeButton = ({ favorites }) => {
//   const { ReduxToken } = useAuth();
//   const { userId } = useAuth();
//   console.log(favorites);
//   console.log(userId);
//   const [isInFavorites, setIsInFavorites] = useState(false);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const isFavorite = favorites.includes(userId);
//     setIsInFavorites(isFavorite);
//   }, [favorites, userId]);

//   const handleAddToFavorites = async userId => {
//     try {
//       setAuthHeader(ReduxToken);
//       const response = await axios.post('api/favorite', { cocktailId: userId });
//       console.log(response.data);
//       return response.data;
//     } catch (e) {
//       return console.log(e);
//     }
//   };

//   const handleRemoveFromFavorites = async userId => {
//     try {
//       setAuthHeader(ReduxToken);
//       const response = await axios.delete(`api/favorite`, { data: { cocktailId: userId } } );
//       console.log(response.data);
//       return response.data;
//     } catch (e) {
//       return console.log(e);
//     }
//   };

//   return (
//     <>
//       {!isInFavorites ? (
//         <button className={css.button} type="button" onClick={() => dispatch(addFavorites(userId))}>
//           Add to favorite recipe
//         </button>
//       ) : (
//         <button className={css.button} type="button" onClick={() => dispatch(deleteFavorites(userId))}>
//           Remove from favorites
//         </button>
//       )}
//     </>
//   );
// };

// export default RecipeButton;
