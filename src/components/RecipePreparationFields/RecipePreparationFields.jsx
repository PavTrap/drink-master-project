// // import PropTypes from 'prop-types';
import s from './RecipePreparationFields.module.css'


export const RecipePreparationFields = () => {
      
      return (
           
            <>
                  <h2 className={s.recipePreparation_title}>Recipe Preparation</h2>
                  <label >
            
              <textarea className={s.recipePreparation_textarea} placeholder="Enter the recipe"  type="text"  name="descrRecipe" pattern="^^[A-Za-z\u0080-\uFFFF ']+$" required/>
                </label> 
            </>
           
            )
}