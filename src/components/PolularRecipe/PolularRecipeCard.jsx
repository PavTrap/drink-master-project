import css from './PolularRecipe.module.css'

const PolularRecipeCard = ({ item, ooClick }) => {
  const { image, title, descrption } = item;

  return (
    <li className={css.listItem}>
      <img src={image} alt={title}  className={css.listItem_image}/>
      <div>
        <p className={css.listItem_title}>{title}</p>
        <p className={css.listItem_descrption}>{descrption}</p>
      </div>
    </li>
  );
};

export default PolularRecipeCard;
