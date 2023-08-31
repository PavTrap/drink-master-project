// import PropTypes from 'prop-types';
import s from './RecipeDescriptionFields.module.css'
import { useState, useEffect } from "react"
import Select from 'react-select';
import {fetchCategory , fetchGlasses} from '../../fetchAPI/fetchAPI'
import { BsFillPlusSquareFill } from 'react-icons/bs';

export const RecipeDescriptionFields = ({ cocktailImg, itemTitle, category, glass  }) => {
  const [allCategory, setCategory] = useState([]);
  const [allGlasses, setGlasses] = useState([]);


  useEffect(() => {
		fetchCategory()
      .then(res => {
         const result = res.map(r => {
                        return ({ value: `${r.name}`, label: `${r.name}`, descr: `category` })
                  });
        setCategory(result);
      })
      .catch(err => console.log(err))
  
  }, []);

  useEffect(() => {
		fetchGlasses()
      .then(res => {
        const result = res.map(r => {
                        return ({ value: `${r.name}`, label: `${r.name}`, descr: `glasses` })
                  });
        setGlasses(result);
      })
      .catch(err => console.log(err))
  
  }, []);

  const handleChangeSelect = (e) => {
   
     switch (e.descr) {
       case "category":
          category(e.value)
         break;
       
       case "glasses":
          glass(e.value)
         break;
       
       default:
      break;
     }
   }
  
      const handleChange = (e) => {
        const { name, value } = e.currentTarget;
          // console.log(name)
     switch (name) {
       case "cocktailImg":
          cocktailImg(value)
      break;
       
       case "itemTitle":
           itemTitle(value)
         break;
       
      default:
      break;
     }
     
  }
    return (
        <div className={s.recipeDescriptionSection}>

        <label className={s.recipeDescription_labelImg}>
          <BsFillPlusSquareFill className={s.recipeDescription_addImgIcon} /> <p className={s.recipeDescription_addImgDescr}>Add image</p> 
                <input type="file" className={s.recipeDescription_inputImg} id="cocktailImg" name="cocktailImg"  accept=".jpg, .jpeg, .png" multiple  onChange={handleChange}/>
            </label>
            

        <div className={s.recipeDescriptionFields}>
          
                 <label  className={s.recipeDescriptionFields_label}>Enter item title
                    <input className={s.recipeDescriptionFields_input} type="text"  name="itemTitle"  required  onChange={handleChange}/>
                </label>
          
                <label  className={s.recipeDescriptionFields_label}>Enter about recipe
                   <input className={s.recipeDescriptionFields_input} type="text"  name="about"  onChange={handleChange}/>
               </label> 
       
    
          <label >
            Category          
              <Select
              
              className={s.recipeDescriptionFields_input}
        classNamePrefix="select"
        isSearchable={true}
      name="category"
      onChange={handleChangeSelect}
      required
              options={allCategory}
              styles={{
                control: (baseStyles, state) => ({
                   ...baseStyles,
                  border: "none",
                  
                   paddingLeft: "24px",
                   backgroundColor: "rgba(22, 31, 55, 0)"
                }),
                option: (base) => ({
                ...base,
              
                height: '100%',
                backgroundColor: "rgba(22, 31, 55, 1)",
              }),
              }}
            /> 
           
          </label> 

          <label >
                  Glass            
             <Select  className={s.recipeDescriptionFields_input}
              classNamePrefix="select"
              isSearchable={true}
              name="glass"
              onChange={handleChangeSelect}
              options={allGlasses}
              required
              styles={{
              control: (baseStyles, state) => ({
      ...baseStyles,
                  border: "none",
                   paddingLeft: "24px",
                   backgroundColor: "rgba(22, 31, 55, 0)"}),
              option: (base) => ({
                ...base,
                height: '100%',
                backgroundColor: "rgba(22, 31, 55, 1)",
              }),
    }}
            />
          </label>
        </div>

          </div>
            )
}