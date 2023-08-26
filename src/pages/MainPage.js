import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import css from './MainPage.module.css';

import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import { MainTitle } from 'components/MainTitle/MainTitle';
// import { useEffect } from 'react';

const HERO_TITLE = 'Craft Your Perfect Drink with Drink Master';
const BASE_URL = 'https://drink-master-back-end.onrender.com';
const TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTg4ZmIyMjQ0Nzc2MjQ3ZmRjOTFmMiIsImlhdCI6MTY5MzA0MTAxNiwiZXhwIjoxNjkzMTI3NDE2fQ.qcMbFm1RKbyOrGxOad6AWcgEJ7LWbyCzQ-wV8kqXck8'

// const setToken = token =>
//   (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const fetchRecipesInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Authorization': `Bearer ${TOKEN}`
	},
});

// export const setToken = token => {
// 	fetchRecipesInstance.defaults.headers.common['Authorization'] = token;
// };

// headers: { ...config.headers, Authorization: `Bearer ${token}` }

// export const fetchRecipes = createAsyncThunk(
//   'drinks/fetchAll',
//   async (_, { rejectWithValue }) => {
//     try {
// 			const { data} = await fetchRecipesInstance('/api/recipes');
// 			console.log(data[0].data);
// 			return data[0].data;
//     } catch (e) {
//       console.log(e);
//       return rejectWithValue(e.response.data.message);
//     }
//   }
// );

// setToken(TOKEN);


export const fetchRecipes = async () => {
	try {
		const { data } = await fetchRecipesInstance('/api/recipes');
		console.log(data[0].data);
		return data[0].data;
	} catch (e) {
		console.log(e);
	}
}

export const DrinkCard = ({ drink, drinkThumb }) =>
(<li >
	<img href={drinkThumb} alt='drink foto' />
	<p>{drink}</p>
	<a href='ingredients'><p>ingredients</p></a>
</li>)


const MainPage = () => {
	const [drinks, setDrinks] = useState([]);
	// const dispatch = useDispatch();
	// const isLoading = useSelector(getIsLoading);
	// const error = useSelector(getError);
	// const isLoginned = useSelector(getIsLoginned)

	useEffect(() => {
		fetchRecipes()
			.then(data => setDrinks(data))
	}, []);


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
				<ul>
					{drinks.map(({ drink, ingredients, drinkThumb, _id }) => (
						<DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb}></DrinkCard>
					))}
				</ul>
				<h2>Cocktail</h2>
				<h2>Shake</h2>
				<h2>Other/Unknow</h2>
				{/* {error && <h3>{error}</h3>} */}
			</main>
		</>
	);
};

export default MainPage;
