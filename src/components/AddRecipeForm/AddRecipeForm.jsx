// import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import s from './AddRecipeForm.module.css'

import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';

export const AddRecipeForm = () => {

  const [drinkThumb, setDrinkThumb] = useState('');
  const [drink, setDrink] = useState('');
  // const [about, setAbout] = useState("");
  const [category, setCategory] = useState('');
  const [glass, setGlass] = useState('');
  const [addedIngredients, setIngredients] = useState([]);
  const [addedMeasure, setMeasure] = useState([]);
  const [instructions, setInstructions] = useState('');
  const [tempImageUrl, setTempImageUrl] = useState(null); 

  useEffect(() => { setDrinkThumb("")}, [setDrinkThumb])
      
  useEffect(() => {
    if (tempImageUrl) {
      setDrinkThumb(tempImageUrl);
    }
  }, [drinkThumb, tempImageUrl]);     
      
    const onPhotoChange = event => {
          const file = event.target.files[0];
          console.log(event.target.files[0])
    if (file) {
      setTempImageUrl(URL.createObjectURL(file));
      setDrinkThumb(file);
    }
};
  
      const formSubmit = (drinkThumb, drink, category, glass, instructions, ingredients ) => {
       const recipe = {
      id: nanoid(),
      drinkThumb,
      drink,
      category,
      glass,
      instructions,
      ingredients,
    };
  //  dispatch(addRecipe(recipe))
    console.log(recipe);
  };


        const handleSubmit = (e) => {
      e.preventDefault()
      // e.currentTarget.reset()
      const formData = new FormData();
      addedIngredients && formData.append('ingredient', addedIngredients);
      addedMeasure && formData.append('measure', addedMeasure);
              
    console.log(formData)
          formSubmit(category, drink, drinkThumb, glass, instructions)
      }
      
      
      return (
            <div >
                  <form  onSubmit={handleSubmit}>
                  <RecipeDescriptionFields drinkThumb={drinkThumb} cocktailImg={onPhotoChange} itemTitle={setDrink} category={setCategory} glass={setGlass}/>
                  <RecipeIngredientsFields addIngredients={setIngredients} addMeasure={setMeasure}/>
                  <RecipePreparationFields textarea={setInstructions} />
                        
                  <button type='submit' className={s.add_btn}>Add</button>
                  
                  </form>
            </div >
            )
}

