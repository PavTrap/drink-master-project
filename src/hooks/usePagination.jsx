const usePagination = (totalPages, page, width) => {
  function calculateVisibleNumbers(windowWidth) {
    let count = 3;
    if (windowWidth >= 768 && width < 1440) count = 5;
    else if (windowWidth > 1440) count = 7;
    return count;
  }

  const maxVisiblePageNumders = calculateVisibleNumbers(width);

  function countStart(currentPage, total, max) {
    if (currentPage === 1 || total < max || currentPage <= Math.floor(max / 2)) return 1;
    if (currentPage === total) return total - max - 1;
    if (currentPage > total - max) return total - max;
    return currentPage - Math.floor(max / 2);
  }

  const startPage = countStart(page, totalPages, maxVisiblePageNumders);

  function countEnd(total, max, start) {
    if (total === max) return total - 1;
    if (start === 1) return max + 1;
    if (start + max >= total || start === total) return total - 1;
    return start + max;
  }

  const lastPage = countEnd(totalPages, maxVisiblePageNumders, startPage);

  function countPaginationItems(start, end) {
    let items = [];
    for (let i = start; i < end; i++) {
      items.push(i + 1);
    }
    return items;
  }

  const numbers = countPaginationItems(startPage, lastPage);
  const DOTS = '...';

  function countShouldRenderDots(max, start, total, last) {
    let shouldRenderLeftDots = false;
    let shouldRenderRightDots = false;
    if (max === 3) {
      shouldRenderLeftDots = start >= Math.floor(max / 2) + 1 ? true : false;
      shouldRenderRightDots = last < total - Math.floor(max / 2) - 1 ? true : false;
    }
    if (max === 5) {
      shouldRenderLeftDots = start >= Math.floor(max / 2) ? true : false;
      shouldRenderRightDots = last < total - Math.floor(max / 2) ? true : false;
    }
    if (max === 7) {
        shouldRenderLeftDots = start >= Math.floor(max / 2) ? true : false;
        shouldRenderRightDots = last <= total - Math.floor(max / 2) ? true : false;
      }
    return { shouldRenderLeftDots, shouldRenderRightDots };
  }

  const { shouldRenderLeftDots, shouldRenderRightDots } = countShouldRenderDots(maxVisiblePageNumders, startPage, totalPages, lastPage);

  return {
    numbers,
    DOTS,
    shouldRenderLeftDots,
    shouldRenderRightDots,
  };
};

export default usePagination;
