import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import css from './Paginator.module.css';
import usePagination from 'hooks/usePagination';
import useWindowSize from 'hooks/useWindowSize';

export const Paginator = ({ pages: { page, totalPages }, onChangePage }) => {
  const { width } = useWindowSize();
  const startPage = 1;
  const lastPage = totalPages;
  const { numbers, DOTS, shouldRenderLeftDots, shouldRenderRightDots } = usePagination(totalPages, page, width);
  const isEnd = page === lastPage ? true : false;
  const isStart = page === startPage ? true : false;

  window.scrollTo({ top: 0, behavior: 'smooth' });
console.log(onChangePage);
  return (
    <div className={css.paginatorContainer}>
      <button type="button" onClick={() => onChangePage(page - 1)} className={css.button} disabled={isStart}>
        <RiArrowLeftSLine className={css.buttonIcon} />
      </button>
      <ul className={css.pagesList}>
        <li key={startPage}>
          <button type="button" onClick={() =>onChangePage(startPage)} className={`${css.pageButton} ${page === 1 && css.active}`}>
            {startPage}
          </button>
        </li>
        {shouldRenderLeftDots && (
          <li key="leftDots" className={css.dots}>
            {DOTS}
          </li>
        )}
        {numbers.map(number => (
          <li key={number}>
            <button type="button" onClick={onChangePage(number)} className={`${css.pageButton} ${page === number && css.active}`}>
              {number}
            </button>
          </li>
        ))}
        {shouldRenderRightDots && (
          <li key="rightDOTS" className={css.dots}>
            {DOTS}
          </li>
        )}
        <li key={lastPage}>
          <button
            type="button"
            onClick={() => onChangePage(lastPage)}
            className={`${css.pageButton} ${page === lastPage && css.active}`}
          >
            {lastPage}
          </button>
        </li>
      </ul>
      <button type="button" onClick={() => onChangePage(page + 1)} className={css.button} disabled={isEnd}>
        <RiArrowRightSLine className={css.buttonIcon} />
      </button>
    </div>
  );
};
