// // import PropTypes from 'prop-types';
import s from './RecipeIngredientsFields.module.css'
import { useState, useEffect, useRef } from "react"
import { MdOutlineClose } from 'react-icons/md';
import { AiOutlinePlus , AiOutlineMinus } from 'react-icons/ai';

import Select from 'react-select';
import {fetchIngredients} from '../../fetchAPI/fetchAPI'
import measure from '../../data/measure'
import { nanoid } from 'nanoid';
import { refreshUser } from 'redux/Auth/authOperation';


export const RecipeIngredientsFields = () => {
const [countIngredients, setCountIngredients] = useState(1);
const [isBtnDisabled, setIsBtnDisabled] = useState(false);
const [allIngredients, setIngredients] = useState([]);
const [addedIngredients, setAddedIngredients] = useState([]);
const InselectRef = useRef(null)
const selectRef = useRef(null)
  useEffect(() => {
	fetchIngredients()
            .then(res => {
                  const result = res.map(r => {
                        return ({ value: `${r.title}`, label: `${r.title}`, descr: `ingredient` })
                  });
        setIngredients(result);
      })
      .catch(err => console.log(err))
  
  }, []);
        
     const changeHandler = e => {
           console.log(e)
             console.log(selectRef.current.props.name)

    //     switch (e.descr) {
    //    case `${selectRef.current.props.name}`:
    //     console.log(e.value)
    //      break;
       
    //    case `${InselectRef.current.props.name}`:
    //      console.log(e.value)
    //      break;
       
    //    default:
    //   break;
    //  }
  };

      useEffect(() => {
       if (countIngredients <= 1) {
        setIsBtnDisabled(true)
            }
            
      if (countIngredients > 1) {
        setIsBtnDisabled(false)
      }
      }, [countIngredients]);
      
      function clickHandlerPlus() {
		setCountIngredients(countIngredients + 1);
      }
      
      function clickHandlerMinus() {
		setCountIngredients(countIngredients - 1);
      }

        function createInputFields() {
    const inputFields = [];
    for (let i = 0; i < countIngredients; i++) {
          inputFields.push(
      <div className={s.addIngredients_box} key={nanoid()}>
         
        <Select className="basic-single"
        ref={InselectRef}
        classNamePrefix="select"
        isSearchable={true}
      name="ingredient"
      onChange={changeHandler}
      options={allIngredients}
      defaultValue={allIngredients[0]}
       styles={{
                control: (baseStyles, state) => ({
                   ...baseStyles,
                   borderRadius: "60px",
                   width: "316px",
                   marginRight: "14px",
                   height: "56px",
                   paddingLeft: "14px",
                   backgroundColor: "rgba(22, 31, 55, 0)",
                   color: "white"
                }),
                option: (base) => ({
                  ...base,
                  
               color: "white",
                height: '100%',
                backgroundColor: "rgba(22, 31, 55, 1)",
              }),
              }}                      
                      ></Select> 
                      

       <Select  className="basic-single"
        classNamePrefix="select"
            ref={selectRef}
        isSearchable={true}
      name="measure"
      onChange={changeHandler}
      options={measure}
      styles={{
                control: (baseStyles, state) => ({
                   ...baseStyles,
                   borderRadius: "60px",
                   width: "150px",
                   marginRight: "40px",
                   height: "56px",
                   paddingLeft: "24px",
                   backgroundColor: "rgba(22, 31, 55, 0)"
                }),
                option: (base) => ({
                ...base,
               color: "white",
                height: '100%',
                backgroundColor: "rgba(22, 31, 55, 1)",
              }),
              }}    
                      /> 
                      
                      <button className={s.addIngredients_btnDelete} disabled={isBtnDisabled} onClick={clickHandlerMinus} type="button" id="buttonDeleteIng">
                            <MdOutlineClose className={s.addIngredients_btnDeleteIcon} /></button>              
      </div>
     
      );
    }
    return inputFields;
  }

      return (
           
           
                  <div className={s.addIngredients_wrapper}>
                  <div className={s.addIngredients_titleBtnBox}> 
                  
                        <h2 className={s.recipeIngredients_title}>Ingredients</h2>
                        <div className={s.addIngredients_btnBox}>
                              <button disabled={isBtnDisabled} onClick={clickHandlerMinus} type="button" id="buttonCountMinus" className={s.addIngredients_btn}> <AiOutlineMinus className={s.addIngredients_btnIcon}/> </button>
                              <div id="buttonCountNumber">{countIngredients}</div>
                              <button onClick={clickHandlerPlus}  type="button" id="buttonCountPlus" className={s.addIngredients_btn}> <AiOutlinePlus className={s.addIngredients_btnIcon}/> </button>
                        </div>
                  </div>      
                        
                        <div className={s.addIngredients_fields}>
                          {createInputFields()}
                        </div>
                  </div>      
            
        
           
            )
}