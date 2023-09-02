import { useEffect, useState } from 'react';
import css from './MainPage.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import setAuthHeader from 'helpers/axiosHedder';
import useAuth from 'hooks/useAuth';


export const fetchDrinks = async token => {
  try {
    setAuthHeader(token);
    const { data } = await axios.get('/api/recipes/main-page');
    // console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const DrinkCard = ({ drink, drinkThumb }) => (
  <li>
    <img src={drinkThumb} alt="drink" height={400} />
    <div className={css.card_text_wrapper}>
      <p className={css.card_name}>{drink}</p>
      <a className={css.card_link} href="ingredients">
        <p className={css.ingredients_text}>ingredients</p>
      </a>
    </div>
  </li>
);

export const PreviewDrinks = ({ children }) => <>{children}</>;

export const addYourCoctail = ({ children }) => <>{children}</>;

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
      if (drink.category === 'Ordinary Drink') ordinaryDrinks.push(drink);
      if (drink.category === 'Cocktail') cocktails.push(drink);
      if (drink.category === 'Snake') shakes.push(drink);
      if (drink.category === 'Other/Unknow') otherDrinks.push(drink);
    }

    const getedDrinks = {
      'ordinary drink': ordinaryDrinks[0].items,

      // "ordinary drink": {
      // 	"category": "ordinary drink",
      // 	"drinks": ordinaryDrinks[0].items,
      // },

      coctail: cocktails[0].items,
      shake: shakes[0].items,
      'other/unknown': otherDrinks[0].items,
    };

    // const categoriesDrinks = Object.keys(getedDrinks);
    // console.log(categoriesDrinks);

    // console.log(getedDrinks);
    return getedDrinks;
  };

  const getedDrinks = separateDrinks(allDrinks);

  return (
    <>
      <div className={css.main}>
        <section className={css.hero_section}>
          <h1 className={css.hero_title}>
            Craft Your Perfect
            <br /> Drink with Drink Master{' '}
          </h1>
          <p className={css.main_p}>
            Unlock your inner mixologist with Drink Master, your one-
            <br />
            stop destination for exploring, crafting, and mastering the
            <br /> world's finest beverages.
          </p>
          {/* <a className={css.button} href="add">Add recipe</a> */}
          <Link className={css.button} to={'/add'}>
            Add recipe
          </Link>
        </section>
        <PreviewDrinks>
          <section className={css.section}>
            {allDrinks && (
              <>
                <div>
                  <Link to={'/drinks/ordinary-drink'}>
                    <h2>Ordinary Drink</h2>
                  </Link>
                </div>
                <ul className={css.mainPageList}>
                  {getedDrinks['ordinary drink'].map(({ drink, drinkThumb, _id }) => (
                    <DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb}></DrinkCard>
                  ))}
                </ul>
              </>
            )}
            {allDrinks && (
              <>
                <Link to={'/drinks/coctail'}>
                  <h2>Coctail</h2>
                </Link>
                <ul className={css.mainPageList}>
                  {getedDrinks.coctail.map(({ drink, drinkThumb, _id }) => (
                    <DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb}></DrinkCard>
                  ))}
                </ul>
              </>
            )}
            {allDrinks && (
              <>
                <Link to={'/drinks/shake'}>
                  <h2>Shake</h2>
                </Link>
                <ul className={css.mainPageList}>
                  {allDrinks[9].items.map(({ drink, drinkThumb, _id }) => (
                    <DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb}></DrinkCard>
                  ))}
                </ul>
              </>
            )}
            {allDrinks && (
              <>
                <Link to={'/drinks/other-unknown'}>
                  <h2>Other/Unknown</h2>
                </Link>
                <ul className={css.mainPageList}>
                  {allDrinks[10].items.map(({ drink, drinkThumb, _id }) => (
                    <DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb}></DrinkCard>
                  ))}
                </ul>
              </>
            )}
            {allDrinks && (
              <a className={`${css.button} ${css.other_drinks_btn}`} href="drinks">
                Other drinks
              </a>
            )}
          </section>
        </PreviewDrinks>
      </div>
    </>
  );
};

export default MainPage;
