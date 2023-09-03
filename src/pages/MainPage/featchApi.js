import axios from "axios";
import setAuthHeader from "helpers/axiosHedder";
import { readFromLocalStore } from "helpers/localStorageApi";

export const fetchDrinks = async ()=> {
 
  const data = readFromLocalStore('persist:auth')
  const parsedPersistedToken = JSON.parse(data?.token)


    try {
      setAuthHeader(parsedPersistedToken)
      const { data } = await axios.get(`/api/recipes/main-page`);

      return data;
    } catch (e) {
      console.log(e);
    }
  };
  