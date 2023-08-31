import { useDispatch } from 'react-redux';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { countPaginationItems } from 'helpers/countPaginationItems';
import css from './Paginator.module.css';
import useWindowSize from 'hooks/useWindowSize';

export const Paginator = ({ pages: { page, totalPages }, onChangePage }) => {
  function calculateVisibleNumbers(windowWidth) {
    let count = 3;
    if (windowWidth > 768 && width < 1440) count = 5;
    else if (windowWidth > 1440) count = 8;
    return count;
  }
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const maxVisiblePageNumders = calculateVisibleNumbers(width);
  const numbers = countPaginationItems(maxVisiblePageNumders, page);
  const startPage = 1;
  const lastPage = totalPages;
  const DOTS = '...';
  const shouldRenderLeftDots = startPage + page > maxVisiblePageNumders + 2 ? true : false;
  const shouldRenderRightDots = lastPage - page > maxVisiblePageNumders - 2 ? true : false;
  return (
    <div className={css.paginatorContainer}>
      <button onClick={() => dispatch(onChangePage(page - 1))}>
        <RiArrowLeftSLine />
      </button>
      <ul className={css.pagesList}>
        <li key={startPage}>
          <button onClick={() => dispatch(onChangePage(startPage))}>{startPage}</button>
        </li>
        {shouldRenderLeftDots && <li key="leftDots">{DOTS}</li>}
        {numbers.map(number => (
          <li key={number}>
            <button onClick={() => dispatch(onChangePage(number))}>{number}</button>
          </li>
        ))}
        {shouldRenderRightDots && <li key="rightDOTS">{DOTS}</li>}
        <li key={lastPage}>
          <button onClick={() => dispatch(onChangePage({ lastPage }))}>{lastPage}</button>
        </li>
      </ul>
      <button onClick={() => dispatch(onChangePage(page + 1))}>
        <RiArrowRightSLine />
      </button>
    </div>
  );
};
