import { useEffect, useState } from 'react';
import useAuth from 'hooks/useAuth';
import css from './RecipeButton.module.css';
import * as API from './btnApi';
import { toast } from 'react-toastify';
import { changeFavPage } from 'redux/FavoriteCocktails/FavoritesSlice';
import { useDispatch } from 'react-redux';

const RecipeButton = ({ id }) => {
  const { userId } = useAuth();
  const [isAddedeToFavorite, setIsAddedeToFavorite] = useState(false);
  const [pending, setPendings] = useState(false);
  const dispatch = useDispatch();
  //check favs field from BackEnd
  useEffect(() => {
    (async () => {
      const isFavsChanged = await API.checkCurrent(id);
      const foundInFavs = isFavsChanged.some(item => item === userId);
      setIsAddedeToFavorite(foundInFavs);
    })();
  }, [id, userId]);

  //Toggle and update
  async function handleFavsButtonAction(value) {
    setPendings(true);
    switch (value) {
      case 'add':
        const addRes = await API.addToFavs(id);
        if (addRes?.status === 201) {
          setIsAddedeToFavorite(true);
          setPendings(false);
          addRes?.data?.message && toast.info('Added to Favorites');
        }
        break;
      case 'delete':
        const delRes = await API.removeFromFavs(id);
        if (delRes?.status === 200) {
          setIsAddedeToFavorite(false);
          setPendings(false);
          delRes?.data?.message && toast.info('Removed from Favorites');
          dispatch(changeFavPage(1));
        }
        break;
      default:
        setPendings(false);
    }
  }

  return (
    <>
      {isAddedeToFavorite ? (
        <button className={css.button} type="button" onClick={() => handleFavsButtonAction('delete')} disabled={pending}>
          Remove from favorites
        </button>
      ) : (
        <button className={css.button} type="button" onClick={() => handleFavsButtonAction('add')} disabled={pending}>
          Add to favorite recipe
        </button>
      )}
    </>
  );
};

export default RecipeButton;
