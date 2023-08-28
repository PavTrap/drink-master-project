// // import PropTypes from 'prop-types';
import s from './RecipeIngredientsFields.module.css'
import { useState } from "react"

export const RecipeIngredientsFields = () => {
      const [countIngredients, setCountIngredients] = useState(1);

      // if (countIngredients < 1) {
      //  
      // }
      
      function clickHandlerPlus() {
		setCountIngredients(countIngredients + 1);
      }
      
      function clickHandlerMinus() {
		setCountIngredients(countIngredients - 1);
	}
      
      return (
           
            <>
                  <div>
                  <h2 className={s.recipeIngredients_title}>Ingredients</h2>
            

                  
                  <label className={s.recipeIngredients_label}>
                        <input onClick={clickHandlerMinus} type="button" id="buttonCountMinus" value="-"/>
                        <div id="buttonCountNumber">{countIngredients}</div>
                        <input onClick={clickHandlerPlus}  type="button" id="buttonCountPlus" value="+"/>
                        </label> 
                  </div>      
            
            </>
           
            )
}