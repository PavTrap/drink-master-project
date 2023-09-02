import React from 'react';
import css from './RecipeIngredientsList.module.css'

const RecipeIngredientsList = ({ children }) => {
  return (
    <section>
        <p>Ingredients</p>
        <ul className={css.ingredientsList}>{children}</ul>
    </section>
  )
};

export default RecipeIngredientsList;