import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <NavLink to="/drinks" className={styles.links}>
        Drinks
      </NavLink>
      <NavLink to="/add" className={styles.links}>
        Add recipe
      </NavLink>
      <NavLink to="/recipe" className={styles.links}>
        Recipe
      </NavLink>
      <NavLink to="/my" className={styles.links}>
        My recipes
      </NavLink>
      <NavLink to="/spinner" className={styles.links}>
        Spinner
      </NavLink>
      <NavLink to="/favorite" className={styles.links}>
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
