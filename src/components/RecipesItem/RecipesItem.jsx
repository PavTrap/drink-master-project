import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import css from './RecipesItem.module.css';
import { useDispatch } from 'react-redux';

export const RecipesItem = ({ image, title, description, ingredients, id, state, onDelete }) => {
  const path = `/recipe/${id}`;
  const dispatch = useDispatch();
  return (
    <li className={css.recipeCard}>
      <div className={`${css.imageContainer} cardBlock skeleton `}>
        <img src={image} alt={title} title={title} className={`${css.recipeImage} animate`} loading='lazy'/>
      </div>
      <p className={css.recipeTitle}>{title}</p>
      <p title={ingredients} className={css.recipeIngredients}>
        Ingredients
      </p>
      <p className={css.recipeDescription}>{description}</p>
      <div className={css.recipeButtons}>
        <Link to={path} state={state} className={css.seeRecipeButton}>
          See recipe
        </Link>
        <button className={css.deleteButton} type="button" onClick={() => dispatch(onDelete(id))}>
          <FiTrash2 className={css.trashIcon} />
        </button>
      </div>
    </li>
  );
};
