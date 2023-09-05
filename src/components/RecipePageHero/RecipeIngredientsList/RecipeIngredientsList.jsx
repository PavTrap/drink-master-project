import css from './RecipeIngredientsList.module.css'

const RecipeIngredientsList = ({ children }) => {
  return (
    <section>
        <p className={css.title}>Ingredients</p>
        <ul className={css.ingredientsList}>{children}</ul>
    </section>
  )
};

export default RecipeIngredientsList;