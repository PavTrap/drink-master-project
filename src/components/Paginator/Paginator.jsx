import { useDispatch } from 'react-redux';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import css from './Paginator.module.css';
import usePagination from 'hooks/usePagination';
import useWindowSize from 'hooks/useWindowSize';

export const Paginator = ({ pages: { page, totalPages }, onChangePage }) => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const startPage = 1;
  const lastPage = totalPages;
  const { numbers, DOTS, shouldRenderLeftDots, shouldRenderRightDots } = usePagination(totalPages, page, width);
  const isEnd = page === lastPage ? true : false;
  const isStart = page === startPage ? true : false;
  return (
    <div className={css.paginatorContainer}>
      {!isStart && (
        <button type="button" onClick={() => dispatch(onChangePage(page - 1))} className={css.button}>
          <RiArrowLeftSLine className={css.buttonIcon} />
        </button>
      )}
      <ul className={css.pagesList}>
        <li key={startPage}>
          <button type="button" onClick={() => dispatch(onChangePage(startPage))} className={css.pageButton}>
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
            <button type="button" onClick={() => dispatch(onChangePage(number))} className={css.pageButton}>
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
          <button type="button" onClick={() => dispatch(onChangePage(lastPage))} className={css.pageButton}>
            {lastPage}
          </button>
        </li>
      </ul>
      {!isEnd && (
        <button type="button" onClick={() => dispatch(onChangePage(page + 1))} disabled={isEnd} className={css.button}>
          <RiArrowRightSLine className={css.buttonIcon} />
        </button>
      )}
    </div>
  );
};
