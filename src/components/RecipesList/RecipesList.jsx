import { RecipesItem } from 'components/RecipesItem/RecipesItem';
import css from './RecipesList.module.css';
import { Suspense } from 'react';

export const RecipesList = ({ recipes, state, onDelete }) => {
  return (
    <ul className={css.recipeList}>
      <Suspense>
      {recipes.map(({ _id, drinkThumb, drink, instructions, ingredients }) => {
        const recipeIngredients = ingredients.map(ingredient => ingredient.title).join(', ');
        return (
          <RecipesItem
            key={_id}
            state={state}
            image={drinkThumb}
            title={drink}
            description={instructions}
            ingredients={recipeIngredients}
            id={_id}
            onDelete={onDelete}
          />
        );
      })}
      </Suspense>
    </ul>
  );
};
