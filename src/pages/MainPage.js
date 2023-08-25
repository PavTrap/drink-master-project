// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import css from './MainPage.module.css';

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { MainTitle } from 'components/MainTitle/MainTitle';
// import { useEffect } from 'react';

const HERO_TITLE = 'Craft Your Perfect Drink with Drink Master';
const BASE_URL = 'http://drink-master-back-end.onrender.com';
// const TOKEN =
  // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTg4ZmIyMjQ0Nzc2MjQ3ZmRjOTFmMiIsImlhdCI6MTY5Mjk2Njk0MiwiZXhwIjoxNjkzMDUzMzQyfQ.5nAJzIaRgw6cllrWIJeBlTfXc05A9NpHFHI6v9KRrDk';

// const setAuthHeader = token =>
//   (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const fetchDrinksInstance = axios.create({
  baseURL: BASE_URL,
});

export const fetchDrinks = createAsyncThunk(
  'drinks/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchDrinksInstance('/api/recipes');
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response.data.message);
    }
  }
);



const MainPage = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  // const isLoginned = useSelector(getIsLoginned)

  // useEffect(() => {
  // 	dispatch(fetchDrinks())
  // }, [dispatch, isLoginned])

  // useEffect(() => {
  //   fetchDrinks().then(data => console.log(data));
  // }, []);

  return (
    <>
      <main>
        <MainTitle title={HERO_TITLE} />
        <p>
          Unlock your inner mixologist with Drink Master, your one-stop
          destination for exploring, crafting, and mastering the world's finest
          beverages.
        </p>
        <a href="add">Add recipe</a>
        {/* <Link to="/add">Add recipe</Link> */}
        <h2>Ordinary Drink</h2>
        <h2>Cocktail</h2>
        <h2>Shake</h2>
        <h2>Other/Unknow</h2>
        {/* {error && <h3>{error}</h3>} */}
      </main>
    </>
  );
};

export default MainPage;
