import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import useMountTransition from 'hooks/useMountTransition';
import styles from './BurgerMenu.module.css';
import css from '../SharedLayout.module.css';
import useWindowSize from 'hooks/useWindowSize';
const BurgerMenu = ({ burgerMenuActive }) => {
  const isMonted = useMountTransition(burgerMenuActive);

  useEffect(() => {
    if (burgerMenuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [burgerMenuActive]);

  const burgerMenuStyles = {
    right: isMonted ? '0' : '-100%',
  };

  const { width } = useWindowSize();

  return (
    <div style={burgerMenuStyles} className={`${styles.burgerMenu} ${css.mainStyles}`}>
      <div className={css.gradient1} />
      <div className={css.gradient2} />
      <div className={css.gradient3} />
      <div className={css.gradient4} />
      {width >= 1440 && <div className={css.gradient5} />}
      {width >= 1440 && <div className={css.gradient6} />}
      <NavBar />
    </div>
  );
};

export default BurgerMenu;
