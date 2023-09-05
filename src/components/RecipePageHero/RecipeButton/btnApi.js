import axios from 'axios';

export async function addToFavs(id) {
  const addResponse = await axios.post(`api/favorite`, { cocktailId: id });
  return addResponse;
}

export async function removeFromFavs(id) {
  const delResponse = await axios.delete(`api/favorite`, { data: { cocktailId: id } });
  return delResponse;
}

export async function checkCurrent(id) {
  const {data} = await axios.get(`api//recipes/${id}`);
  return data.favs;
}
