import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={navBarStyles}>
      <NavLink to="/drinks" style={linksStyles}>
        Drinks
      </NavLink>
      <NavLink to="/add" style={linksStyles}>
        Add recipe
      </NavLink>
      <NavLink to="/recipe" style={linksStyles}>
        Recipe
      </NavLink>
      <NavLink to="/my" style={linksStyles}>
        My recipes
      </NavLink>
      <NavLink to="/spinner" style={linksStyles}>
        Spinner
      </NavLink>
      <NavLink to="/favorite" style={linksStyles}>
        Favorites
      </NavLink>
    </nav>
  );
};

export default NavBar;

const linksStyles = {
  textDecoration: 'none',
  display: 'flex',
  padding: '8px 16px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: ' 10px',
  borderRadius: '40px',
  border: '1px solid rgba(243, 243, 243, 0.20)',
  // backgroundColor: '#161F37',

  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '22.4px',
  color: '#F3F3F3',
};
const navBarStyles = {
  // width: '530px',
  display: 'flex',
  gap: '16px',
  flexDirection: 'row',
  justifyContent: 'center',
};
