// import { Link } from "react-router-dom";

import s from '../components/style/Home.module.css'

export default function AddRecipe() {
  
    
    return <div className={s.AddRecipe}>
    <h1 className={s.home_title}>Add Recipe</h1>
    <form>

          <label >
          Enter item title
          <input
            
          />
    </label> 
    

    <label >
          Enter about recipe
          <input
        
          />
        </label> 

        <button type='submit' className={s.LoginForm_btn}>Add</button>

      </form>
        
        <ul>
        
            <li>Instagram</li>
            <li>Facebook</li>
            <li>YouTube</li>
    </ul>
    </div>
  
}