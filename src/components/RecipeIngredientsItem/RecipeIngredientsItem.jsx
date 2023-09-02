import React from 'react';
import PropTypes from 'prop-types';
import { formatIngredientImg } from 'utils/utils';

const RecipeIngredientsItem = ({ data }) => {
  const { ingredientThumb, title, measure } = data;

  return (
    <li>
      <img src={formatIngredientImg(ingredientThumb)} alt="ingredient" width='120px' />
      <div>
        <p>{title}</p>
        <p>{measure}</p>
      </div>
    </li>
  );
};

RecipeIngredientsItem.propTypes = {
  data: PropTypes.shape({
    ingredientThumb: PropTypes.string,
    title: PropTypes.string.isRequired,
    measure: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeIngredientsItem;
