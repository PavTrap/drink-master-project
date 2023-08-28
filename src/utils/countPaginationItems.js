export function countPaginationItems(pages) {
  let items = []
  for (let i = 0; i < pages; i++) {
    items.push(i + 1);
  }
  return items;
}
