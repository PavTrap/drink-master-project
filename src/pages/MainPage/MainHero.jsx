import css from './MainPage.module.css';
import { Link } from 'react-router-dom';
import glassImage from './HeroGlassImage.png';
import glassImageMobile from './mobileHeroImage.png';
import useWindowSize from 'hooks/useWindowSize';

const MainHero = () => {
  const { width } = useWindowSize();
  return (
    <section className={css.hero_section}>
      <h1 className={css.hero_title}>
        Craft Your Perfect
        <br /> Drink with Drink Master
      </h1>
      <p className={css.main_p}>
        Unlock your inner mixologist with Drink Master, your one-
        <br />
        stop destination for exploring, crafting, and mastering the
        <br /> world's finest beverages.
      </p>
      {width <= 767 ? (
        <img className={css.hero_image} src={glassImageMobile} alt="Hero Nice Glass" />
      ) : (
        <img className={css.hero_image} src={glassImage} alt="Hero Nice Glass" />
      )}

      <Link className={css.hero_button} to={'/add'}>
        Add recipe
      </Link>
    </section>
  );
};
export default MainHero;
