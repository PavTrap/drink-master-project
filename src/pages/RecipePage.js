import React from 'react';
import RecipeIngredientsList from 'components/RecipeIngredientsList/RecipeIngredientsList';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';

const RecipePage = () => {
  return (
    <div>
        <RecipePageHero></RecipePageHero>
        <RecipeIngredientsList></RecipeIngredientsList>
        <RecipePreparation></RecipePreparation>
    </div>
  )
};

export default RecipePage;