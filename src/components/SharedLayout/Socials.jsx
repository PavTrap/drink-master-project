const { Link } = require('react-router-dom');

const Socials = () => {
  return (
    <div style={{ display: 'flex', gap: '16px', marginTop: '50px' }}>
      <Link style={icons} />
      <Link style={icons} />
      <Link style={icons} />
    </div>
  );
};
export default Socials;

const icons = {
  width: '28px',
  height: '28px',
  borderRadius: '4px',
  backgroundColor: 'white',
  display: 'block',
  outline: '1px solid grey',
  margin: '8px',
  outlineOffset: '8px',
};
