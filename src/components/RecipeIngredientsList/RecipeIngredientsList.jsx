import React from 'react';

const RecipeIngredientsList = (ingredients) => {
  const { ingredientThumb, title, measure} = ingredients;

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