const UserBar = ({ name = 'Victoria', avatarUrl, toggleModal }) => {
  return (
    <div style={littleStyles} onClick={() => toggleModal(true)}>
      <div style={UserIcon} />
      <span style={userName}>{name}</span>
    </div>
  );
};
export default UserBar;

const littleStyles = {
  height: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'no-wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  cursor: 'pointer',
  textDecoration: 'none',
  gap: '14px',
};

const UserIcon = {
  display: 'block',
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  backgroundColor: 'white',
};

const userName = {
  color: '#F3F3F3',
  fontFamily: 'Manrope, sans-serif',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '24px',
};
