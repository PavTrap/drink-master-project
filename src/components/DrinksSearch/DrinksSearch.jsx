import { useEffect } from 'react';
import css from './DrinksSearch.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchDrinks, fetchIngredients } from 'redux/Drinks/DrinksOperation';
import cssMainPage from '../../pages/MainPage/MainPage.module.css';
import Select from 'react-select';
import debounce from 'lodash.debounce';
import { selectStyles } from './selectStyles';
// import { useLocation, useNavigate } from 'react-router-dom';
import Dots from 'components/Spinner/Dots';
import { Paginator } from 'components/Paginator/Paginator';
import { Link } from 'react-router-dom';

const SearchSvg = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
        stroke="#F3F3F3"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17.5 17.5L13.875 13.875" stroke="#F3F3F3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const DrinksSearch = () => {
  const { categoryList, entities, ingredientList, isLoading, lastRequest } = useSelector(state => state.drinks);
  const dispatch = useDispatch();
  const drinksDispatch = useDispatch();
  // const navigate = useNavigate()
  // const location = useLocation();



  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchIngredients());
  }, [dispatch]);

  useEffect(() => {
    drinksDispatch(fetchDrinks({}));
  }, [drinksDispatch]);

  const debouncedHandleChange = debounce(payload => {
    drinksDispatch(fetchDrinks({ word: payload }));
  }, 1000);

  const handleChange = event => {
    const payload = event.currentTarget.value;
    if (payload === '') {
      console.log('should EXIT');
      return;
    }
    console.log('не дошдло')
    debouncedHandleChange(payload);
  };

  const handleChangeSelectCategory = selectedoption => {
    drinksDispatch(fetchDrinks({ category: selectedoption.label }));
  };

  const handleChangeSelectIngredient = selectedoption => {
    drinksDispatch(fetchDrinks({ ingredient: selectedoption.label }));
  };

  // const SelectList = ({ data }) => {
  //   const arr = [];
  //   data.forEach(elem => {
  //     arr.push(<option key={elem._id}>{elem.name || elem.title}</option>);
  //   });
  //   return arr;
  // };

  const changePage = page => {
    return fetchDrinks({ page, lastRequest });
  };

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

  // const navigateToRecipe = () => {
  //   const moveTo = location.pathname.replace(/\/[^/]+$/, '/recipe')
  //   console.log('moveTo', moveTo)
  //   navigate(moveTo)
  //   // navigate(`/recipe`)
  // }

  const DrinkCard = ({ drink, drinkThumb }) => (
    <li>
      <img src={drinkThumb} alt="drink" height={400} />
      <div className={cssMainPage.card_text_wrapper}>
        <p className={cssMainPage.card_name}>{drink}</p>
        <Link className={cssMainPage.card_link} to="/recipe">
          <p className={cssMainPage.ingredients_text}>ingredients</p>
        </Link>
      </div>
    </li>
  );

  return (
    <>
      <form className={css.drinkRequestForm}>
        <div className={css.inputContainer}>
          <input onChange={handleChange} className={css.inputDrinks} placeholder="Enter the text" />
          <SearchSvg className={css.searchSvg} />
        </div>

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
      <div className={css.responseContainer}>
        {entities.data && !isLoading && (
          <ul className={css.mainPageList}>
            {entities.data.map(({ _id, drink, drinkThumb }) => (
              <DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb} />
            ))}
          </ul>
        )}

        {isLoading && !entities.data &&<div styles={{width: "100vw", height: "100vh"}}><Dots className={css.loading} /></div>}
        {entities?.data?.length === 0 && isLoading === false && <h3>No result</h3>}

        {/* <Paginator pages={pages } onChangePage={ changePage} /> */}
        {entities?.count?.totalPages > 1 && <Paginator pages={{page: entities.count.page, totalPages: entities.count.totalPages}} onChangePage={changePage} />}
      </div>
    </>
  );
};
