import React from 'react';

const RecipeIngredientsItem = ({data}) => {
    if (!data) {
        return <p>Loading...</p>;
      }
      
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
