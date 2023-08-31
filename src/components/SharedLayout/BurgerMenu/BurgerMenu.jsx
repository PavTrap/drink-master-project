import React from 'react';
import NavBar from '../NavBar/NavBar';
import useMountTransition from 'hooks/useMountTransition';

const BurgerMenu = ({ burgerMenuActive }) => {
  const isMonted = useMountTransition(burgerMenuActive, 1000);

  const burgerMenuStyles = {
    position: 'fixed',
    top: '90px',
    right: isMonted ? '0' : '-100%',
    width: '100%',
    height: '100%',
    background: '#161F37',
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
