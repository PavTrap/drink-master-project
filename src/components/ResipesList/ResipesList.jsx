import { ResipesItem } from 'components/ResipesItem/ResipesItem';
// import  from './ResipesList.module.css'

export const ResipesList = ({ resipes, path, state }) => {
  return (
    <ul>
      {resipes.map(({ _id, drinkThumb, drink, instructions, ingredients }) => {
        const pathToRecipe = `${path}${_id}`;
        const recipeIngredients = ingredients
          .map(ingredient => ingredient.title)
          .join(', ');
        return (
          <ResipesItem
            key={_id}
            state={state}
            path={pathToRecipe}
            image={drinkThumb}
            title={drink}
            description={instructions}
            ingredients={recipeIngredients}
            id={_id}
          />
        );
      })}
    </ul>
  );
};
