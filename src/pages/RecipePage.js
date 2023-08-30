import React from 'react';
import { useParams } from 'react-router-dom';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipeIngredientsList from 'components/RecipeIngredientsList/RecipeIngredientsList';
import RecipeIngredientsItem from 'components/RecipeIngredientsItem/RecipeIngredientsItem';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import cocktailsData from '../data/cocktails.json';
import { nanoid } from 'nanoid';
import axios from 'axios';
import setAuthHeader from 'helpers/axiosHedder';

export const getRecipe = async ( token, recipeId ) => {
  try {
    setAuthHeader(token);
    const { data } = await axios.get(`/api/recipes/${recipeId}`);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// 639b6de9ff77d221f190c50f

const RecipePage = () => {
  const { recipeId } = useParams();
  const selectedRecipe = cocktailsData.find(recipe => recipe._id.$oid === recipeId);
  // console.log(cocktailsData[0]._id.$oid)
  // console.log(cocktailsData[0])

  return (
    <div>
      <section>
        <RecipePageHero data={cocktailsData[0]} />
        <RecipeIngredientsList data={cocktailsData[0]}>
          {cocktailsData[0].ingredients.map(item => (
            <RecipeIngredientsItem data={item} key={nanoid()}/>
          ))}
        </RecipeIngredientsList>
        <RecipePreparation data={cocktailsData[0]} />    
      </section>
    </div>
  )
};

export default RecipePage;
