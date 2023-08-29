import { useEffect } from 'react';
import css from './DrinksSearch.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchDrinks, fetchIngredients } from 'redux/Drinks/DrinksOperation';
import { DrinkCard } from 'pages/MainPage/MainPage';
// import Select from "react-select"
import debounce from 'lodash.debounce';

export const DrinksSearch = () => {
  const { categoryList, entities, ingredientList } = useSelector(state => state.drinks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDrinks({}));
    dispatch(fetchCategories());
    dispatch(fetchIngredients());
  }, [dispatch]);

  const debouncedHandleChange = debounce(payload => {
    dispatch(fetchDrinks({ word: payload }));
  }, 1000);

  const handleChange = event => {
    const payload = event.currentTarget.value;
    debouncedHandleChange(payload);
  };

  const handleChangeSelect = event => {
    const item = event.currentTarget;

    dispatch(fetchDrinks({ [item.name]: item.value }));
  };

  const SelectList = ({ data }) => {
    const arr = [];
    data.forEach(elem => {
      arr.push(<option key={elem._id}>{elem.name || elem.title}</option>);
    });
    return arr;
  };

  // styles for select-react
  // const styles = {
  //   // control: () => ({ ...css.selsctDrinks}),

  //   control: styles => ({
  //     // ...css.selsctDrinks,
  //     display: "flex",
  //     backgroundColor: '#161f37',
  //     width: '199px',
  //     borderRadius: '200px',
  //     paddingTop: '14px',
  //     paddingBottom: '15px',
  //     paddingLeft: '24px',
  //     paddingRight: '24px',
  //   }),
  //   option: (styles, { data, isDisabled, isFocused, isSelected }) => {

  //     return {
  //       backgroundColor: isDisabled ? 'red' : "#161f37",
  //       color: '#FFF',
        

  //       cursor: isDisabled ? 'not-allowed' : 'default',
  //       // borderRadius: "20px"
  //     };
  //   },
  //   options: (styles) => {
  //     return {
  //       ...styles,
  //       borderRadius: "20px",
  //       display: 'flex'
  //     }
  //   }
  // };

  // const selectListWithSelectReact = (data) => {
  //   const arr = [];
  //   data.forEach(elem => {
  //     arr.push({ value: 'chocolate', label: 'Chocolate' },);
  //   });
  //   return arr;
  // }
  // const options = selectListWithSelectReact(categoryList);

  return (
    <>
      <form className={css.drinkRequestForm}>
        <input onChange={handleChange} className={css.inputDrinks} placeholder="Enter the text" /> 

        <select name="category" onChange={handleChangeSelect} className={css.selsctDrinks}>
          <option value="categoryMain">All categories</option>

          <SelectList data={categoryList} />
        </select>

        <select name="ingredient" onChange={handleChangeSelect} className={css.selsctDrinks}>
          <option value="">Ingredients</option>
          <SelectList data={ingredientList} />
        </select>

        {/* <Select options={options} styles={styles} /> */}
      </form>
      {entities.data && (
        <ul className={css.mainPageList}>
          {entities.data.map(({ _id, drink, drinkThumb }) => (
            <DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb} />
          ))}
        </ul>
      )}
      {entities?.data?.length === 0 && <h3>No result</h3>}
    </>
  );
};
