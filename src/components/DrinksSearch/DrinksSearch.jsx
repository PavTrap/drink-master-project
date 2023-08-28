import { useEffect } from 'react';
import css from './DrinksSearch.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchDrinks, fetchGlasses } from 'redux/Drinks/DrinksOperation';
import { DrinkCard } from 'pages/MainPage/MainPage';

export const DrinksSearch = () => {
  // should add filter,
  const { categoryList, entities, glasses } = useSelector(state => state.drinks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDrinks({}));
    dispatch(fetchCategories());
    dispatch(fetchGlasses());
  }, [dispatch]);

  // const debouncedHandleChange = _.debounce((payload) => {
  //   dispatch(changeFilter(payload));
  // }, 2000);

  // const handleChange = (event) => {
  //   const payload = event.currentTarget.value;
  //   debouncedHandleChange(payload);
  // };

  const handleChangeSelect = event => {
    const item = event.currentTarget;
    
    dispatch(fetchDrinks({ [item.name]: item.value }));
  };

  // const handleChangeSelectIngredient = event => {
  //   console.log('event.currentTarget.name', event.currentTarget.name);
  //   const payload = event.currentTarget.value;
  //   dispatch(fetchDrinks({ ingredient: payload }));
  // };

  const SelectList = ({ data }) => {
    const arr = [];
    data.forEach(elem => {
      arr.push(<option key={elem._id}>{elem.name}</option>);
    });
    // console.log("arr.join('')", arr.join(''));
    return arr;
  };

  // при выборк конкретной категории
  // const handleCategory = event => {
  //   const payload =
  // }

  return (
    <div >
      <form className={css.drinkRequestForm}>
        <input className={css.inputDrinks} placeholder="Enter the text" />
        <select name="category" onChange={handleChangeSelect} className={css.selsctDrinks}>
          <option value="categoryMain">All categories</option>

          <SelectList data={categoryList} />
        </select>

        <select name="ingredient" onChange={handleChangeSelect} className={css.selsctDrinks}>
          <option value="">Ingredients</option>
          <SelectList data={glasses} />
        </select>
      </form>
      {entities.data && (
        <ul className={css.mainPageList}>
          {entities.data.map(({ _id, drink, drinkThumb }) => (
            <DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb} />
          ))}
        </ul>
      )}
      {
        entities.data.length === 0 && <h3>No result</h3>
      }
    </div>
  );
};
// add some logic with requests of categories
