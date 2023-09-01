import { useState, useEffect, useRef } from 'react';

import Select from 'react-select';
import { fetchIngredients } from '../../../fetchAPI/fetchAPI';
import measure from 'data/measure';
// import { nanoid } from 'nanoid';

export const IngredientSelect = () => {
  const [allIngredients, setIngredients] = useState([]);

  function changeHandler(e) {
    console.log(e);
  }

  const ingredientRef = useRef(null); //refs
  const measureRef = useRef(null); //refs

  useEffect(() => { // fetching
    fetchIngredients()
      .then(res => {
        const result = res.map(r => {
          return { value: `${r.title}`, label: `${r.title}`, descr: `ingredient` };
        });
        setIngredients(result);
      })
      .catch(err => console.log(err));
  }, []);


  return (
    <>
      <Select
        className="basic-single"
        ref={ingredientRef}
        classNamePrefix="select"
        isSearchable={true}
        name="ingredient"
        onChange={changeHandler}
        options={allIngredients}
        defaultValue={allIngredients[0]}
        styles={ingredientStyles}
      />

      <Select
        className="basic-single"
        classNamePrefix="select"
        ref={measureRef}
        isSearchable={true}
        name="measure"
        onChange={changeHandler}
        options={measure}
        styles={mesureStyles}
      />
    </>
  );
};

const ingredientStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: '60px',
    width: '316px',
    marginRight: '14px',
    height: '56px',
    paddingLeft: '14px',
    backgroundColor: 'rgba(22, 31, 55, 0)',
    color: 'white',
  }),
  option: base => ({
    ...base,

    color: 'white',
    height: '100%',
    backgroundColor: 'rgba(22, 31, 55, 1)',
  }),
};

const mesureStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: '60px',
    width: '150px',
    marginRight: '40px',
    height: '56px',
    paddingLeft: '24px',
    backgroundColor: 'rgba(22, 31, 55, 0)',
  }),
  option: base => ({
    ...base,
    color: 'white',
    height: '100%',
    backgroundColor: 'rgba(22, 31, 55, 1)',
  }),
};
