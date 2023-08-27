import React from 'react';

const RecipePreparation = (drinkThumb, drink, instructions) => {
  return (
    <div>
      <h3>Recipe Preparation</h3>
      <div>
        <img src={drinkThumb} alt={drink} />
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
  )
};

export default RecipePreparation;