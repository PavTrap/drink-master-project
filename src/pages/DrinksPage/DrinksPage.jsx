import { DrinksSearch } from 'components/DrinksSearch/DrinksSearch';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import css from './DrinksPage.module.css';

export default function DrinksPage() {
  return (
    <section className={css.drinksContainer}>
      <MainTitle title="Drinks" />
      <DrinksSearch />
    </section>
  );
}
