import css from './Footer.module.css'

const Footer = ({ children }) => {
  return <div className={css.footer_style}>{children}</div>;
};
export default Footer