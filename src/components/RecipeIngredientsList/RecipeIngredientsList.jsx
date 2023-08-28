import React from 'react';

const RecipeIngredientsList = ({ children }) => {
  return (
    <div>
        <p>Ingredients</p>
        <ul>{children}</ul>
    </div>
  )
};

export default RecipeIngredientsList;