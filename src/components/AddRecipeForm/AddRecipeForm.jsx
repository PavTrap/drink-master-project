// import PropTypes from 'prop-types';
import s from './AddRecipeForm.module.css'
import { RecipeDescriptionFields } from '../RecipeDescriptionFields/RecipeDescriptionFields';
 import { RecipeIngredientsFields } from '../RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from '../RecipePreparationFields/RecipePreparationFields';

 
export const AddRecipeForm = () => {
      
      return (
           
            <>
                  <form >
                  <RecipeDescriptionFields />
                  <RecipeIngredientsFields />
                  <RecipePreparationFields />
                        <button type='submit' className={s.add_btn}>Add</button>
                  
                  </form>
            </>
           
            )
}


// AddRecipeForm.propTypes = {
//   title: PropTypes.string.isRequired,
// }
