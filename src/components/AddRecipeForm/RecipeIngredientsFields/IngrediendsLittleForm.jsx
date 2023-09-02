import css from './RecipeIngredientsFields.module.css';
import { ingredientStyles, measureStyles } from './inputStyles';
import { MdOutlineClose } from 'react-icons/md';
import measure from 'data/measure';
import Select from 'react-select';
import { useEffect, useState } from 'react';

const IngrediendsLittleForm = ({ clickHandlerMinus, isBtnDisabled, id, ingrediensName, allIngredientsList, getFromForm }) => {
  const [ingredientObject, setIngredientObject] = useState({});


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
    if (ingredientObject) {
      const block = { id, ingredient: ingredientObject };
      getFromForm(block);
    }
  }, [getFromForm, id, ingredientObject]);

  return (
    <div className={css.addIngredients_box} key={id}>
      <Select
        isSearchable={true}
        components={{
          IndicatorSeparator: () => null,
        }}
        name="ingredient"
        onChange={handlerSelect}
        options={ingrediensName}
        placeholder="ingredient"
        defaultValue=''
        styles={ingredientStyles}
      />

      <Select
        isSearchable={true}
        name="measure"
        onChange={handlerSelect}
        options={measure}
        styles={measureStyles}
        defaultValue=''
        components={{
          IndicatorSeparator: () => null,
        }}
      />

      <button
        className={css.addIngredients_btnDelete}
        disabled={isBtnDisabled}
        onClick={clickHandlerMinus}
        type="button"
        id="buttonDeleteIng"
      >
        <MdOutlineClose className={css.addIngredients_btnDeleteIcon} />
      </button>
    </div>
  );
};

export default IngrediendsLittleForm;
