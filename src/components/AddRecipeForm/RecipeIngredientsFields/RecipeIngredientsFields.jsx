// // import PropTypes from 'prop-types';
import css from './RecipeIngredientsFields.module.css';
import { useState, useEffect, useRef } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import Select from 'react-select';
import { fetchIngredients } from '../../../fetchAPI/fetchAPI';
import measure from 'data/measure';
import { nanoid } from 'nanoid';

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

    //     fetchRecipes().then(res => {
    //                   console.log(res.data.map(r => r.ingredients
    // ))
    //       })
    //       .catch(err => console.log(err))
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
            className="basic-single"
            ref={InselectRef}
            classNamePrefix="select"
            isSearchable={true}
            name="ingredient"
            onChange={handlerSelect}
            options={allIngredients}
            defaultValue={allIngredients[0]}
            styles={ingredientStyles}
          />

          <Select
            className="basic-single"
            classNamePrefix="select"
            ref={selectRef}
            isSearchable={true}
            name="measure"
            onChange={handlerSelect}
            options={measure}
            styles={measureStyles}
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

const ingredientStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: '60px',
    width: '316px',
    marginRight: '14px',
    height: '56px',
    paddingLeft: '14px',
    backgroundColor: 'rgba(22, 31, 55, 0)',
    color: 'white',
  }),
  option: base => ({
    ...base,

    color: 'white',
    height: '100%',
    backgroundColor: 'rgba(22, 31, 55, 1)',
  }),
};

const measureStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: '60px',
    width: '150px',
    marginRight: '40px',
    height: '56px',
    paddingLeft: '24px',
    backgroundColor: 'rgba(22, 31, 55, 0)',
  }),
  option: base => ({
    ...base,
    color: 'white',
    height: '100%',
    backgroundColor: 'rgba(22, 31, 55, 1)',
  }),
};
