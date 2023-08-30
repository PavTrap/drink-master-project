// import PropTypes from 'prop-types';
import { useState } from "react";
import { nanoid } from 'nanoid'
import s from './AddRecipeForm.module.css'
import { RecipeDescriptionFields } from '../RecipeDescriptionFields/RecipeDescriptionFields';
 import { RecipeIngredientsFields } from '../RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from '../RecipePreparationFields/RecipePreparationFields';

 
export const AddRecipeForm = () => {
const [drinkThumb, setDrinkThumb] = useState("");
const [drink, setDrink] = useState("");
// const [about, setAbout] = useState("");
const [category, setCategory] = useState("");
const [glass, setGlass] = useState("");
const [ingredients, setIngredients] = useState([]);
const [instructions, setInstructions] = useState("");


      const formSubmit = (drinkThumb, drink, category, glass, instructions, ingredients ) => {
       const recipe = {
      id: nanoid(),
      drinkThumb,
      drink,
      category,
      glass,
      instructions,
      ingredients
    };

             console.log(recipe)
    }

//     dispatch(addRecipe(contact))  

        const handleSubmit = (e) => {
      e.preventDefault()
      // e.currentTarget.reset()
            //   setIngredients({title: "lemon", measure: "50 ml"})
       formSubmit(category, drink, drinkThumb, glass, ingredients, instructions)
  }
      return (
           
            <div >
                  <form  onSubmit={handleSubmit}>
                  <RecipeDescriptionFields cocktailImg={setDrinkThumb} itemTitle={setDrink} category={setCategory} glass={setGlass}/>
                  <RecipeIngredientsFields addIngredients={setIngredients} />
                  <RecipePreparationFields textarea={setInstructions} />
                        
                  <button type='submit' className={s.add_btn}>Add</button>
                  
                  </form>
            </div >
           
            )
}


// AddRecipeForm.propTypes = {
//   title: PropTypes.string.isRequired,
// }
