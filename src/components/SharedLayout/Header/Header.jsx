
import css from '../SharedLayout.module.css';

const Header = ({ children }) => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>{children}</div>
    </header>
  );
};
export default Header;

// import styles from './Header.module.css';

// const Header = ({ children }) => {
//   return <header className={styles.header}>{children}</header>;
// };

// export default Header;
// // const styles = {
// //   width: '100%',
// //   textAlign: 'center',
// //   display: 'flex',
// //   flexDirection: 'row',
// //   flexWrap: 'no-wrap',
// //   alignItems: 'center',
// //   justifyContent: 'space-between',
// //   padding: '22.5px 100px',
// //   zIndex: '10',
// //   boxSizing: 'border-box',
// //   position: 'relative',
// //   borderBottom: '1px solid rgba(243, 243, 243, 0.20)',
// // };

