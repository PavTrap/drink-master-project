import useAuth from 'hooks/useAuth';

const UserBar = ({ toggleModal }) => {
  const { userData } = useAuth();
  const { avatarURL, name } = userData;
  return (
    <div style={littleStyles} onClick={() => toggleModal(true)}>
      <div style={UserIconContainer}>
        <img style={Avatar} src={avatarURL} alt="User Avatar" />
      </div>
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
const Avatar = {
  display: 'block',
  height: '100%',
  width: '100%',
};

const UserIconContainer = {
  width: '44px',
  height: '44px',
  overflow: 'hidden',
  borderRadius: '50%',
};

const userName = {
  color: '#F3F3F3',
  fontFamily: 'Manrope, sans-serif',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '24px',
};
