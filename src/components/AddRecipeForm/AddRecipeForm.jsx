// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import s from './AddRecipeForm.module.css';

import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';

export const AddRecipeForm = () => {
  const [drinkThumb, setDrinkThumb] = useState('');
  const [drink, setDrink] = useState('');
  const [about, setAbout] = useState('');
  const [category, setCategory] = useState('');
  const [glass, setGlass] = useState('');


  const [instructions, setInstructions] = useState('');
  const [tempImageUrl, setTempImageUrl] = useState(null);

  let ingredients;

  useEffect(() => {
    setDrinkThumb('');
  }, [setDrinkThumb]);

  useEffect(() => {
    if(tempImageUrl) setDrinkThumb(tempImageUrl);
  }, [drinkThumb, tempImageUrl]);

  const onPhotoChange = event => {
    const file = event.target.files[0];
    console.log(event.target.files[0]);
    if (file) {
      setTempImageUrl(URL.createObjectURL(file));
      setDrinkThumb(file);
    }
  };

  const setIngredients = data => {
    ingredients = data

  };

  const formSubmit = (drinkThumb, drink, category, glass, instructions, ingredients) => {
    const recipe = {
      drinkThumb,
      drink,
      category,
      glass,
      instructions,
      ingredients: [JSON.stringify(ingredients)],
      // ingredients,
    };
    //  dispatch(addRecipe(recipe))
    console.dir(recipe);
  };

  const handleSubmit = (e) => {
    /////// submiting !!!!!!!!!
    e.preventDefault();

    formSubmit(category, drink, drinkThumb, glass, instructions,ingredients);
    // const formData = new FormData();

    // console.log(formData);

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <RecipeDescriptionFields
          drinkThumb={drinkThumb}
          cocktailImg={onPhotoChange}
          itemTitle={setDrink}
          category={setCategory}
          glass={setGlass}
        />
        <RecipeIngredientsFields setIngredients={setIngredients} />
        <RecipePreparationFields textarea={setInstructions} />

        <button type="submit" className={s.add_btn}>
          Add
        </button>
      </form>
    </div>
  );
};
