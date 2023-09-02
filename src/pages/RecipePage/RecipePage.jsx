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
import { useDispatch, useSelector } from 'react-redux';
import { getFavPage } from 'redux/FavoriteCocktails/FavoritesSelectors';
import { addFavorites, deleteFavorites, fetchFavorites } from 'redux/FavoriteCocktails/FavoritesOperation';

const RecipePage = () => {
  const [recipe, setRecipe] = useState(null);
  const { ReduxToken } = useAuth();
  const { recipeId } = useParams();
  const page = useSelector(getFavPage);
  const dispatch = useDispatch();

  useEffect(() => {
    const getRecipe = async (token, recipeId) => {
      try {
        setAuthHeader(token);
        const { data } = await axios.get(`/api/recipes/${recipeId}`);
        return data;
      } catch (e) {
        throw new Error(e.message);
      }
    };

    getRecipe(ReduxToken, recipeId)
      .then(res => {
        setRecipe(res);
      })
      .catch(e => console.log(e));
  }, [ReduxToken, recipeId]);

  // console.log(recipe); 

  useEffect(() => {
    dispatch(fetchFavorites(page));
  }, [dispatch, page]);

  return (
    <div>
      {recipe && (
        <div>
          <RecipePageHero data={recipe} onDelete={deleteFavorites} onAdd={addFavorites} />
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