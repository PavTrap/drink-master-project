// import { Link } from "react-router-dom";

import { MainTitle } from '../../components/MainTitle/MainTitle';
import { FollowUs } from '../../components/FollowUs/FollowUs';
import { AddRecipeForm } from '../../components/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from '../../components/PopularRecipe/PopularRecipe';

import s from './AddRecipePage.module.css'

export default function AddRecipePage() {
  return (<section className={s.addRecipeForm_section}>
    <MainTitle title='Add recipe' />

    <div className={s.AddRecipePage}>
          <div>
            <AddRecipeForm/>
          </div>

      <div>
        <FollowUs />
        <PopularRecipe/>
          
        </div>
    </div>

    </section>
    )
  
}