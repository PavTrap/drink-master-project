import React from 'react';
import RecipePageTitle from 'components/RecipePageTitle/RecipePageTitle';
import AddToFavorite from 'components/AddToFavorite/AddToFavorite';
import RemoveFromFavorite from 'components/RemoveFromFavorite/RemoveFromFavorite';

const RecipePageHero = (glass, drinkThumb, drink) => {
  return (
    <div>
        <div>
            <p>{glass}</p>
            <RecipePageTitle></RecipePageTitle>
            <p>description</p>
            {/* Додати рендер за умовою: якщо ще не має в улюблених показувати кнопку AddToFavorite, а якщо ні - то RemoveFromFavorite */}
            <AddToFavorite></AddToFavorite>
            <RemoveFromFavorite></RemoveFromFavorite>
        </div>
        <img src={drinkThumb} alt={drink} />
    </div>
  )
};

export default RecipePageHero;