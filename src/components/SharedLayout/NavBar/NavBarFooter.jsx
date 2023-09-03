import { NavLink } from 'react-router-dom';
import css from './NavBarFooter.module.css'

const NavBarFooter = () => {
  return (
    <nav className={css.navBarStyles}>
      <NavLink to="/drinks" className={css.linksStyles}>
        Drinks
      </NavLink>
      <NavLink to="/add" className={css.linksStyles}>
        Add recipe
      </NavLink>
      <NavLink to="/my" className={css.linksStyles}>
        My recipes
      </NavLink>
      <NavLink to="/favorite" className={css.linksStyles}>
        Favorites
      </NavLink>
    </nav>
  );
};

export default NavBarFooter;
