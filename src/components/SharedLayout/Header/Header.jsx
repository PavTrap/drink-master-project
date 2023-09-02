import css from '../SharedLayout.module.css';

const Header = ({ children }) => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>{children}</div>
    </header>
  );
};
export default Header;
