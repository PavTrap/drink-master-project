import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css';
import { useDispatch } from 'react-redux';
import { changeDrinksPage } from 'redux/Drinks/DrinksSlice';

const NavBar = () => {
  const location = useLocation();
const dispatch=useDispatch()
  const isActive = path => {
    return location.pathname === path ? styles.activeLink : '';
  };

  return (
    <nav className={styles.navBar}>
      <NavLink to="/drinks" className={`${styles.links} ${isActive('/drinks')}`} onClick={()=>dispatch(changeDrinksPage(1))}>
        Drinks
      </NavLink>
      <NavLink to="/add" className={`${styles.links} ${isActive('/add')}`}>
        Add recipe
      </NavLink>

      <NavLink to="/my" className={styles.links}>
        My recipes
      </NavLink>

      <NavLink to="/favorite" className={`${styles.links} ${isActive('/favorite')}`}>
        Favorites
      </NavLink>
    </nav>
  );
};

export default NavBar;

// const linksStyles = {
//   textDecoration: 'none',
//   display: 'flex',
//   padding: '8px 16px',
//   justifyContent: 'center',
//   alignItems: 'center',
//   gap: ' 10px',
//   borderRadius: '40px',
//   border: '1px solid rgba(243, 243, 243, 0.20)',
//   // backgroundColor: '#161F37',

//   fontSize: '14px',
//   fontStyle: 'normal',
//   fontWeight: '500',
//   lineHeight: '22.4px',
//   color: '#F3F3F3',
// };
// const navBarStyles = {
//   display: 'flex',
//   gap: '16px',
//   flexDirection: 'row',
//   justifyContent: 'center',

//   '@media (max-width: 768px)': {
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
// };
