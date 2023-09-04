import { MainTitle } from '../../components/MainTitle/MainTitle';
import { FollowUs } from '../../components/FollowUs/FollowUs';
import { AddRecipeForm } from '../../components/AddRecipeForm/AddRecipeForm';
import PopularRecipes from 'components/PopularRecipes/PopularRecipes';
import { Suspense } from 'react';
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
          <Suspense >
            <FollowUs />
            <PopularRecipes />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
