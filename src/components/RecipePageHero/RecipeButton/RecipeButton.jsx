import { useEffect, useState } from 'react';
import useAuth from 'hooks/useAuth';
import css from './RecipeButton.module.css';
import * as API from './btnApi';
import { toast } from 'react-toastify';

const RecipeButton = ({ id }) => {
  const { userId } = useAuth();
  const [isAddedeToFavorite, setIsAddedeToFavorite] = useState(false);
  const [pending, setPendings] = useState(false);

  //check favs field from BackEnd
  useEffect(()=>{
    (async ()=>{
      const isFavsChanged = await API.checkCurrent(id)
      const foundInFavs = isFavsChanged.some(item => item === userId);
      setIsAddedeToFavorite(foundInFavs);
    })()
  },[id, userId])

  //Toggle and update 
  async function handleFavsButtonAction(value) {
    setPendings(true);
    switch (value) {
      case 'add':
        const addRes = await API.addToFavs(id);
        if (addRes?.status === 201) {
          setIsAddedeToFavorite(true);
          setPendings(false);
          addRes?.data?.message && toast.info(addRes?.data?.message);
        }
        break;
      case 'delete':
        const delRes = await API.removeFromFavs(id);
        if (delRes?.status === 200) {
          setIsAddedeToFavorite(false);
          setPendings(false);
          delRes?.data?.message && toast.info(delRes?.data?.message);
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

 