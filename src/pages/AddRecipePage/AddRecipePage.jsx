// import { Link } from "react-router-dom";

import { MainTitle } from '../../components/MainTitle/MainTitle';
import { FollowUs } from '../../components/FollowUs/FollowUs';
import { AddRecipeForm } from '../../components/AddRecipeForm/AddRecipeForm';


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
          <>
          <div style={{width: "313px", height: "515px", border: "1px solid white", marginTop: "88px", textAlign:"start", paddingLeft: "20px"}}>
            <h3 styles={{fontSize:"24px", fontWeight: "500", lineHeight:"32px"}}>Popular recipe Block</h3>
          </div>
          </>

        </div>
      </div>
    </section>
  );
}
