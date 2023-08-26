import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import css from './MainPage.module.css';

import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import { MainTitle } from 'components/MainTitle/MainTitle';
// import { useEffect } from 'react';

const HERO_TITLE = `Craft Your Perfect Drink with Drink Master`;
const BASE_URL = 'https://drink-master-back-end.onrender.com';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTg4ZmIyMjQ0Nzc2MjQ3ZmRjOTFmMiIsImlhdCI6MTY5MzA1NjA1NiwiZXhwIjoxNzI0NTkyMDU2fQ.5Q6N6FLJXdNQSnE2SnjhkzLvnwWX3iiohdZppQRRVhY'
// const setToken = token =>
//   (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const fetchDrinksInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Authorization': `Bearer ${TOKEN}`
	},
});

// export const setToken = token => {
// 	fetchDrinksInstance.defaults.headers.common['Authorization'] = token;
// };

// headers: { ...config.headers, Authorization: `Bearer ${token}` }

// export const fetchDrinks = createAsyncThunk(
//   'drinks/fetchAll',
//   async (_, { rejectWithValue }) => {
//     try {
// 			const { data} = await fetchDrinksInstance('/api/recipes');
// 			console.log(data[0].data);
// 			return data[0].data;
//     } catch (e) {
//       console.log(e);
//       return rejectWithValue(e.response.data.message);
//     }
//   }
// );

// setToken(TOKEN);


export const fetchDrinks = async () => {
	try {
		const { data } = await fetchDrinksInstance('/api/recipes/main-page');
		// console.log(res);
		console.log(data);
		// console.log(data.data);
		return data;
	} catch (e) {
		console.log(e);
	}
}

export const DrinkCard = ({ drink, drinkThumb }) =>
(<li >
	<img src={drinkThumb} alt='drink foto' height={400} />
	<p>{drink}</p>
	<a href='ingredients'><p>ingredients</p></a>
</li>)


const MainPage = () => {
	const [allDrinks, setAllDrinks] = useState([]);
	// const [ordinaryDrinks, setOrdinaryDrinks] = useState([]);
	// const dispatch = useDispatch();
	// const isLoading = useSelector(getIsLoading);
	// const error = useSelector(getError);
	// const isLoginned = useSelector(getIsLoginned)

	useEffect(() => {
		fetchDrinks()
			.then(res => setAllDrinks(res))
			.catch(err => console.log(err))
	}, []);

	const findOrdinaryDrinks = drinks => {
		return drinks.filter(drink => drink.category === "Ordinary Drink");
	};

	const ordinaryDrinks = findOrdinaryDrinks(allDrinks);
	const fistOrdinaryDrink = ordinaryDrinks[0];

	console.log(fistOrdinaryDrink);

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
				<ul className={css.mainPageList}>
					{/* {ordinaryDrinks[0].items.map(({ drink, drinkThumb, _id }) => (
						<DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb}></DrinkCard>
					))} */}
				</ul>
				<h2>Cocktail</h2>
				<h2>Shake</h2>
				<h2>Other/Unknow</h2>
				{/* {error && <h3>{error}</h3>} */}

				<a href="drinks">Other drinks</a>
			</main>
		</>
	);
};

export default MainPage;
