import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom/dist';
import Select from 'react-select';
import debounce from 'lodash.debounce';
// components
import Dots from 'components/Spinner/Dots';
import { Paginator } from 'components/Paginator/Paginator';
import { SearchSvg } from './additionalComponents';
import DrinkItemCard from './DrinkItemCard/DrinkItemCard';
import { NoRecipe } from 'components/NoRecipe/NoRecipe';
// redux
import { fetchCategories, fetchDrinks, fetchIngredients } from 'redux/Drinks/DrinksOperation';
import { changeDrinksPage } from 'redux/Drinks/DrinksSlice';
import useDrinks from 'hooks/useDrinks';
// styles
import { selectStylesCoktails, selectStylesIngredients } from './selectStyles';
import css from './DrinksSearch.module.css';

export const DrinksSearch = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams({ category: categoryName });

  const { categoryList, ingredientList, isLoading, entities, currentPage, totalPages } = useDrinks();

  const category = searchParams.get('category') || '';
  const ingredient = searchParams.get('ingredient') || '';
  const q = searchParams.get('q') || '';
  const page = searchParams.get('page') || 1;

  const categorySelectOptions = categoryList.map(({ name }) => {
    return { value: `${name}`, label: `${name}` };
  });
  const ingredientSelectOptions = ingredientList.map(({ title }) => {
    return { value: `${title}`, label: `${title}` };
  });

  // делает запрос за категориями и ингридиентами
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchIngredients());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchDrinks({ category, ingredient, q, page }));
  }, [dispatch, category, ingredient, q, page]);

  const debouncedHandleChange = e =>
    debounce(e => {
      setSearchParams({ q: e.target.value });
    }, 1000);

  return (
    <section>
      <form className={css.drinkRequestForm}>
        <label className={css.inputContainer}>
          <input id="inputSearch" onChange={debouncedHandleChange} className={css.inputDrinks} placeholder="Enter the text" />
          {window.innerWidth > 768 && <SearchSvg className={css.searchSvg} />}
        </label>

        <Select
          value={category}
          placeholder={category ? category : 'All categories'}
          options={categorySelectOptions}
          styles={selectStylesCoktails}
          onChange={e => {
            setSearchParams({ category: e.value });
          }}
          maxMenuHeight={405}
        />
        <Select
          value={ingredient}
          placeholder={ingredient ? ingredient : 'Ingredients'}
          options={ingredientSelectOptions}
          styles={selectStylesIngredients}
          onChange={e => {
            setSearchParams({ ingredient: e.value });
          }}
        />
      </form>
      <div className={css.responseContainer}>
        {entities && (
          <ul className={css.drinkCardContainer}>
            {entities.map(({ _id, drink, drinkThumb, ingredients }) => (
              <DrinkItemCard key={_id} drink={drink} drinkThumb={drinkThumb} id={_id} popup={ingredients} />
            ))}
          </ul>
        )}
        {isLoading && <Dots className={css.loading} />}
        {entities?.length === 0 && isLoading === false && <NoRecipe title={'No results'} />}
        {totalPages > 1 && <Paginator pages={{ page: currentPage, totalPages: totalPages }} onChangePage={changeDrinksPage} />}
      </div>
    </section>
  );
};
