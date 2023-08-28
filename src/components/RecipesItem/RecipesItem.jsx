import { Link } from 'react-router-dom';
// import  from './RecipesItem.module.css'

export const RecipesItem = ({
  image,
  title,
  description,
  ingredients,
  id,
  state,
}) => {
  const path = `/recipes/${id}`;
  return (
    <li>
      <img src={image} alt={title} />
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
