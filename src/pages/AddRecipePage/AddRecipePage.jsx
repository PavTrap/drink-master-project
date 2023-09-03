// import { Link } from "react-router-dom";
import { MainTitle } from '../../components/MainTitle/MainTitle';
import { FollowUs } from '../../components/FollowUs/FollowUs';
import { AddRecipeForm } from '../../components/AddRecipeForm/AddRecipeForm';
// import { PopularRecipe } from '../../components/PopularRecipe/PopularRecipe';
import PopularRecipes from 'components/PopularRecipes/PopularRecipes';

import css from './AddRecipePage.module.css';

export default function AddRecipePage() {
  return (
    <section className={css.addRecipeForm_container}>
      <MainTitle title="Add recipe" />
      <div className={css.addRecipePage}>
        <div>
          <AddRecipeForm />
        </div>
        <div>
          <FollowUs />
          <PopularRecipes />
        </div>
      </div>
    </section>
  );
}
