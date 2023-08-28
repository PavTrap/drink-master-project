import { NavLink } from 'react-router-dom';

const NavBarFooter = () => {
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
    </nav>
  );
};

export default NavBarFooter;

const linksStyles = {
  color: "#F3F3F3",
  justifyContent: 'flex-start',
  display:"flex",
  fontFamily: "Manrope, sans-serif",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight:" 22.4px",
  textDecoration: "none",
  cursor:"pointer",
};
const navBarStyles = {

  display: 'flex',
  gap: '16px',
  flexDirection: 'column',
  justifyContent: 'center',
  width: "78px",
};
