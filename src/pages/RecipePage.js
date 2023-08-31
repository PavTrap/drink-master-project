import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipeIngredientsList from 'components/RecipeIngredientsList/RecipeIngredientsList';
import RecipeIngredientsItem from 'components/RecipeIngredientsItem/RecipeIngredientsItem';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import axios from 'axios';
import setAuthHeader from 'helpers/axiosHedder';
import useAuth from 'hooks/useAuth';
import { nanoid } from '@reduxjs/toolkit';

export const getRecipe = async ( token, recipeId ) => {
  try {
    setAuthHeader(token);
    // const { data } = await axios.get(`/api/recipes/${recipeId}`);
    const { data } = await axios.get(`/api/recipes/639b6de9ff77d221f190c50f`);

    // console.log(data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// https://drink-master-back-end.onrender.com/api/recipes/$%7BrecipeId%7D

// 639b6de9ff77d221f190c50f

const RecipePage = () => {
  // const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);
  const { ReduxToken } = useAuth();
  // console.log(ReduxToken);

  useEffect(() => {
    getRecipe(ReduxToken)
      .then(res => {
        setRecipe(res);
      })
      .catch(err => console.log(err));
  }, [ReduxToken]);
  
  console.log(recipe);
  console.log(recipe.ingredients);  


  return (
    <div>
      RecipePage
      <RecipePageHero data={recipe} />
      {/* <RecipeIngredientsList data={recipe}>
        {recipe.ingredients.map(item => (
          <RecipeIngredientsItem data={item} key={nanoid()}/>
        ))}
      </RecipeIngredientsList> */}
      <RecipePreparation data={recipe} />    
    </div>
  )
};

export default RecipePage;
