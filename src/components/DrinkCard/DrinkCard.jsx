import css from "./DrinkCard.module.css"

export const DrinkCard = ({ drink, drinkThumb }) =>
(<li className={css.mainPageList_item}>
	<img className={css.drinkCardImg} src={drinkThumb} alt='drink' />
	<div className={css.card_text_wrapper}>
		<p className={css.card_name}>{drink}</p>
		<a className={css.card_link} href='ingredients'><p className={css.ingredients_text}>ingredients</p></a>
	</div>
</li>);