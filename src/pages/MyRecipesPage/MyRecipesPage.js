import { useDispatch, useSelector } from 'react-redux';
import { getMyRecipes } from 'redux/MyRecipe/MyRecipeSelector';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { useLocation } from 'react-router-dom';
import { fetchMyRecipes } from 'redux/MyRecipe/MyRecipeOperation';
import { useEffect } from 'react';
import { Paginator } from 'components/Paginator/Paginator';

export default function MyRecipesPage() {
  const recipes = useSelector(getMyRecipes);
  const items = recipes.data;
  const pages = recipes.count;
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMyRecipes());
  }, [dispatch]);
  return (
    <>
      <MainTitle title="My recipes" />
      {items.length !== 0 && (
        <>
          <RecipesList recipes={items} state={{ from: location }} />
          <Paginator pages={pages}/>
        </>
      )}
    </>
  );
}
// const {
//   onPageChange,
//   totalCount,
//   siblingCount = 1,
//   currentPage,
//   pageSize,
//   className
// } = props;

// const paginationRange = usePagination({
//   currentPage,
//   totalCount,
//   siblingCount,
//   pageSize
// });

// if (currentPage === 0 || paginationRange.length < 2) {
//   return null;
// }

// const onNext = () => {
//   onPageChange(currentPage + 1);
// };

// const onPrevious = () => {
//   onPageChange(currentPage - 1);
// };

// let lastPage = paginationRange[paginationRange.length - 1];
// return (
//   <ul
//     className={classnames('pagination-container', { [className]: className })}
//   >
//     <li
//       className={classnames('pagination-item', {
//         disabled: currentPage === 1
//       })}
//       onClick={onPrevious}
//     >
//       <div className="arrow left" />
//     </li>
//     {paginationRange.map(pageNumber => {
//       if (pageNumber === DOTS) {
//         return <li className="pagination-item dots">&#8230;</li>;
//       }

//       return (
//         <li
//           className={classnames('pagination-item', {
//             selected: pageNumber === currentPage
//           })}
//           onClick={() => onPageChange(pageNumber)}
//         >
//           {pageNumber}
//         </li>
//       );
//     })}
//     <li
//       className={classnames('pagination-item', {
//         disabled: currentPage === lastPage
//       })}
//       onClick={onNext}
//     >
//       <div className="arrow right" />
//     </li>
//   </ul>
// );
// };