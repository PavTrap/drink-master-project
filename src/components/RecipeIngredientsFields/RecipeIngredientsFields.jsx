// // import PropTypes from 'prop-types';
import s from './RecipeIngredientsFields.module.css'
import { useState, useEffect } from "react"
import { GrClose } from 'react-icons/gr';

import Select from 'react-select';
import ingredients from '../../data/ingredients'

export const RecipeIngredientsFields = () => {
      const [countIngredients, setCountIngredients] = useState(1);
      const [isBtnDisabled, setIsBtnDisabled] = useState(false);

     
      
     const changeHandler = countryVal => {
    console.log(countryVal)
  };

      // console.log(ingredients)
      useEffect(() => {
       if (countIngredients <= 1) {
        setIsBtnDisabled(true)
            }
            
      if (countIngredients > 1) {

            // console.log(ingredients)
        setIsBtnDisabled(false)
      }
      }, [countIngredients]);
      
      function clickHandlerPlus() {
		setCountIngredients(countIngredients + 1);
      }
      
      function clickHandlerMinus() {
		setCountIngredients(countIngredients - 1);
      }

        function createInputFields() {
    const inputFields = [];
    for (let i = 0; i < countIngredients; i++) {
          inputFields.push(
      <div className={s.addIngredients_box}>
            
       <Select  className="basic-single"
        classNamePrefix="select"
      
        isSearchable={true}
      name="ingredient"
      onChange={changeHandler}
      options={ingredients}
                      /> 
                      

       <Select  className="basic-single"
        classNamePrefix="select"
        
        isSearchable={true}
      name="ingredient"
      onChange={changeHandler}
      options={ingredients}
                      /> 
                      
      <button disabled={isBtnDisabled} onClick={clickHandlerMinus}  type="button" id="buttonDeleteIng"><GrClose/></button>              
      </div>
     
      );
    }
    return inputFields;
  }

      return (
           
            <>
                  <div >
                  <h2 className={s.recipeIngredients_title}>Ingredients</h2>
            

                  
                  
                        <button disabled={isBtnDisabled} onClick={clickHandlerMinus} type="button" id="buttonCountMinus" >-</button>
                        <div id="buttonCountNumber">{countIngredients}</div>
                        <button onClick={clickHandlerPlus}  type="button" id="buttonCountPlus"> + </button>

                              
           
            <div className={s.addIngredients_fields}>
             
      {/* <Select  className="basic-single"
        classNamePrefix="select"
      //   defaultValue={ingredients[0]}
        isRtl={isRtl}
        isSearchable={true}
                                    name="ingredient"
                                    onChange={changeHandler}
                                    options={ingredients}
                              /> */}
                        {createInputFields()}
    
                           
                  </div>
                  </div>      
            
            </>
           
            )
}