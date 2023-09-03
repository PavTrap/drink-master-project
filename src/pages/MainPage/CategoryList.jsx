import { Link } from 'react-router-dom';
import css from './MainPage.module.css';
import DrinkCard from './DrinkCard';
// import imgSrc from './img/plug-glass-400x400.png';

const CategoryList = ({  collection, title }) => {
  return (
    <li>
      <Link to={`/drinks/${title}`}>
        <h2 className={css.category_title}>{title}</h2>
      </Link>
      <ul className={css.mainPageList}>
        {collection.length !== 0 &&
          collection.map(({ drink, drinkThumb, _id, ingredients}) => <DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb} id={_id} popup={ingredients}/>)}
      </ul>
    </li>
  );
};

export default CategoryList;
