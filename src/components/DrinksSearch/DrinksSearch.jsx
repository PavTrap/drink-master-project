import { useEffect, useState } from 'react';
import css from './DrinksSearch.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchDrinks, fetchIngredients } from 'redux/Drinks/DrinksOperation';
import Select from 'react-select';
import debounce from 'lodash.debounce';
import { selectStylesCoktails, selectStylesIngredients } from './selectStyles';
import { useNavigate } from 'react-router-dom';
import Dots from 'components/Spinner/Dots';
import { Paginator } from 'components/Paginator/Paginator';
import { useParams } from 'react-router-dom/dist';
import { SearchSvg} from './additionalComponents';

import DrinkItemCard from './DrinkItemCard/DrinkItemCard';



export const DrinksSearch = () => {
  const dispatch = useDispatch();
  const drinksDispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryList, entities, ingredientList, isLoading } = useSelector(state => state.drinks);
  const { categoryName } = useParams();
  const [category, setCategory] = useState(categoryName);
  const [ingredient, setIngredient] = useState('');
  const [q, setQ] = useState('');
  const [lastRequest, setLastRequest] = useState(category);

  // делает запрос за категориями и ингридиентами
  useEffect(() => {
    if (categoryList.length === 0) {
      dispatch(fetchCategories());
    }
    if (ingredientList.length === 0) {
      dispatch(fetchIngredients());
    }
  }, [dispatch, categoryList.length, ingredientList.length]);

  // ставит fetch по дефолту или берет с params, если есть
  useEffect(() => {
    if (categoryName === undefined) {
      setCategory('Cocktail');
    } else {
      setCategory(categoryName);
    }
  }, [categoryName]);

  // делает fetch по категории
  useEffect(() => {
    if (category !== undefined) {
      setLastRequest({ category });
      drinksDispatch(fetchDrinks({ category }));
    }
  }, [category, drinksDispatch]);

  // делает fetch по ингридиенту
  useEffect(() => {
    if (ingredient !== '') {
      setLastRequest({ ingredient });
      drinksDispatch(fetchDrinks({ ingredient }));
    }
  }, [ingredient, drinksDispatch]);

  // делает fetch по q
  useEffect(() => {
    if (q !== '') {
      setLastRequest({ q });
      drinksDispatch(fetchDrinks({ q }));
    }
  }, [q, drinksDispatch]);

  const debouncedHandleChange = debounce(payload => {
    setQ(payload);
  }, 1000);

  const handleChange = event => {
    const payload = event.currentTarget.value;
    if (payload === '') {
      return;
    }
    debouncedHandleChange(payload);
  };

  const handleChangeSelectCategory = selectedoption => {
    setCategory(selectedoption.label);
  };

  const handleChangeSelectIngredient = selectedoption => {
    navigate(`/drinks`);
    setIngredient(selectedoption.label);
  };

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

  return (
    <>
      <form className={css.drinkRequestForm}>
        <label className={css.inputContainer}>
          <input onChange={handleChange} className={css.inputDrinks} placeholder="Enter the text" />
          {window.innerWidth > 768 && <SearchSvg className={css.searchSvg} />}
        </label>

        <Select
          placeholder="All categories"
          options={selectListWithSelectReact(categoryList)}
          styles={selectStylesCoktails}
          onChange={handleChangeSelectCategory}
          maxMenuHeight={405}
        />
        <Select
          placeholder="Ingredients"
          options={selectListWithSelectReact(ingredientList)}
          styles={selectStylesIngredients}
          onChange={handleChangeSelectIngredient}
        />
      </form>
      <div className={css.responseContainer}>
        {entities.data && (
          <ul className={css.drinkCardContainer}>
            {entities.data.map(({ _id, drink, drinkThumb, ingredients }) => (
              <DrinkItemCard key={_id} drink={drink} drinkThumb={drinkThumb} id={_id} popup={ingredients}/>
            ))}
          </ul>
        )}

        {isLoading && <Dots className={css.loading} />}
        {entities?.data?.length === 0 && isLoading === false && <h3>No result</h3>}


        {entities?.count?.totalPages > 1 && (
          <Paginator pages={{ page: entities.count.page, totalPages: entities.count.totalPages }} onChangePage={changePage} />
        )}
      </div>
    </>
  );
};
