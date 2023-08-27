import { NavLink, useLocation } from 'react-router-dom';
import css from './AuthNavigate.module.css';

export const AuthNavigate = () => {
  const location = useLocation();
  const { link } = css;

  return (
    <>
      {location.pathname === '/signup' ? (
        <NavLink className={link} to="/signin">
          Sign In
        </NavLink>
      ) : (
        <NavLink className={link} to="/register">
          Registration
        </NavLink>
      )}
    </>
  );
};
