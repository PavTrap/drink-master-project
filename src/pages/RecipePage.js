import React from 'react';
import RecipeIngredientsList from 'components/RecipeIngredientsList/RecipeIngredientsList';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import cocktailsData from '../data/cocktails.json';

const RecipePage = () => {
  const selectedRecipe = cocktailsData.find(recipe => recipe._id.$oid === '639b6de9ff77d221f190c50f');

  return (
    <div>
        <RecipePageHero data={selectedRecipe}></RecipePageHero>
        <RecipeIngredientsList data={selectedRecipe}></RecipeIngredientsList>
        <RecipePreparation data={selectedRecipe}></RecipePreparation>
    </div>
  )
};

export default RecipePage;