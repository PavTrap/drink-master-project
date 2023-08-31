import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import setAuthHeader from 'helpers/axiosHedder';
import useAuth from 'hooks/useAuth';
import { nanoid } from '@reduxjs/toolkit';

import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipeIngredientsList from 'components/RecipeIngredientsList/RecipeIngredientsList';
import RecipeIngredientsItem from 'components/RecipeIngredientsItem/RecipeIngredientsItem';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';

const RecipePage = () => {
  const [recipe, setRecipe] = useState(null);
  const { ReduxToken } = useAuth();
  const { recipeId } = useParams();

  useEffect(() => {
    const getRecipe = async (token, recipeId) => {
      try {
        setAuthHeader(token);
        const { data } = await axios.get(`/api/recipes/${recipeId}`);
        return data;
      } catch (error) {
        throw new Error(error.message);
      }
    };

    getRecipe(ReduxToken, recipeId)
      .then(res => {
        setRecipe(res);
      })
      .catch(err => console.log(err));
  }, [ReduxToken, recipeId]);
  
  console.log(recipe);

  return (
    <div>
      {recipe && ( // Додайте перевірку, чи recipe не є null, перед використанням
        <div>
          RecipePage
          <RecipePageHero data={recipe} />
          <RecipeIngredientsList data={recipe}>
            {recipe.ingredients.map(item => (
              <RecipeIngredientsItem data={item} key={nanoid()} />
            ))}
          </RecipeIngredientsList>
          <RecipePreparation data={recipe} />    
        </div>
      )}
    </div>
  );
};

export default RecipePage;
