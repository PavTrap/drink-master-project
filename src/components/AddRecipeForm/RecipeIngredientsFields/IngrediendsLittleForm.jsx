import css from './RecipeIngredientsFields.module.css';
import { ingredientStyles, measureStyles } from './inputStyles';
import { MdOutlineClose } from 'react-icons/md';
import measure from 'data/measure';
import Select from 'react-select';
import { useEffect, useRef, useState } from 'react';
// import { nanoid } from 'nanoid';


const IngrediendsLittleForm = ({clickHandlerMinus, isBtnDisabled, id, ingrediensName}) => {
    const [ingredientObject, setIngredientObject] = useState()

  const InselectRef = useRef(null);
  const selectRef = useRef(null);

  function handlerSelect() {
    //добавить ингредиенты массивом filter -> fieldName
  }


  return (
    <div className={css.addIngredients_box} key={id} >
      <Select
        ref={InselectRef}
        isSearchable={true}
        components={{
          IndicatorSeparator: () => null,
        }}
        name="ingredient"
        onChange={handlerSelect}
        options={ingrediensName}
        defaultValue={ingrediensName[0]}
        styles={ingredientStyles}
      />

      <Select
        ref={selectRef}
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
