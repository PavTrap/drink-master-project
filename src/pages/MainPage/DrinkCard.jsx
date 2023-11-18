import useAnimationOnStart from 'hooks/useAnimationOnStart';
import css from './MainPage.module.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const DrinkCard = ({ drink, drinkThumb, id, popup }) => {
  const ref = useRef(null);
  useAnimationOnStart(ref)
  
  const title = getIngredientsList(popup);
  return (
    <li className={`${css.mainPageList_item} ${css.card}  skeleton `} title={title} ref={ref} data-item>
      <Link to={`/recipe/${id}`}>
        <img src={drinkThumb} alt="drink" height={400} className={`${css.image} animate`} loading="lazy" />
        <div className={css.card_text_wrapper}>
          <p className={css.card_name}>{drink}</p>
          <p className={css.ingredients_text}>ingredients </p>
        </div>
      </Link>
    </li>
  );
};
export default DrinkCard;

function getIngredientsList(ingredientList) {
  const array = ingredientList.map(item => (item?.title ? item.title : ''));
  return array.toString().split(',').join(', ');
}
