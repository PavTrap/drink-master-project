import { useDispatch} from "react-redux";
import { countPaginationItems } from "utils/countPaginationItems";
import css from './Paginator.module.css'

export const Paginator = ({pages, onChangePage}) => {
  const dispatch = useDispatch();
  const numbers = countPaginationItems(pages.totalPages);
  return (<div className={css.paginatorContainer}>
    <button onClick={()=>dispatch(onChangePage(pages.page - 1))}>Prev</button>
    <ul className={css.pagesList}>{numbers.map(number=><li key={number} onClick={()=>dispatch(onChangePage(number))}>{number}</li>)}</ul>
    <button onClick={()=>dispatch(onChangePage(pages.page + 1))}>Next</button>
  </div>
  )
};

