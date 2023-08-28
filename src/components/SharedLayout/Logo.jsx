import { Link } from 'react-router-dom';


const Logo = () => (
  <Link to="/main" relative="path" style={LogoBar}>
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="#F3F3F3">
      <path
        d="M19.3639 0H8.63616L0 8.63614V19.3638L8.63616 28H19.3639L28 19.3638V8.63614L19.3639 0ZM10.1205 19.4988L4.58796 13.9663L10.1205 8.43373C12.212 6.34217 15.653 6.34217 17.7446 8.43373L23.2771 13.9663L17.7446 19.4988C15.653 21.5904 12.2795 21.5904 10.1205 19.4988Z"
        fill="#F3F3F3"
      />
    </svg>
    <p style={logoTextStyles}>Drink Master</p>
  </Link>
);
export default Logo;

const logoTextStyles = {
  fontFamily: 'Manrop, sans-serif',
  fontSize: '18px',
  fontStyle: ' normal',
  fontWeight: '600',
  lineHeight: '22px',
  textWrap: 'nowrap',
  boxSizing: 'border-box',
};

const LogoBar = {
  height: '28px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
  color: '#f3f3f3',
  textDecoration: 'none',
};
