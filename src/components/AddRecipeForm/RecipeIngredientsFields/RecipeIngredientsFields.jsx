// import logic;
import Select from 'react-select';
import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
//styles
import css from './RecipeIngredientsFields.module.css';
import {ingredientStyles, measureStyles} from "./inputStyles"
//icons
import { MdOutlineClose } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
// data
import { fetchIngredients } from '../../../fetchAPI/fetchAPI';
import measure from 'data/measure';

export const RecipeIngredientsFields = ({ addIngredients, addMeasure }) => {
  const [countIngredients, setCountIngredients] = useState(1);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [allIngredients, setIngredients] = useState([]);
  // const [addedIngredients, setAddedIngredients] = useState([]);
  // const [addedMeasure, setAddedMeasure] = useState([]);

  const InselectRef = useRef(null);
  const selectRef = useRef(null);

  useEffect(() => {
    fetchIngredients()
      .then(res => {
        const result = res.map(r => {
          return { value: `${r.title}`, label: `${r.title}`, descr: `ingredient` };
        });
        setIngredients(result);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (countIngredients <= 1) {
      setIsBtnDisabled(true);
    }

    if (countIngredients > 1) {
      setIsBtnDisabled(false);
    }
  }, [countIngredients]);

  function clickHandlerPlus() {
    setCountIngredients(countIngredients + 1);
  }

  function clickHandlerMinus() {
    setCountIngredients(countIngredients - 1);
  }

  function handlerSelect() {}

  function createInputFields() {
    const inputFields = [];
    for (let i = 0; i < countIngredients; i++) {
      inputFields.push(
        <div className={css.addIngredients_box} key={nanoid()}>
          <Select
            ref={InselectRef}
            isSearchable={true}
            components={{
              IndicatorSeparator: () => null,
            }}
            name="ingredient"
            onChange={handlerSelect}
            options={allIngredients}
            defaultValue={allIngredients[0]}
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
    }
    return inputFields;
  }

  return (
    <div className={css.addIngredients_wrapper}>
      <div className={css.addIngredients_titleBtnBox}>
        <h2 className={css.recipeIngredients_title}>Ingredients</h2>
        <div className={css.addIngredients_btnBox}>
          <button
            disabled={isBtnDisabled}
            onClick={clickHandlerMinus}
            type="button"
            id="buttonCountMinus"
            className={css.addIngredients_btn}
          >
            <AiOutlineMinus className={css.addIngredients_btnIcon} />
          </button>
          <div id="buttonCountNumber">{countIngredients}</div>
          <button onClick={clickHandlerPlus} type="button" id="buttonCountPlus" className={css.addIngredients_btn}>
            <AiOutlinePlus className={css.addIngredients_btnIcon} />
          </button>
        </div>
      </div>

      <div className={css.addIngredients_fields}>{createInputFields()}</div>
    </div>
  );
};



