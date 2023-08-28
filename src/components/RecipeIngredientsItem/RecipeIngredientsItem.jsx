import React from 'react';

const RecipeIngredientsItem = ({data}) => {
    const { ingredientThumb, title, measure} = data;

    return (
        <li>
            <img src={ingredientThumb} alt="ingredient" width='120px' />
            <div>
                <p>{title}</p>
                <p>{measure}</p>
            </div>
        </li>
      )
    };

export default RecipeIngredientsItem;
