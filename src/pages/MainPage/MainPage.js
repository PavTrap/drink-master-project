import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import css from './MainPage.module.css';
import { drinks } from './drinks';

import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import { MainTitle } from 'components/MainTitle/MainTitle';
// import { useSelector } from 'react-redux';

const HERO_TITLE = `Craft Your Perfect Drink with Drink Master`;
const BASE_URL = 'https://drink-master-back-end.onrender.com';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTg4ZmIyMjQ0Nzc2MjQ3ZmRjOTFmMiIsImlhdCI6MTY5MzA3ODY5NSwiZXhwIjoxNzI0NjE0Njk1fQ.WmwrHdAin8J2FTpCqc3JrQk9-QREB7bcQbdGUDuRaLI'
// const setToken = token =>
//   (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const fetchDrinksInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Authorization': `Bearer ${TOKEN}`
	},
});


export const fetchDrinks = async () => {
	try {
		const { data } = await fetchDrinksInstance('/api/recipes/main-page');
		console.log(data);
		return data;
	} catch (e) {
		console.log(e);
	}
};

export const DrinkCard = ({ drink, drinkThumb }) =>
(<li >
	<img src={drinkThumb} alt='drink foto' height={400} />
	<p>{drink}</p>
	<a href='ingredients'><p>ingredients</p></a>
</li>)



const MainPage = () => {
	const [allDrinks, setAllDrinks] = useState(null);
	// const [ordinaryDrinks, setOrdinaryDrinks] = useState(null);
	// const [cocktails, setCocktails] = useState(null);
	// const [shakes, setshakes] = useState(null);
	// const [otherDrinks, setOtherDrinks] = useState(null);
	// const dispatch = useDispatch();

	// const findOrdinaryDrinks = drinks => {
	// 	const allOrdinaryDrinks = drinks.filter(drink => drink.category === "Ordinary Drink");
	// 	return allOrdinaryDrinks[0];
	// };

	// const ordinaryDrink = findOrdinaryDrinks(allDrinks);
	// console.log(ordinaryDrink)

	useEffect(() => {
		fetchDrinks()
			.then(res => {
				setAllDrinks(res);
			})
			.catch(err => console.log(err))
	}, []);


	const separateDrinks = drinks => {
		if (!allDrinks) return;

		const ordinaryDrinks = [];
		const cocktails = [];
		const shakes = [];
		const otherDrinks = [];

		for (const drink of drinks) {
			if (drink.category === "Ordinary Drink") ordinaryDrinks.push(drink);
			if (drink.category === "Cocktail") cocktails.push(drink);
			if (drink.category === "Snake") shakes.push(drink);
			if (drink.category === "Other/Unknow") otherDrinks.push(drink);
		};

		const getedDrinks = {
			"ordinary drink": ordinaryDrinks[0].items,
			"coctail": cocktails[0].items,
			"shake": shakes[0].items,
			"other/unknown": otherDrinks[0].items,
		};

		console.log(getedDrinks);
		return getedDrinks;
	};

	// separateDrinks(allDrinks);
	const getedDrinks = separateDrinks(allDrinks);
	// console.log(getedDrinks['ordinary drink']);


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
				{allDrinks && <ul className={css.mainPageList}>
					{getedDrinks['ordinary drink'].map(({ drink, drinkThumb, _id }) => (
						<DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb}></DrinkCard>
					))}
				</ul>}
				<h2>Cocktail</h2>
				{allDrinks && <ul className={css.mainPageList}>
					{getedDrinks.coctail.map(({ drink, drinkThumb, _id }) => (
						<DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb}></DrinkCard>
					))}
				</ul>}
				<h2>Shake</h2>
				{allDrinks && <ul className={css.mainPageList}>
					{getedDrinks.shake.map(({ drink, drinkThumb, _id }) => (
						<DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb}></DrinkCard>
					))}
				</ul>}
				<h2>Other/Unknow</h2>
				{allDrinks && <ul className={css.mainPageList}>
					{getedDrinks['other/unknown'].map(({ drink, drinkThumb, _id }) => (
						<DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb}></DrinkCard>
					))}
				</ul>}
				{/* {error && <h3>{error}</h3>} */}

				<a href="drinks">Other drinks</a>
			</main>
		</>
	);
};

export default MainPage;
