const Header = ({children}) => {
  return (
    <header style={styles}>
      {children}

    </header>
  );
};
export default Header;
const styles = {

  width:"100%",
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'no-wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding:"22.5px 0",
  zIndex: "10",
  boxSizing: 'border-box',
  position: 'relative',
};
