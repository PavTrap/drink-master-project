import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import useMountTransition from 'hooks/useMountTransition';
import styles from './BurgerMenu.module.css';

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

  return (
    <div style={burgerMenuStyles} className={styles.burgerMenu}>
      <NavBar />
    </div>
  );
};

export default BurgerMenu;
