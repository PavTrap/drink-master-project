import React from 'react';
import { formatIngredientImg } from 'utils/utils';

const RecipeIngredientsItem = ({data}) => {
  const { ingredientThumb, title, measure} = data;

  return (
      <li>
          <img src={formatIngredientImg(ingredientThumb)} alt="ingredient" width='120px' />
          <div>
              <p>{title}</p>
              <p>{measure}</p>
          </div>
      </li>
    )
  };

export default RecipeIngredientsItem;
