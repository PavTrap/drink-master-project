import { useEffect } from 'react';
import css from './PolularRecipe.module.css'

const PolularRecipeCard = ({ item, onClick }) => {
  const { image, title, descrption } = item;



  return (
    <li className={css.listItem} onClick={onClick}>
      <img src={image} alt={title}  className={css.listItem_image}/>
      <div>
        <p className={css.listItem_title}>{title}</p>
        <p className={css.listItem_descrption}>{descrption}</p>
      </div>
    </li>
  );
};

export default PolularRecipeCard;
