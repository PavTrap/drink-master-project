import React from 'react';
import PropTypes from 'prop-types';

import RecipePageTitle from 'components/RecipePageTitle/RecipePageTitle';
import AddToFavorite from 'components/AddToFavorite/AddToFavorite';
import RemoveFromFavorite from 'components/RemoveFromFavorite/RemoveFromFavorite';
import { formatIngredientImg } from 'utils/utils';
import css from './RecipePageHero.module.css'

const RecipePageHero = ({ data, onAdd, onDelete }) => {
  const { glass, drinkThumb, drink, _id, favs } = data;

  return (
    <section className={css.sectionContainer}>
        <div className={css.heroContainer}>
            <p className={css.textGlass}>{glass}</p>
            <RecipePageTitle title={drink} />
            {/* звідки брати опис коктейля? написати логіку за відсутності опису */}
            <p className={css.textDescript}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum excepturi, in illo obcaecati possimus accusantium hic perferendis, provident, fugit explicabo quaerat? Culpa odio magnam maxime facere unde facilis praesentium. Distinctio.
            Consectetur esse molestias odio accusamus pariatur voluptatibus dicta quidem. Deserunt, enim quis consequuntur minus velit sit reiciendis suscipit quo ad voluptate ipsam culpa neque aspernatur autem porro doloremque quam cum?</p>
            {favs.length === 2 ? (
                <RemoveFromFavorite id={_id} onDelete={onDelete} />
              ) : (
                <AddToFavorite onAdd={onAdd} />
              )}
        </div>
        <img className={css.imgDrink} src={formatIngredientImg(drinkThumb)} alt={drink} />
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