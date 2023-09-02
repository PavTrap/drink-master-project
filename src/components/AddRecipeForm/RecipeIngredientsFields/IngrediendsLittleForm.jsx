import css from './RecipeIngredientsFields.module.css';
import { ingredientStyles, measureStyles } from './inputStyles';
import { MdOutlineClose } from 'react-icons/md';
import measure from 'data/measure';
import Select from 'react-select';
import { useEffect, useRef, useState } from 'react';

const IngrediendsLittleForm = ({ clickHandlerMinus, isBtnDisabled, id, ingrediensName, allIngredientsList }) => {
  const [ingredientObject, setIngredientObject] = useState({});

  const ingredientRef = useRef(null);
  const measureRef = useRef(null);

  function handlerSelect({ descr, value }) {
    if (descr === 'ingredient') {
      const foundIngredient = allIngredientsList.filter(item => item.title === value);
      setIngredientObject(prev => ({ ...prev, ...foundIngredient[0] }));
    }
    if (descr === 'measure') {
      setIngredientObject(prev => ({ ...prev , measure: `${value}`}));
    }
  }

  useEffect(() => {
    if (ingredientObject ) {
        console.log(ingredientObject)
    };
  }, [ingredientObject]);

  return (  
    <div className={css.addIngredients_box} key={id}>
      <Select
        ref={ingredientRef}
        isSearchable={true}
        components={{
          IndicatorSeparator: () => null,
        }}
        name="ingredient"
        onChange={handlerSelect}
        options={ingrediensName}
        placeholder="ingredient"
        styles={ingredientStyles}
      />

      <Select
        ref={measureRef}
        isSearchable={true}
        name="measure"
        onChange={handlerSelect}
        options={measure}
        styles={measureStyles}
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
