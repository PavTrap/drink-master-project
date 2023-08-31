import React from 'react';

const RecipePreparation = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }
  const { drinkThumb, drink, instructions } = data;

  return (
    <div>
      <h3>Recipe Preparation</h3>
      <div>
        <img src={drinkThumb} alt={drink}  width='250px'/>
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