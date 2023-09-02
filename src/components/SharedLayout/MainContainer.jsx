import useWindowSize from 'hooks/useWindowSize';
import css from './SharedLayout.module.css';

const MainContainer = ({ children }) => {
  const { width } = useWindowSize();
  return (
    <div className={css.mainStyles}>
      <div className={css.gradient1} />
      <div className={css.gradient2} />
      <div className={css.gradient3} />
      <div className={css.gradient4} />
      {width >= 1440 && <div className={css.gradient5} />}
      {width >= 1440 && <div className={css.gradient6} />}
      {children}
    </div>
  );
};
export default MainContainer;
