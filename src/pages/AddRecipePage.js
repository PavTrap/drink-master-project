// import { Link } from "react-router-dom";

import { MainTitle } from '../components/MainTitle/MainTitle';
import { FollowUs } from '../components/FollowUs/FollowUs';
import { AddRecipeForm } from '../components/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from '../components/PopularRecipe/PopularRecipe';


export default function AddRecipePage() {
  return (<>
    <MainTitle title='Add recipe' />

    <section>
          <div>
              <AddRecipeForm/>
          </div>

          <div>
            <PopularRecipe/>
            <FollowUs />
        </div>
    </section>

    </>
    )
  
}