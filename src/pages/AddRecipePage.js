// import { Link } from "react-router-dom";

import { MainTitle } from '../components/MainTitle/MainTitle';
// import { FollowUs } from '../components/FollowUs/FollowUs';
import { AddRecipeForm } from '../components/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from '../components/PopularRecipe/PopularRecipe';

export default function AddRecipePage() {
  return (
    <div >
    

      <section style={littleStyles}>
      <MainTitle title="Add recipe" />
        <div style={{display: 'flex', flexDirection:"column",}}>
          <AddRecipeForm />
        </div>
        <div>
          <PopularRecipe />
          {/* <FollowUs /> */}
        </div>
      </section>
    </div>
  );
}

const littleStyles = {

  fontSize: '40px',
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'no-wrap',
  alignItems: 'center',
  justifyContent: 'center',
};
