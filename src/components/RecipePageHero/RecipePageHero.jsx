import React from 'react';
import PropTypes from 'prop-types';

import RecipePageTitle from 'components/RecipePageTitle/RecipePageTitle';
import AddToFavorite from 'components/AddToFavorite/AddToFavorite';
import RemoveFromFavorite from 'components/RemoveFromFavorite/RemoveFromFavorite';
import { formatIngredientImg } from 'utils/utils';
import css from './RecipePageHero.module.css'

const RecipePageHero = ({ data, onAdd, onDelete }) => {
  const { glass, drinkThumb, drink, _id } = data;

  return (
    <section className={css.sectionContainer}>
        <div>
            <p className={css.textGlass}>{glass}</p>
            <RecipePageTitle title={drink} />
            {/* звідки брати опис коктейля? написати логіку за відсутності опису */}
            <p className={css.textDescript}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sequi, facilis eum ea sit laboriosam ut consequatur optio dolore minima pariatur atque laudantium reprehenderit a vel sunt hic distinctio asperiores!</p>
            {/* Додати рендер за умовою: якщо ще не має в улюблених показувати кнопку AddToFavorite, а якщо ні - то RemoveFromFavorite */}
            <AddToFavorite onAdd={onAdd}/>
            <RemoveFromFavorite id={_id} onDelete={onDelete}/>
            {/* {isFavorite ? (
                <RemoveFromFavorite id={_id} onDelete={onDelete} />
              ) : (
                <AddToFavorite id={_id} onAdd={onAdd} />
              )} */}
        </div>
        <img className={css.imgDrink} src={formatIngredientImg(drinkThumb)} alt={drink} width='250px' />
    </section>
  )
};

RecipePageHero.propTypes = {
  data: PropTypes.shape({
    glass: PropTypes.string,
    drinkThumb: PropTypes.string,
    drink: PropTypes.string,
  }),
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default RecipePageHero;