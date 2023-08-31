import { useEffect } from 'react';
import css from './DrinksSearch.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchDrinks, fetchIngredients } from 'redux/Drinks/DrinksOperation';
import { DrinkCard } from 'pages/MainPage/MainPage';
import Select from 'react-select';
import debounce from 'lodash.debounce';
import { selectStyles } from './selectStyles';
// import { Paginator } from 'components/Paginator/Paginator';

export const DrinksSearch = () => {
  // add lastRequest
  const { categoryList, entities, ingredientList } = useSelector(state => state.drinks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchIngredients());
  }, []);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const debouncedHandleChange = debounce(payload => {
    dispatch(fetchDrinks({ word: payload }));
  }, 1000);

  const handleChange = event => {
    const payload = event.currentTarget.value;
    debouncedHandleChange(payload);
  };

  

  const handleChangeSelectCategory = selectedoption => {
    dispatch(fetchDrinks({ category: selectedoption.label }));
  };

  const handleChangeSelectIngredient = selectedoption => {
    dispatch(fetchDrinks({ ingredient: selectedoption.label }));
  };

  // const SelectList = ({ data }) => {
  //   const arr = [];
  //   data.forEach(elem => {
  //     arr.push(<option key={elem._id}>{elem.name || elem.title}</option>);
  //   });
  //   return arr;
  // };

  // const changePage = (page) => {
  //   return fetchDrinks({page, lastRequest})
  // }

  

  const selectListWithSelectReact = data => {
    const arr = [];
    let el = null;
    data.forEach(elem => {
      if (elem?.name) {
        el = elem.name;
      } else {
        el = elem.title;
      }
      arr.push({ value: el, label: el });
    });
    return arr;
  };

  return (
    <>
      <form className={css.drinkRequestForm}>
        <input onChange={handleChange} className={css.inputDrinks} placeholder="Enter the text" />

        

        <Select
          placeholder="All categories"
          options={selectListWithSelectReact(categoryList)}
          styles={selectStyles}
          onChange={handleChangeSelectCategory}
        />
        <Select
          placeholder="Ingredients"
          options={selectListWithSelectReact(ingredientList)}
          styles={selectStyles}
          onChange={handleChangeSelectIngredient}
        />
      </form>
      {entities.data && (
        <ul className={css.mainPageList}>
          {entities.data.map(({ _id, drink, drinkThumb }) => (
            <DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb} />
          ))}
        </ul>
      )}
      {entities?.data?.length === 0 && <h3>No result</h3>}
      {/* {entities?.data?.length > 10 && <Paginator pages={pages} onChangePage = {changePage} />} */}
    </>
  );
};
