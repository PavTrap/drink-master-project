import { Link } from 'react-router-dom';
import css from './MainPage.module.css';
import DrinkCard from './DrinkCard';
import { useDispatch } from 'react-redux';
import { changeDrinksPage } from 'redux/Drinks/DrinksSlice';
// import imgSrc from './img/plug-glass-400x400.png';

const CategoryList = ({  collection, title }) => {
  const dispatch=useDispatch()
  return (
    <li>
      <Link to={`/drinks/${title}`} onClick={()=>dispatch(changeDrinksPage(1))}>
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
