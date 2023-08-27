import React from 'react';

const RecipeIngredientsList = ({ ingredientThumb, title, measure}) => {
  return (
    <div>
        <p>Ingredients</p>
        <ul>
            <li>
                <img src={ingredientThumb} alt="ingredient" />
                <div>
                    <p>{title}</p>
                    <p>{measure}</p>
                </div>
            </li>
        </ul>
    </div>
  )
};

export default RecipeIngredientsList;