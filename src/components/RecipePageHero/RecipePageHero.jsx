import React from 'react';
import RecipePageTitle from 'components/RecipePageTitle/RecipePageTitle';
import AddToFavorite from 'components/AddToFavorite/AddToFavorite';
import RemoveFromFavorite from 'components/RemoveFromFavorite/RemoveFromFavorite';

const RecipePageHero = () => {
  return (
    <div>
        <div>
            <p>glass</p>
            <RecipePageTitle></RecipePageTitle>
            <p>description</p>
            {/* Додати рендер за умовою */}
            <AddToFavorite></AddToFavorite>
            <RemoveFromFavorite></RemoveFromFavorite>
        </div>
        <img src="" alt="" />
    </div>
  )
};

export default RecipePageHero;