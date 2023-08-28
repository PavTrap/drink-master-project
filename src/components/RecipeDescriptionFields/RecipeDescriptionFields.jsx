// import PropTypes from 'prop-types';
import s from './RecipeDescriptionFields.module.css'
// import { useState } from "react"
import glasses from "../../data/glass"
import categories from '../../data/categoryList'
import { nanoid } from 'nanoid'

export const RecipeDescriptionFields = () => {
    // const [cocktailImg, useCocktailImg] = useState("");
    // const [itemTitle, useItemTitle] = useState("");
    // const [about, useAbout] = useState("");
    // const [category, useCategory] = useState("");
    //  const [glass, useGlass] = useState("");
      
    return (
        <div className={s.recipeDescriptionSection}>

            <label  className={s.label_img}>Add image
                <input type="file" className={s.cocktailImg} id="cocktailImg" name="cocktailImg" multiple/>
            </label>
            

        <div className={s.recipeDescriptionFields}>

          
                    <label >
              Enter item title
              <input type="text"  name="itemTitle" pattern="^^[A-Za-z\u0080-\uFFFF ']+$" required/>
                </label> 
                
                <label >
              Enter about recipe
              <input type="text"  name="about" pattern="^^[A-Za-z\u0080-\uFFFF ']+$" required/>
                </label> 

          
          <label >
            Category
              <input type="text" name="category" required/>
            <select id="categories">
            {categories.map(category =>
             <option key={nanoid()} value="Naples">{category}</option>
            )}
          </select>
          </label> 

          <label >
                  Glass
                  <input name="glass" type="text" required />
          
                <select id="glasses">
              {glasses.map(glass => <option key={nanoid()} value="Naples">{glass}</option> )}
                </select>
                    {/* <input type="text"  name="glass" pattern="^^[A-Za-z\u0080-\uFFFF']+$" /> */}
          </label> 
        </div>
        
          </div>
           
       
           
            )
}