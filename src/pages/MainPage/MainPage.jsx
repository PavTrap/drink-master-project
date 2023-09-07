import { Suspense, useEffect, useState } from 'react';
import css from './MainPage.module.css';

import MainHero from './MainHero';
import CategoryList from './CategoryList';
import { fetchDrinks } from './featchApi';
import { writeToLoaclStore, readFromLocalStore } from 'helpers/localStorageApi';
import { Link } from 'react-router-dom';
import Dots from 'components/Spinner/Dots';
import { useDispatch } from 'react-redux';
import { changeDrinksPage } from 'redux/Drinks/DrinksSlice';

const PreviewDrinks = ({ children }) => <>{children}</>;

const MainPage = () => {
  const [allDrinks, setAllDrinks] = useState(null);
const dispatch=useDispatch()
  useEffect(() => {
    if (!readFromLocalStore('main-page')) {
      (async () => {
        const data = await fetchDrinks();
        data && writeToLoaclStore('main-page', data);
        data && setAllDrinks(data);
      })();
    } else {
      const data = readFromLocalStore('main-page');
      data && setAllDrinks(data);
    }
  }, []);

  return (
    <div className={css.main}>
      <MainHero />
      <PreviewDrinks>
        <section className={css.drinks_section}>
          <ul className={css.drinks_categoriesList}>
            <Suspense fallBack={<Dots />}>
              {allDrinks &&
                allDrinks
                  .sort((a, b) => b.items.length - a.items.length)
                  .slice(0, 4)
                  .map(item => item.items.length > 0 && <CategoryList title={item.category} collection={item.items} key={item._id} />)}
            </Suspense>
          </ul>

          {allDrinks && (
            <Link className={css.other_drinks_btn} to={'/drinks'} onClick={()=>dispatch(changeDrinksPage(1))}>
              Other drinks
            </Link>
          )}
        </section>
      </PreviewDrinks>
    </div>
  );
};

export default MainPage;

//   const separateDrinks = drinks => {
//     if (!allDrinks) return;

//     const ordinaryDrinks = [];
//     const cocktails = [];
//     const shakes = [];
//     const otherDrinks = [];

//     for (const drink of drinks) {
//       if (drink.category === 'Ordinary Drink') ordinaryDrinks.push(drink);
//       if (drink.category === 'Cocktail') cocktails.push(drink);
//       if (drink.category === 'Snake') shakes.push(drink);
//       if (drink.category === 'Other/Unknow') otherDrinks.push(drink);
//     }

//     const getedDrinks = {
//       'ordinary drink': ordinaryDrinks[0].items,

//       // "ordinary drink": {
//       // 	"category": "ordinary drink",
//       // 	"drinks": ordinaryDrinks[0].items,
//       // },

//       coctail: cocktails[0].items,
//       shake: shakes[0].items,
//       'other/unknown': otherDrinks[0].items,
//     };

//     // const categoriesDrinks = Object.keys(getedDrinks);
//     // console.log(categoriesDrinks);

//     // console.log(getedDrinks);
//     return getedDrinks;
//   };

//   const getedDrinks = separateDrinks(allDrinks);

/* <ul>
            {allDrinks && (
              <>
                <Link to={'/drinks/ordinary-drink'}>
                  <h2>Ordinary Drink</h2>
                </Link>
                <ul className={css.mainPageList}>
                  {getedDrinks['ordinary drink'].length !== 0 ? (
                    getedDrinks['ordinary drink'].map(({ drink, drinkThumb, _id }) => (
                      <DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb} />
                    ))
                  ) : (
                    <DrinkCard drink="Drink" drinkThumb={imgSrc} />
                  )}
                </ul>
              </>
            )}
            {allDrinks && (
              <>
                <Link to={'/drinks/coctail'}>
                  <h2>Coctail</h2>
                </Link>
                <ul className={css.mainPageList}>
                  {getedDrinks.coctail.length !== 0 ? (
                    getedDrinks.coctail.map(({ drink, drinkThumb, _id }) => <DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb} />)
                  ) : (
                    <DrinkCard drink="Drink" drinkThumb={imgSrc} />
                  )}
                </ul>
              </>
            )}
            {allDrinks && (
              <>
                <Link to={'/drinks/shake'}>
                  <h2>Shake</h2>
                </Link>
                <ul className={css.mainPageList}>
                  {getedDrinks.shake.length !== 0 ? (
                    getedDrinks.shake.map(({ drink, drinkThumb, _id }) => <DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb} />)
                  ) : (
                    <DrinkCard drink="Drink" drinkThumb={imgSrc} />
                  )}
                </ul>
              </>
            )}
            {allDrinks && (
              <>
                <Link to={'/drinks/other-unknown'}>
                  <h2>Other/Unknown</h2>
                </Link>
                <ul className={css.mainPageList}>
                  {getedDrinks['other/unknown'].length !== 0 ? (
                    getedDrinks['other/unknown'].map(({ drink, drinkThumb, _id }) => (
                      <DrinkCard key={_id} drink={drink} drinkThumb={drinkThumb} />
                    ))
                  ) : (
                    <DrinkCard drink="Drink" drinkThumb={imgSrc} />
                  )}
                </ul>
              </>
            )}
          </ul> */
