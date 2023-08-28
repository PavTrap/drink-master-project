// // import PropTypes from 'prop-types';
import s from './RecipePreparationFields.module.css'


export const RecipePreparationFields = ({textarea}) => {
  
   const handleChange = (e) => {
    const { name, value } = e.currentTarget;
     switch (name) {
       case "descrRecipe":
        textarea(value)
        //  console.log(textarea(value))
                 console.log(value)

      //     textarea(value)
      // cocktailImg = cocktailImg;
                 break;
           
      default:
      break;
     }
     
  }
      return (
           
            <>
                  <h2 className={s.recipePreparation_title}>Recipe Preparation</h2>
                  <label >
            
              <textarea className={s.recipePreparation_textarea} placeholder="Enter the recipe"  type="text" onChange={handleChange}  name="descrRecipe" pattern="^^[A-Za-z\u0080-\uFFFF ']+$" required/>
                </label> 
            </>
           
            )
}