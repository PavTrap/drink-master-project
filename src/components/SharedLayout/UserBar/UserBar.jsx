import useAuth from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import css from './UserBar.module.css';

const UserBar = ({ toggleModal }) => {
  const { userData } = useAuth();
  const { avatarURL, name } = userData;
  const [usePhoto, setUserPhoto] = useState(avatarURL);
  const [userName, setUserName] = useState(name);


  useEffect(()=>{
    if(usePhoto !== avatarURL ) setUserPhoto(avatarURL)
  }, [avatarURL, usePhoto])

  useEffect(()=>{
    if(userName !== name) setUserName(name)
  },[name, userName])

  //useEffect for chack photo from redux
  return (
    <div className={css.littleStyles} onClick={() => toggleModal(prev=>!prev)} title={userName}>
      <div className={css.UserIconContainer}>
        <img className={css.Avatar} src={usePhoto} alt="User Avatar" />
      </div>
      <span className={css.userNameStyles}>{userName}</span>
    </div>
  );
};
export default UserBar;

