import React from 'react';
import PropTypes from 'prop-types';

import RecipePageTitle from 'components/RecipePageTitle/RecipePageTitle';
import AddToFavorite from 'components/AddToFavorite/AddToFavorite';
import RemoveFromFavorite from 'components/RemoveFromFavorite/RemoveFromFavorite';
import { formatIngredientImg } from 'utils/utils';

const RecipePageHero = ({ data, onAdd, onDelete }) => {
  const { glass, drinkThumb, drink, _id } = data;

  return (
    <div>
        <div>
            <p>{glass}</p>
            <RecipePageTitle title={drink} />
            {/* звідки брати опис коктейля? написати логіку за відсутності опису */}
            <p>description</p>
            {/* Додати рендер за умовою: якщо ще не має в улюблених показувати кнопку AddToFavorite, а якщо ні - то RemoveFromFavorite */}
            <AddToFavorite id={_id} onAdd={onAdd}/>
            <RemoveFromFavorite id={_id} onDelete={onDelete}/>
        </div>
        <img src={formatIngredientImg(drinkThumb)} alt={drink} width='250px' />
    </div>
  )
};

RecipePageHero.propTypes = {
  data: PropTypes.shape({
    glass: PropTypes.string,
    drinkThumb: PropTypes.string,
    drink: PropTypes.string,
  }),
  // onAdd: PropTypes.func.isRequired,
  // onDelete: PropTypes.func.isRequired,
};

export default RecipePageHero;