export function countPaginationItems(pages) {
  let items = [];
  for (let i = 1; i < pages - 1; i++) {
    items.push(i + 1);
  }
  return items;
}
