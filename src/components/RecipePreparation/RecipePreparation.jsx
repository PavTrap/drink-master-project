import React from 'react';
import PropTypes from 'prop-types';
import { formatIngredientImg } from 'utils/utils';
import css from './RecipePreparation.module.css'

const RecipePreparation = ({ data }) => {
  const { drinkThumb, drink, instructions } = data;

  return (
    <section>
      <h3 className={css.title}>Recipe Preparation</h3>
      <div className={css.recipeContainer}>
        <img className={css.imgDrink} src={formatIngredientImg(drinkThumb)} alt={drink}/>
        <div>
          <p className={css.instructions}>{instructions}</p>
          <ul>
            <li>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    </section>
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
