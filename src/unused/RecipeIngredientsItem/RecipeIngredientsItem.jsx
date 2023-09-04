import { formatIngredientImg } from 'utils/utils';
import css from './RecipeIngredientsItem.module.css'

const RecipeIngredientsItem = ({ data }) => {
  const { ingredientThumb, title, measure } = data;

  return (
    <li className={css.ingredientsItem}>
      <div className={css.containerImg}>
        <img className={css.imgIngredient} src={formatIngredientImg(ingredientThumb)} alt={title} />
      </div>
      <div className={css.descriptIngr}>
        <p className={css.title}>{title}</p>
        <p className={css.measure}>{measure}</p>
      </div>
    </li>
  );
};

export default RecipeIngredientsItem;
