import React from 'react';
import RecipePageTitle from 'components/RecipePageTitle/RecipePageTitle';
import AddToFavorite from 'components/AddToFavorite/AddToFavorite';
import RemoveFromFavorite from 'components/RemoveFromFavorite/RemoveFromFavorite';

const RecipePageHero = ({ data }) => {
  const { glass, drinkThumb, drink } = data;
  return (
    <div>
        <div>
            <p>{glass}</p>
            <RecipePageTitle drink={drink}></RecipePageTitle>
            <p>description</p>
            {/* Додати рендер за умовою: якщо ще не має в улюблених показувати кнопку AddToFavorite, а якщо ні - то RemoveFromFavorite */}
            <AddToFavorite></AddToFavorite>
            <RemoveFromFavorite></RemoveFromFavorite>
        </div>
        <img src={drinkThumb} alt={drink} width='250px' />
    </div>
  )
};

export default RecipePageHero;