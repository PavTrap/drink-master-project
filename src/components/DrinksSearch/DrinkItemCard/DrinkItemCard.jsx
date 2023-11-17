import css from './DrinkItemCard.module.css'
import { Link } from 'react-router-dom';

const DrinkItemCard = ({ drink, drinkThumb, id, popup }) => {

  const title = getIngredientsList(popup);
  return (
    <li className={`${css.mainPageList_item} ${css.card}`} title={title}>
      <Link to={`/recipe/${id}`}>
        
        <img src={drinkThumb} alt="drink" height={400} className={css.image} loading='lazy'/>
        <div className={css.card_text_wrapper}>
          <p className={css.card_name}>{drink}</p>

          <p className={css.ingredients_text}>Ingredients </p>
        </div>
      </Link>
    </li>
  );
};
export default DrinkItemCard;

function getIngredientsList(ingredientList) {
  const array = ingredientList.map(item => (item?.title ? item.title : ''));
  return array.toString().split(',').join(', ');
}
