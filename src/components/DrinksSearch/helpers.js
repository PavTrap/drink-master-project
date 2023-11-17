export const categoryOptions = categoryList => {
  const opts = categoryList.map(({ name }) => {
    return { value: `${name}`, label: `${name}` };
  });
  opts.unshift({ value: '', label: 'All categories' });
  return opts;
};

export const ingredientOptions = ingredientList => {
  const ingredients = ingredientList.map(({ title }) => {
    return { value: `${title}`, label: `${title}` };
  });
  ingredients.unshift({ value: '', label: 'Ingredients' });
  return ingredients;
};

export const filteredParams = obj => {
  const filteredParams = Object.fromEntries(Object.entries(obj).filter(([k, v]) => v));
  return filteredParams;
};

export function getObjFromParams(searchParams) {
  const params = Object.fromEntries(searchParams.entries());

  return params;
}
export function string2Params(string){
  return JSON.parse('{"' + decodeURI(string.substring(1).replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}')
}

export function findCategory(string, category){

if(string.includes('+')){
  return category.filter(item => item.value === string.replace('+', ' '))[0]
} else if (string){
  return category.filter(item => item.value === string)[0]
}else return
}
  