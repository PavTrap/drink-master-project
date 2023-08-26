import { RecipesItem } from 'components/RecipesItem/RecipesItem';
// import  from './RecipesList.module.css'

export const RecipesList = ({ recipes, state }) => {
  return (
    <ul>
      {recipes.map(({ _id, drinkThumb, drink, instructions, ingredients }) => {
        const recipeIngredients = ingredients
          .map(ingredient => ingredient.title)
          .join(', ');
        return (
          <RecipesItem
            key={_id}
            state={state}
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
