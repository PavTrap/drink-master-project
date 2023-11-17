import { DrinksSearch } from 'components/DrinksSearch/DrinksSearch';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import css from './DrinksPage.module.css';
import useDrinks from 'hooks/useDrinks';

export default function DrinksPage({ param, updateState }) {
  const {isLoading } = useDrinks();
  const handleUpdate = data => {
    updateState(data);
  };
  return (
    <section className={css.drinksContainer}>
      <MainTitle title="Drinks" isLoading={isLoading}/>
      <DrinksSearch search={param} updateState={handleUpdate} />
    </section>
  );
}
