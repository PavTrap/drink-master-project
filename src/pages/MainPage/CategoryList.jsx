import { Link } from 'react-router-dom';
import css from './MainPage.module.css';
import DrinkCard from './DrinkCard';
import { useRef } from 'react';
import useAnimationOnStart from 'hooks/useAnimationOnStart';


const CategoryList = ({ collection, title }) => {
  const ref = useRef(null);
  useAnimationOnStart(ref);
  return (
    <li ref={ref} data-item>
      <Link to={`/drinks`} state={{ category: title }}>
        <h2 className={css.category_title}>{title}</h2>
      </Link>
      <ul className={css.mainPageList}>
        {collection.length !== 0 &&
          collection.map(({ drink, drinkThumb, _id, ingredients }) => (
            <DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb} id={_id} popup={ingredients} />
          ))}
      </ul>
    </li>
  );
};

export default CategoryList;
