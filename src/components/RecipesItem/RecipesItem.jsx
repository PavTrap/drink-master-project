import { Link } from 'react-router-dom';
import css from './RecipesItem.module.css'

export const RecipesItem = ({
  image,
  title,
  description,
  ingredients,
  id,
  state,
}) => {
  const path = `/recipe/${id}`;
  return (
    <li className={css.recipeCard}>
      <img src={image} alt={title} className={css.recipeImage}/>
      <p>{title}</p>
      <p title={ingredients}>Ingredients</p>
      <p>{description}</p>
      <Link to={path} state={state}>
        See recipe
      </Link>
      <button></button>
    </li>
  );
};
