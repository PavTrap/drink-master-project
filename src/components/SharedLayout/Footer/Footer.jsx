import css from '../SharedLayout.module.css';

const Footer = ({ children }) => {
  return (
    <footer className={css.footer}>
      <div className={css.footerContainer}>{children}</div>
    </footer>
  );
};
export default Footer;
