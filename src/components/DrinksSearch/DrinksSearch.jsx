import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom/dist';
import Select from 'react-select';
// components
import Dots from 'components/Spinner/Dots';
import { Paginator } from 'components/Paginator/Paginator';
import { SearchSvg } from './additionalComponents';
import DrinkItemCard from './DrinkItemCard/DrinkItemCard';
import { NoRecipe } from 'components/NoRecipe/NoRecipe';
// redux
import { fetchCategories, fetchDrinks, fetchIngredients } from 'redux/Drinks/DrinksOperation';
import { changeDrinksPage } from 'redux/Drinks/DrinksSlice';
// hooks
import useDrinks from 'hooks/useDrinks';
import useWindowSize from 'hooks/useWindowSize';
// styles
import { selectStylesCoktails, selectStylesIngredients } from './selectStyles';
import css from './DrinksSearch.module.css';

export const DrinksSearch = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoryList, ingredientList, isLoading, entities, currentPage, totalPages } = useDrinks();
  const [category, setCategory] = useState(categoryName || searchParams.get('category') || '');
  const [ingredient, setIngredient] = useState(searchParams.get('ingredient') || '');
  const [q, setQ] = useState(searchParams.get('q') || '');
  const [page, setPage] = useState(searchParams.get('page') || 1);
  const { width } = useWindowSize();

  const categorySelectOptions = categoryList.map(({ name }) => {
    return { value: `${name}`, label: `${name}` };
  });
  const ingredientSelectOptions = ingredientList.map(({ title }) => {
    return { value: `${title}`, label: `${title}` };
  });
  categorySelectOptions.unshift({ value: '', label: 'All categories' });
  ingredientSelectOptions.unshift({ value: '', label: 'Ingredients' });

  // делает запрос за категориями и ингридиентами
  useEffect(() => {
    if (categoryList.length === 0) dispatch(fetchCategories());
    if (ingredientList.length === 0) dispatch(fetchIngredients());
  }, [dispatch, ingredientList, categoryList]);

  useEffect(() => {
    setPage(currentPage);
    dispatch(fetchDrinks({ category, page, q, ingredient }));
  }, [dispatch, category, page, q, ingredient, currentPage]);

  // hanglers for inputs
  const handleCategoryChange = e => {
    setSearchParams({ category: e.value });
    setCategory(e.value);
    dispatch(changeDrinksPage(1));
  };
  const handleIngredientChange = e => {
    setSearchParams({ ingredient: e.value });
    setIngredient(e.value);
    dispatch(changeDrinksPage(1));
  };

  return (
    <div>
      <form className={css.drinkRequestForm}>
        <label className={css.inputContainer}>
          <input
            value={q}
            id="inputSearch"
            onChange={e => {
              setQ(e.target.value);
              setSearchParams({ q: e.target.value });
              dispatch(changeDrinksPage(1));
            }}
            className={css.inputDrinks}
            placeholder="Enter the text"
          />
          {width >= 768 && <SearchSvg className={css.searchSvg} />}
        </label>
        <Select
          value={category}
          placeholder={category ? category : 'All categories'}
          options={categorySelectOptions}
          styles={selectStylesCoktails}
          onChange={e => handleCategoryChange(e)}
          maxMenuHeight={405}
        />
        <Select
          value={ingredient}
          placeholder={ingredient ? ingredient : 'Ingredients'}
          options={ingredientSelectOptions}
          styles={selectStylesIngredients}
          onChange={e => handleIngredientChange(e)}
        />
      </form>
      {entities?.length > 0 && (
        <ul className={css.drinkCardContainer}>
          {entities.map(({ _id, drink, drinkThumb, ingredients }) => (
            <DrinkItemCard key={_id} drink={drink} drinkThumb={drinkThumb} id={_id} popup={ingredients} />
          ))}
        </ul>
      )}
      {isLoading && <Dots className={css.loading} />}
      {entities?.length === 0 && isLoading === false && (
        <div className={css.noDrinksContainer}>
          <NoRecipe title={'No results'} />
        </div>
      )}
      {totalPages > 1 && <Paginator page={currentPage} totalPages={totalPages} onChangePage={changeDrinksPage} />}
    </div>
  );
};