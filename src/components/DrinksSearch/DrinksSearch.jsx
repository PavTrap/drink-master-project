import { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
import css from './DrinksSearch.module.css';
import categoryList from '../../data/categoryList.json';
import glass from '../../data/glass.json';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchDrinks, fetchGlasses } from 'redux/Drinks/DrinksOperation';

export const DrinksSearch = () => {
 
  
  const { categoryList, entities, filter, glasses } = useSelector(state => state.drinks);
  console.log('categories', categoryList)
  const dispatch = useDispatch();

  // отвечает за загрузку первых коктейлей
  
  // word = null,
  //       category = 'cocktail',
  //       ingredient = null,
  //       page = 1,
  
  useEffect(() => {
    dispatch(fetchDrinks({}))
    dispatch(fetchCategories())
    dispatch(fetchGlasses())
  }, [dispatch])

  const handleChange = event => {
    const payload = event.currentTarget.value;
    console.log('payload from handleChange ==>> ', payload);
    // dispatch(changeFilter(payload));
  };

  // const recipes = async

  const SelectList = ({ data }) => {
    console.log('data', data);
    const arr = [];
    data.forEach(category => {
      arr.push(<option key={category._id}>{category.name}</option>);
    });
    // console.log("arr.join('')", arr.join(''));
    return arr;
  };

  // при выборк конкретной категории
  // const handleCategory = event => {
  //   const payload = 
  // }

  return (
    <>
      <div className={css.container}>
        <MainTitle title="Drinks" />
        <form
          className={css.drinkRequestForm}
          //   onSubmit={handleSubmit(data => setData(JSON.stringify(data)))}
        >
          <input
            onChange={handleChange}
            className={css.inputDrinks}
            placeholder="Enter the text"
          />
          <select className={css.selsctDrinks}>
            <option value="">All categories</option>

            <SelectList data={categoryList} />
          </select>

          <select className={css.selsctDrinks}>
            <option value="">Ingredients</option>
            <SelectList data={glasses} />
          </select>
        </form>
        {/* <RecipesList recipes={ } state={ } /> */}
      </div>
    </>
  );
};
