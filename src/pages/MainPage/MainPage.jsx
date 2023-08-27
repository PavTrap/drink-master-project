import { useEffect, useState } from 'react';
// import { MainTitle } from 'components/MainTitle/MainTitle';
import css from './MainPage.module.css';
import axios from 'axios';

// const HERO_TITLE = 'Craft Your Perfect \n Drink with Drink Master';
const BASE_URL = 'https://drink-master-back-end.onrender.com';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTg4ZmIyMjQ0Nzc2MjQ3ZmRjOTFmMiIsImlhdCI6MTY5MzA3ODY5NSwiZXhwIjoxNzI0NjE0Njk1fQ.WmwrHdAin8J2FTpCqc3JrQk9-QREB7bcQbdGUDuRaLI'

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
	<div className={css.card_text_wrapper}>
		<p className={css.card_name}>{drink}</p>
		<a className={css.card_link} href='ingredients'><p className={css.ingredients_text}>ingredients</p></a>
	</div>
</li>)


const MainPage = () => {
	const [allDrinks, setAllDrinks] = useState(null);

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

	const getedDrinks = separateDrinks(allDrinks);

	return (
		<>
			<main className={css.main}>
				<section className={`${css.hero_section} ${css.section}`}>
					<h1 className={css.hero_title}>Craft Your Perfect<br /> Drink with Drink Master	</h1>
					<p className={css.main_p}>
						Unlock your inner mixologist with Drink Master, your one-<br />stop
						destination for exploring, crafting, and mastering the<br /> world's finest
						beverages.
					</p>
					<a className={css.button} href="add">Add recipe</a>
					{/* <img src="../public/main-page-img.png" alt='glass'/> */}
				</section>

				<section className={css.section}>
					{allDrinks &&
						<>
							<h2>Ordinary Drink</h2>
							<ul className={css.mainPageList}>
								{getedDrinks['ordinary drink'].map(({ drink, drinkThumb, _id }) => (
									<DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb}></DrinkCard>
								))}
							</ul>
						</>
					}
					{allDrinks &&
						<>
							<h2>Cocktail</h2>
							<ul className={css.mainPageList}>
								{getedDrinks.coctail.map(({ drink, drinkThumb, _id }) => (
									<DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb}></DrinkCard>
								))}
							</ul>
						</>
					}
					{allDrinks &&
						<>
							<h2>Shake</h2>
							<ul className={css.mainPageList}>
								{allDrinks[9].items.map(({ drink, drinkThumb, _id }) => (
									<DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb}></DrinkCard>
								))}
							</ul>
						</>
					}
					{allDrinks &&
						<>
							<h2>Other/Unknow</h2>
							<ul className={css.mainPageList}>
								{allDrinks[10].items.map(({ drink, drinkThumb, _id }) => (
									<DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb}></DrinkCard>
								))}
							</ul>
						</>
					}
					{allDrinks && <a className={`${css.button} ${css.other_drinks_btn}`} href="drinks">Other drinks</a>}
				</section>

			</main>
		</>
	);
};

export default MainPage;
