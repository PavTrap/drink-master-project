import { formatIngredientImg } from 'utils/utils';
import css from './RecipeIngredientsItem.module.css';
import { useEffect, useState } from 'react';
import { readFromLocalStore } from 'helpers/localStorageApi';

const RecipeIngredientsItem = ({ data }) => {
  const { title, measure } = data;

  const [image, setImage] = useState(null);
  
  useEffect(() => {
    const data = readFromLocalStore('ingredients-list').filter(item => item.title === title);

    data[0]?.ingredientThumb ? setImage(data[0].ingredientThumb) : setImage(null);
  }, [title]);

  return (
    <li className={css.ingredientsItem} title={`${title}  ${measure ? measure : ''}`}>
      <div className={`${css.containerImg}`}>
        <img className={`${css.imgIngredient} animate`} src={formatIngredientImg(image)} alt={title} />
      </div>
      <div className={css.descriptIngr}>
        <p className={css.title}>{title}</p>
        <p className={css.measure}>{measure}</p>
      </div>
    </li>
  );
};

export default RecipeIngredientsItem;
