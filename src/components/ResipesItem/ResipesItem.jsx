import { Link } from "react-router-dom";
// import  from './ResipesItem.module.css'

export const ResipesItem = ({image, title, description, ingredients, id, path, state}) => {
  return (
    <li>
      <img src={image} alt={title}/>
      <p>{title}</p>
      <p title={ingredients}>Ingredients</p>
      <p>{description}</p>
      <Link to={path} state={state}>See recipe</Link>
      <button></button>
    </li>
  );
};
