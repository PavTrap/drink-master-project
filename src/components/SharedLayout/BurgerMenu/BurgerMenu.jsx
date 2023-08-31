import React from 'react';
import NavBar from '../NavBar/NavBar';

const BurgerMenu = ({ burgerMenuActive }) => {
  const burgerMenuStyles = {
    position: 'fixed',
    top: '90px',
    right: burgerMenuActive ? '0' : '-100%',
    width: '100%',
    height: '100%',
    background: '#161F37',
    zIndex: '200',
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
