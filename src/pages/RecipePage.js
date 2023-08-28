import React from 'react';
import { useParams } from 'react-router-dom';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipeIngredientsList from 'components/RecipeIngredientsList/RecipeIngredientsList';
import RecipeIngredientsItem from 'components/RecipeIngredientsItem/RecipeIngredientsItem';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import cocktailsData from '../data/cocktails.json';
import { nanoid } from 'nanoid';

const RecipePage = () => {
  const { recipeId } = useParams();
  const selectedRecipe = cocktailsData.find(recipe => recipe._id.$oid === recipeId);
  console.log(cocktailsData[4]._id.$oid)
  console.log(cocktailsData[4])

  return (
    <div>
      <section>
        <RecipePageHero data={cocktailsData[4]} />
        <RecipeIngredientsList data={cocktailsData[4]}>
          {cocktailsData[4].ingredients.map(item => (
            <RecipeIngredientsItem data={item} key={nanoid()}/>
          ))}
        </RecipeIngredientsList>
        <RecipePreparation data={cocktailsData[4]} />    
      </section>
    </div>
  )
};

export default RecipePage;
