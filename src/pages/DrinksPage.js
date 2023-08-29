import { DrinksSearch } from 'components/DrinksSearch/DrinksSearch';
// import { MainTitle } from '../components/MainTitle/MainTitle';
import css from '../components/DrinksSearch/DrinksSearch.module.css';

export default function DrinksPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Drinks </h1>
      {/* <MainTitle title="Drinks" className={css.title} /> */}
      <DrinksSearch />
    </div>
  );

  // return <DrinksSearch />
}
