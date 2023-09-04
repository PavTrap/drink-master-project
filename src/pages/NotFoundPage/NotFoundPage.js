import { NoRecipe } from 'components/NoRecipe/NoRecipe';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <section className={css.notFoundContainer}>
      <NoRecipe title={''} />
      <div className={css.textContainer}>
        <span className={css.span}>4</span>
        <span className={css.span}>4</span>
      </div>
    </section>
  );
}
