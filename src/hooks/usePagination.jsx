const usePagination = (totalPages, page, width) => {
  function calculateVisibleNumbers(windowWidth) {
    let count = 3;
    if (windowWidth > 768 && width < 1440) count = 5;
    else if (windowWidth > 1440) count = 8;
    return count;
  }

  const maxVisiblePageNumders = calculateVisibleNumbers(width);

  function countStart(currentPage, total, max) {
    let start = 1;
    if (currentPage === 1) start = 1;
    else if (total < max) start = 1;
    else if (currentPage >= max) start = total - max;
    else start = currentPage - 1;
    return start;
  }

  const startPage = countStart(page, totalPages, maxVisiblePageNumders);

  function countEnd(total, max, start) {
    let end = 0;
    if (total === 0) end = 1;
    else if (total < max) end = total-1;
    else end = Math.min(start + max, total-1);
    return end;
  }

  const lastPage = countEnd(totalPages, maxVisiblePageNumders, startPage);

  function countPaginationItems(start, end) {
    let items = [];
    for (let i = start; i < end-1; i++) {
      items.push(i + 1);
    }
    return items;
  }

  const numbers = countPaginationItems(startPage, lastPage);
  const DOTS = '...';
  const shouldRenderLeftDots = startPage + page > 3 ? true : false;
  const shouldRenderRightDots = lastPage - page >= lastPage - maxVisiblePageNumders ? true : false;

  return {
    numbers,
    DOTS,
    shouldRenderLeftDots,
    shouldRenderRightDots,
  };
};

export default usePagination;
