import css from './MainPage.module.css';
import { Link } from 'react-router-dom';
import glassImage from './HeroGlassImage.png';
import glassImageMobile from './mobileHeroImage.png';
import { useEffect, useRef, useState } from 'react';
import useAnimationOnStart from 'hooks/useAnimationOnStart';

const MainHero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  useAnimationOnStart(ref);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <section className={css.hero_section}>
      <div data-item ref={ref}>
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
        <Link className={css.hero_button} to={'/add'}>
          Add recipe
        </Link>
      </div>

      {isMobile ? (
        <img className={css.hero_image} src={glassImageMobile} alt="Hero Nice Glass" />
      ) : (
        <img className={css.hero_image} src={glassImage} alt="Hero Nice Glass" />
      )}
    </section>
  );
};
export default MainHero;
