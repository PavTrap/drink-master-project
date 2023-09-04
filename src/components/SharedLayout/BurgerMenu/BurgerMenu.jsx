import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import useMountTransition from 'hooks/useMountTransition';
import styles from './BurgerMenu.module.css';
import css from '../MainContainer/MainContainer.module.css';

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
    top: isMonted ? '0' : '-100%',
    opacity: isMonted ? 1 : 0,
  };

  return (
    <div style={burgerMenuStyles} className={`${styles.burgerMenu} ${css.mainStyles}`}>
      <div className={css.gradient1} />
      {/* <div className={css.gradient2} /> */}
      {/* <div className={css.gradient3} /> */}
      <div className={css.gradient4} />
      {/* <div className={css.gradient5} /> */}
      {/* <div className={css.gradient6} /> */}
      <NavBar />
    </div>
  );
};

export default BurgerMenu;
