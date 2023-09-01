
import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './AddRecipeForm.module.css';
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

  const formSubmit = (drinkThumb, drink, category, glass, instructions, ingredients) => {
    const recipe = {
      id: nanoid(),
      drinkThumb,
      drink,
      category,
      glass,
      instructions,
      ingredients,
    };

    console.log(recipe);
  };

  //     dispatch(addRecipe(contact))

  const handleSubmit = e => {
    e.preventDefault();
    // e.currentTarget.reset()

    const formData = new FormData();
    addedIngredients && formData.append('ingredient', addedIngredients);
    addedMeasure && formData.append('measure', addedMeasure);

    console.log(formData);
    formSubmit(category, drink, drinkThumb, glass, instructions);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <RecipeDescriptionFields cocktailImg={setDrinkThumb} itemTitle={setDrink} category={setCategory} glass={setGlass} />
        <RecipeIngredientsFields addIngredients={setIngredients} addMeasure={setMeasure} />
        <RecipePreparationFields textarea={setInstructions} />
        <button type="submit" className={css.add_btn}>
          Add
        </button>
      </form>
      {/* <<Top Block */}
    </div>
  );
};

