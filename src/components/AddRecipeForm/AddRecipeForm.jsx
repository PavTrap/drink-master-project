// import PropTypes from 'prop-types';
import { useState } from "react";
import { nanoid } from 'nanoid'
import s from './AddRecipeForm.module.css'
import { RecipeDescriptionFields } from '../RecipeDescriptionFields/RecipeDescriptionFields';
 import { RecipeIngredientsFields } from '../RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from '../RecipePreparationFields/RecipePreparationFields';

 
export const AddRecipeForm = () => {
const [cocktailImg, setCocktailImg] = useState("");
const [itemTitle, setItemTitle] = useState("");
const [about, setAbout] = useState("");
const [category, setCategory] = useState("");
const [glass, setGlass] = useState("");
const [ingredients, setIngredients] = useState([]);
const [recipePreparation, setRecipePreparation] = useState("");


      const formSubmit = (cocktailImg, itemTitle, about, category, glass, recipePreparation ) => {
       const recipe = {
      id: nanoid(),
      cocktailImg,
      itemTitle,
      about,
      category,
      glass,
      recipePreparation
    };

             console.log(recipe, ingredients)
    }

//     dispatch(addRecipe(contact))  

        const handleSubmit = (e) => {
      e.preventDefault()
      // e.currentTarget.reset()
              setIngredients(["lemon", "50 ml"])
       formSubmit(cocktailImg, itemTitle, about, category, glass, recipePreparation)
  }
      return (
           
            <>
                  <form  onSubmit={handleSubmit}>
                  <RecipeDescriptionFields cocktailImg={setCocktailImg} itemTitle={setItemTitle} about={setAbout} category={setCategory} glass={setGlass}/>
                  <RecipeIngredientsFields />
                  <RecipePreparationFields textarea={setRecipePreparation} />
                        
                  <button type='submit' className={s.add_btn}>Add</button>
                  
                  </form>
            </>
           
            )
}


// AddRecipeForm.propTypes = {
//   title: PropTypes.string.isRequired,
// }
