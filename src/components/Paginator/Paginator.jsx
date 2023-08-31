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
