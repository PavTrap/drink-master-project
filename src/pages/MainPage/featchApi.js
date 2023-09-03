import axios from "axios";
// import setAuthHeader from "helpers/axiosHedder";
// import useAuth from "hooks/useAuth";


export const fetchDrinks = async (page = 1)=> {
    // const { ReduxToken } = useAuth();
    try {
    //   setAuthHeader(ReduxToken);
      const { data } = await axios.get(`/api/recipes/main-page?page=${page}`);

      return data;
    } catch (e) {
      console.log(e);
    }
  };
  