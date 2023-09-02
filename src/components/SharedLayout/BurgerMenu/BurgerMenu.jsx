import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import useMountTransition from 'hooks/useMountTransition';

const BurgerMenu = ({ burgerMenuActive }) => {
  const isMonted = useMountTransition(burgerMenuActive, 1000);

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

  // #BCE6D2 40%
  // 4070CD 50%

  const burgerMenuStyles = {
    position: 'fixed',
    top: '90px',
    right: isMonted ? '0' : '-100%',
    width: '100%',
    height: '100%',
    background: '#0b0d17',

    zIndex: '1000',
    transition: 'right 1s ease',

    // Анімація виїзду
  };

  return (
    <div style={burgerMenuStyles}>
      <NavBar />
    </div>
  );
};

export default BurgerMenu;
