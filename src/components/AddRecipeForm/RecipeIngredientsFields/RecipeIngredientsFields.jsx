// import logic;
import { useState, useEffect } from 'react';
//styles
import css from './RecipeIngredientsFields.module.css';
//icons
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import IngrediendsLittleForm from './IngrediendsLittleForm';
import * as API from '../../../fetchAPI/fetchAPI';
// data

export const RecipeIngredientsFields = ({ setIngredients}) => {
  const [countIngredients, setCountIngredients] = useState(1);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [ingrediensName, setIngrediensName] = useState([]);
  const [allIngredientsList, setAllIngrediensList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await API.fetchIngredients();
        const ingredientsNames = response.map(({ title }) => {
          return { value: `${title}`, label: `${title}`, descr: `ingredient` };
        });
        setIngrediensName(ingredientsNames);
        setAllIngrediensList(response);
      } catch (error) {
        console.log(error);
      }
    })();
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
  let array = [];

  function clickHandlerMinus(id) {
    array.splice(id - 1, 1);
    setCountIngredients(countIngredients - 1);
  }

  const getFromForm = item => {
    if (Object.keys(item?.ingredient).length !== 0) {
      array[item.id - 1] = item.ingredient;
      if (array.length > 0){
        setIngredients(array)
        // console.log(array)
        //поднять пропы наверх
      }
    }
   
  };

  function createInputFields() {
    const inputFields = [];
    let counter = 0;
    for (let i = 0; i < countIngredients; i += 1) {
      counter += 1;
      inputFields.push(
        <IngrediendsLittleForm
          key={counter}
          clickHandlerMinus={clickHandlerMinus}
          isBtnDisabled={isBtnDisabled}
          id={counter} // id to array asign
          ingrediensName={ingrediensName} // list for selector
          allIngredientsList={allIngredientsList} // array of ingredients objects
          getFromForm={getFromForm}
          //function to get values
        />
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
