import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import s from './AddRecipeForm.module.css'


import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';

export const AddRecipeForm = () => {

  const [drinkThumb, setDrinkThumb] = useState('');
  const [drink, setDrink] = useState('');
  const [about, setAbout] = useState('');
  const [category, setCategory] = useState('');
  const [glass, setGlass] = useState('');
  const [addedIngredients, setIngredients] = useState([]);
  const [addedMeasure, setMeasure] = useState([]);
  const [instructions, setInstructions] = useState('');
  const [tempImageUrl, setTempImageUrl] = useState(null); 

  useEffect(() => { setDrinkThumb(""); setInstructions('')}, [setDrinkThumb])
      
  useEffect(() => {
    if (tempImageUrl) {
      setDrinkThumb(tempImageUrl);
    }
  }, [drinkThumb, tempImageUrl]);     
      
    const onPhotoChange = event => {
          const file = event.target.files[0];
    if (file) {
      setTempImageUrl(URL.createObjectURL(file));
      setDrinkThumb(file);
    }
};
  
  const formSubmit = (drinkThumb, drink, category, glass, instructions) => {
    console.log(addedIngredients, addedMeasure);
    
    const formDataRecipe = new FormData();
    drinkThumb && formDataRecipe.append('drinkThumb', drinkThumb);
    drink && formDataRecipe.append('drink', drink);
    category && formDataRecipe.append('category', category);
    glass && formDataRecipe.append('glass', glass);
    instructions && formDataRecipe.append('instructions', instructions);

            
  //  dispatch(addRecipe(recipe))
    console.log(formDataRecipe);
  };


    const handleSubmit = (e) => {
      e.preventDefault()
      // e.currentTarget.reset()

      setInstructions(`${about} ${instructions}`)
       formSubmit(drinkThumb, drink, category, glass, instructions)
      }
      
      
      return (
            <div >
                  <form  onSubmit={handleSubmit}>
                  <RecipeDescriptionFields drinkThumb={drinkThumb} cocktailImg={onPhotoChange} itemTitle={setDrink} about={setAbout} category={setCategory} glass={setGlass}/>
                  <RecipeIngredientsFields addIngredients={setIngredients} addMeasure={setMeasure}/>
                  <RecipePreparationFields textarea={setInstructions} />
                        
                  <button type='submit' className={s.add_btn}>Add</button>
                  
                   <br />
                  <NavLink to="/my">
                  My recipes
                 </NavLink>
                  </form>
            </div >
            )
}

