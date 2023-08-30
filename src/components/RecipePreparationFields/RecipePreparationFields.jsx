import PropTypes from 'prop-types';
import s from './RecipePreparationFields.module.css'


export const RecipePreparationFields = ({textarea}) => {
  const handleChange = (e) => {
    const { value } = e.currentTarget;
     textarea(value)
  }
      return (
           
            <div className={s.recipePreparation_section}>
                  <h2 className={s.recipePreparation_title}>Recipe Preparation</h2>
                  <label >
            
              <textarea className={s.recipePreparation_textarea} placeholder="Enter the recipe"  type="text" onChange={handleChange}  name="descrRecipe" pattern="^^[A-Za-z\u0080-\uFFFF ']+$" required/>
                </label> 
            </div>
           
            )
}

RecipePreparationFields.propTypes = {
  textarea: PropTypes.func,
};