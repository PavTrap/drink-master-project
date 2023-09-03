import css from './PolularRecipe.module.css';
import { Link } from 'react-router-dom';

const PolularRecipeCard = ({ item}) => {
  const { drinkThumb: image, drink: title, instructions: descrption, _id } = item;

  return (
    <li >
      <Link to={`/recipe/${_id}`}className={css.listItem}>
        <div className={css.listItem_image_container}>
          <img src={image} alt={title} className={css.listItem_image} />
        </div>
        <div className={css.textContainer}>
          <p className={css.listItem_title}>{title}</p>
          <p className={css.listItem_descrption}>{descrption}</p>
        </div>
      </Link>
    </li>
  );
};

export default PolularRecipeCard;
