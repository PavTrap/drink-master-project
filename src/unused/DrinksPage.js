import { DrinksSearch } from 'components/DrinksSearch/DrinksSearch';
import { MainTitle } from '../components/MainTitle/MainTitle';
import css from '../components/DrinksSearch/DrinksSearch.module.css';

export default function DrinksPage() {
  return (
    <div className={css.container}>
      <MainTitle title="Drinks" />
      <DrinksSearch />
    </div>
  );
}
