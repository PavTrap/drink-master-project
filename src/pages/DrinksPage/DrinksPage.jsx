import { DrinksSearch } from 'components/DrinksSearch/DrinksSearch';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import css from './DrinksPage.module.css';
import useDrinks from 'hooks/useDrinks';
import { readFromLocalStore } from 'helpers/localStorageApi';

export default function DrinksPage({ param, updateState }) {
  const { isLoading } = useDrinks();
  let isCached;
  if (readFromLocalStore('cache')) {
    isCached = readFromLocalStore('cache');
  }
  const handleUpdate = data => {
    updateState(data);
  };
  return (
    <section className={css.drinksContainer}>
      <MainTitle title="Drinks" isLoading={isLoading && !isCached.isExists} />
      <DrinksSearch search={param} updateState={handleUpdate} />
    </section>
  );
}
