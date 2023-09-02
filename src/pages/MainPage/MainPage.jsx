import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import imgSrc from './img/plug-glass-400x400.png'
import { DrinkCard } from 'components/DrinkCard/DrinkCard';
import { fetchDrinks } from 'helpers/fetchDrinks';
import css from './MainPage.module.css';
import { DrinkCardPlug } from 'components/DrinkCardPlug/DrinkCardPlug';

export const PreviewDrinks = ({ children }) =>
(
	<>
		{children}
	</>
);

export const addYourCoctail = ({ children }) =>
(
	<>
		{children}
	</>
);

const MainPage = () => {
	const [allDrinks, setAllDrinks] = useState(null);
	const { ReduxToken } = useAuth();

	useEffect(() => {
		fetchDrinks(ReduxToken)
			.then(res => {
				setAllDrinks(res);
			})
			.catch(err => console.log(err));
	}, [ReduxToken]);

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
		return getedDrinks;
	};

	const getedDrinks = separateDrinks(allDrinks);

	return (
		<>
			<div className={css.main}>
				<section className={css.hero_section}>
					<h1 className={css.hero_title}>Craft Your Perfect<br /> Drink with Drink Master	</h1>
					<p className={css.main_p}>
						Unlock your inner mixologist with Drink Master, your one-<br />stop
						destination for exploring, crafting, and mastering the<br /> world's finest
						beverages.
					</p>
					<Link className={css.button} to={"/add"}>Add recipe</Link>
				</section>
				<PreviewDrinks>
					<section className={css.drinks_section}>
						{allDrinks &&
							<>
								<Link to={'/drinks/ordinary-drink'}><h2>Ordinary Drink</h2></Link>
								<ul className={css.mainPageList}>
									{getedDrinks['ordinary drink'].length !== 0 ? getedDrinks['ordinary drink'].map(({ drink, drinkThumb, _id }) => (
										<DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb}></DrinkCard>
									)) : <DrinkCardPlug drinkThumb={imgSrc} drink="some drink" />}
								</ul>
							</>
						}
						{allDrinks &&
							<>
								<Link to={'/drinks/coctail'}><h2>Coctail</h2></Link>
								<ul className={css.mainPageList}>
									{getedDrinks.coctail.length !== 0 ? getedDrinks.coctail.map(({ drink, drinkThumb, _id }) => (
										<DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb}></DrinkCard>
									)) : <DrinkCardPlug drinkThumb={imgSrc} drink="some drink" />}
								</ul>
							</>
						}
						{allDrinks &&
							<>
								<Link to={'/drinks/shake'}><h2>Shake</h2></Link>
								<ul className={css.mainPageList}>
									{getedDrinks.shake.length !== 0 ? getedDrinks.shake.map(({ drink, drinkThumb, _id }) => (
										<DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb}></DrinkCard>
									)) : <DrinkCardPlug drinkThumb={imgSrc} drink="some drink" />}
								</ul>
							</>
						}
						{allDrinks &&
							<>
								<Link to={'/drinks/other-unknown'}><h2>Other/Unknown</h2></Link>
								<ul className={css.mainPageList}>
									{getedDrinks['other/unknown'].length !== 0 ? getedDrinks['other/unknown'].map(({ drink, drinkThumb, _id }) => (
										<DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb}></DrinkCard>
									)) : <DrinkCardPlug drinkThumb={imgSrc} drink="some drink"/>}
								</ul>
							</>
						}
						{allDrinks && <a className={`${css.button} ${css.other_drinks_btn}`} href="drinks">Other drinks</a>}
					</section>

				</PreviewDrinks>

			</div>
		</>
	);
};

export default MainPage;
