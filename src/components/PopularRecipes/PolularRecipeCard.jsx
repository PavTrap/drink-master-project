import css from './PolularRecipe.module.css';

const PolularRecipeCard = ({ item, onClick }) => {
  const { drinkThumb: image, drink: title, instructions: descrption, _id } = item;

  return (
    <li className={css.listItem} onClick={() => onClick(_id)}>

      <div className={css.listItem_image_container}>
        <img src={image} alt={title} className={css.listItem_image} />
      </div>
      <div className={css.textContainer}>
        <p className={css.listItem_title}>{title}</p>
        <p className={css.listItem_descrption}>{descrption}</p>
      </div>
    </li>
  );
};

export default PolularRecipeCard;
