import css from "./DrinkCardPlug.module.css"

export const DrinkCardPlug = ({ drink, drinkThumb }) => {
	return (
		<>
			<li className={css.mainPageList_item}>
				<img src={drinkThumb} alt='drink' height={400} />
				<div className={css.card_text_wrapper}>
					<p className={css.card_name}>{drink}</p>
					{/* <a className={css.card_link} href='ingredients'><p className={css.ingredients_text}>ingredients</p></a> */}
				</div>
			</li>
			<li className={css.mainPageList_item}>
				<img src={drinkThumb} alt='drink' height={400} />
				<div className={css.card_text_wrapper}>
					<p className={css.card_name}>{drink}</p>
					{/* <a className={css.card_link} href='ingredients'><p className={css.ingredients_text}>ingredients</p></a> */}
				</div>
			</li>
			<li className={css.mainPageList_item}>
				<img src={drinkThumb} alt='drink' height={400} />
				<div className={css.card_text_wrapper}>
					<p className={css.card_name}>{drink}</p>
					{/* <a className={css.card_link} href='ingredients'><p className={css.ingredients_text}>ingredients</p></a> */}
				</div>
			</li>
		</>
	)
};