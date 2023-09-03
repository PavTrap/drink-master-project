import css from './RecipeIngredientsFields.module.css';
import { ingredientStyles, measureStyles } from './inputStyles';
import { MdOutlineClose } from 'react-icons/md';
import measure from 'data/measure';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import useMountTransition from 'hooks/useMountTransition';

const IngrediendsLittleForm = ({ clickHandlerMinus, isBtnDisabled, id, ingrediensName, allIngredientsList, getFromForm }) => {
  const [ingredientObject, setIngredientObject] = useState({});
  const [noMeasures, setNoMeasures] = useState(null);
  const [noIngredient, setNoIngredient] = useState(null);
  const maesuresErr = useMountTransition(noMeasures, 1000);
  const ingredientErr = useMountTransition(noIngredient, 1000);

  function handlerSelect({ descr, value }) {
    if (descr === 'ingredient') {
      const foundIngredient = allIngredientsList.filter(item => item.title === value);
      setIngredientObject(prev => ({ ...prev, ...foundIngredient[0] }));
    }
    if (descr === 'measure') {
      setIngredientObject(prev => ({ ...prev, measure: `${value}` }));
    }
  }

  useEffect(() => {
    if (Object.keys(ingredientObject).length !== 0) {
      !ingredientObject.measure ? setNoMeasures(true) : setNoMeasures(false);
      !ingredientObject._id ? setNoIngredient(true) : setNoIngredient(false);
      if (ingredientObject.measure && ingredientObject._id) {
        const block = { id, ingredient: ingredientObject };

        getFromForm(block);
      }
    }
  }, [getFromForm, id, ingredientObject]);

  return (
    <div className={css.addIngredients_box} key={id}>
      <div style={{ position: 'relative' }}>
        <Select
          isSearchable={true}
          components={{
            IndicatorSeparator: () => null,
          }}
          name="ingredient"
          onChange={handlerSelect}
          options={ingrediensName}
          placeholder="ingredient"
          defaultValue=""
          styles={ingredientStyles}
        />
        {noIngredient && <p className={`${css.errorIngredient} ${ingredientErr && css.active}`}>please select value</p>}
      </div>
      <div style={{ position: 'relative' }}>
        <Select
          isSearchable={true}
          name="measure"
          placeholder="ml"
          onChange={handlerSelect}
          options={measure}
          styles={measureStyles}
          defaultValue=""
          components={{
            IndicatorSeparator: () => null,
          }}
        />
        {noMeasures && <p className={`${css.errorMeasure} ${maesuresErr && css.active}`}>please select value</p>}
      </div>

      <button
        className={css.addIngredients_btnDelete}
        disabled={isBtnDisabled}
        onClick={() => clickHandlerMinus(id)}
        type="button"
        id="buttonDeleteIng"
      >
        <MdOutlineClose className={css.addIngredients_btnDeleteIcon} />
      </button>
    </div>
  );
};

export default IngrediendsLittleForm;
