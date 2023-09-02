import css from './SharedLayout.module.css';

const MainContainer = ({ children }) => {
  return (
    <div className={css.mainStyles}>
      <div className={css.gradient} />
      <div className={css.gradient1} />
      <div className={css.gradient2} />
      <div className={css.gradient3} />
      {children}
    </div>
  );
};
export default MainContainer;
