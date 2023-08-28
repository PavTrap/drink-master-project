import { useEffect } from 'react';
import css from './DrinksSearch.module.css';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchDrinks, fetchGlasses } from 'redux/Drinks/DrinksOperation';

export const DrinksSearch = () => {
 
  // should add entities and filter,
  const { categoryList, glasses } = useSelector(state => state.drinks);
  console.log('categories', categoryList)
  const dispatch = useDispatch();

  
  
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
      </div>
    </>
  );
};
