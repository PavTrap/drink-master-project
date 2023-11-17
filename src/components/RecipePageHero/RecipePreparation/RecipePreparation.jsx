import React from 'react';
import PropTypes from 'prop-types';
import { formatIngredientImg } from 'utils/utils';
import css from './RecipePreparation.module.css';

const RecipePreparation = ({ data }) => {
  const { drinkThumb, drink, instructions } = data;
  const sentences = instructions.split(/(?<=[.!?])\s+/).filter(Boolean);

  return (
    <section>
      <h3 className={css.title}>Recipe Preparation</h3>
      <div className={css.recipeContainer}>
        <img className={`${css.imgDrink} animate`} src={formatIngredientImg(drinkThumb)} alt={drink} title={drink} loading="lazy" />

        <div>
          {/* Рендерити опис  або щось інше */}
          <p className={css.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis cum aliquam dignissimos nisi quaerat numquam, odio
            temporibus ab rerum voluptatibus doloribus! Voluptatem sit architecto magni corporis nisi expedita veritatis perspiciatis.
          </p>
          <ul className={css.instructionList}>
            {sentences.map((sentence, index) => (
              <li className={css.instructionItem} key={index}>
                <p className={css.instructionText}>• {sentence.trim()}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

RecipePreparation.propTypes = {
  data: PropTypes.shape({
    drinkThumb: PropTypes.string,
    drink: PropTypes.string.isRequired,
    instructions: PropTypes.string,
  }),
};

export default RecipePreparation;
