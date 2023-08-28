// import PropTypes from 'prop-types';
import s from './RecipeDescriptionFields.module.css'
// import { useState } from "react"
import glasses from "../../data/glass"
import categories from '../../data/categoryList'
import { nanoid } from 'nanoid'

export const RecipeDescriptionFields = ({ cocktailImg, itemTitle, about, category, glass  }) => {
  
      const handleChange = (e) => {
    const { name, value } = e.currentTarget;
     switch (name) {
       case "cocktailImg":
          cocktailImg(value)
      // cocktailImg = cocktailImg;
      break;
       
       case "itemTitle":
         console.log(value);
           itemTitle(value)
     
         break;
       
       case "about":
         console.log(value)
         about(value)
         break;
       
       case "category":
          category(value)

         break;
       
       case "glass":
         glass(value)
   
      break;
       
      default:
      break;
     }
     
  }
    return (
        <div className={s.recipeDescriptionSection}>

            <label  className={s.label_img}>Add image
                <input type="file" className={s.cocktailImg} id="cocktailImg" name="cocktailImg" multiple  onChange={handleChange}/>
            </label>
            

        <div className={s.recipeDescriptionFields}>

          
                    <label >
              Enter item title
              <input type="text"  name="itemTitle"  required  onChange={handleChange}/>
                </label> 
                
                <label >
              Enter about recipe
              <input type="text"  name="about"  required  onChange={handleChange}/>
                </label> 

          
          <label >
            Category
              <input type="text" name="category" required onChange={handleChange}/>
            <select id="categories">
            {categories.map(category =>
             <option key={nanoid()} value="Naples">{category}</option>
            )}
          </select>
          </label> 

          <label >
                  Glass
                  <input name="glass" type="text" required   onChange={handleChange}/>
          
                <select id="glasses">
              {glasses.map(glass => <option key={nanoid()} value="Naples">{glass}</option> )}
                </select>
       
          </label> 
        </div>
        
          </div>
           
       
           
            )
}