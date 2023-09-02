import React from 'react';
import PropTypes from 'prop-types';
import { formatIngredientImg } from 'utils/utils';

const RecipePreparation = ({ data }) => {
  const { drinkThumb, drink, instructions } = data;

  return (
    <div>
      <h3>Recipe Preparation</h3>
      <div>
        <img src={formatIngredientImg(drinkThumb)} alt={drink}  width='250px'/>
        <div>
          <p>{instructions}</p>
          <ul>
            <li>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

RecipePreparation.propTypes = {
  data: PropTypes.shape({
    drinkThumb: PropTypes.string,
    drink: PropTypes.string.isRequired,
    instructions: PropTypes.string,
  }),
};

export default RecipePreparation;
