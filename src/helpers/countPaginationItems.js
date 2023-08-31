export function countPaginationItems(maxItems, currentPage) {
  let items = [];
  const b = currentPage - Math.round(maxItems / 2);
  if (b > 0) {
    for (let i = b; i <= maxItems; i++) {
      items.push(i + 1);
    }
    return items;
  } else {
    for (let i = currentPage; i <= maxItems; i++) {
      items.push(i + 1);
    }
    return items;
  }
}
