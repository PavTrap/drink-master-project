import { useState, useEffect } from 'react'; // react
import { addCocktail } from '../../fetchAPI/fetchAPI'; //api
import { useNavigate } from 'react-router-dom'; // router dom
import {  toast } from 'react-toastify'; //toasts
import 'react-toastify/dist/ReactToastify.css'; // toast styles


import s from './AddRecipeForm.module.css';

import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields'; // upper fields with file
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientsFields'; // dynamic adding fields
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields'; // comment field

export const AddRecipeForm = () => {
  const navigate = useNavigate();
  let ingredients;
  const [drinkThumb, setDrinkThumb] = useState('');
  const [tempImageUrl, setTempImageUrl] = useState(null);
  const [file, setFile] = useState(null);
  const [drink, setDrink] = useState('');
  const [about, setAbout] = useState('');
  const [category, setCategory] = useState('');
  const [glass, setGlass] = useState('');
  const [instructions, setInstructions] = useState('');


  useEffect(() => {
    if (tempImageUrl) setDrinkThumb(tempImageUrl);
  }, [drinkThumb, tempImageUrl]); // reseting url


  const onPhotoChange = event => {
    // handele photo change
    const file = event.target.files[0];
    if (file) {
      setTempImageUrl(URL.createObjectURL(file));
      setDrinkThumb(file);
      setFile(file);
    }
  };

  const setIngredients = data => {
    // catch ingredients object
    ingredients = data;
  };

  const handleSubmit = async e => {
    // submit
    e.preventDefault();
    const formData = new FormData();
    formData.append('recipeImg', file);
    formData.append('drink', drink);
    formData.append('category', category);
    formData.append('glass', glass);
    formData.append('instructions', `${about}. ${instructions}`);
    formData.append('ingredients', [JSON.stringify(ingredients)]);

    const res = await addCocktail(formData);
      //  console.log("FORM DATA RES", res)
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (res?.status === 201) {
      toast.success("You add your recipe");
      navigate('/my');
    }
    if (res?.status !== 201) {
      toast.error(res.response.data.message);
    }
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
          about={setAbout}
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
