import css from './Modal.module.css';

import { MdAdd } from 'react-icons/md';
import isAuth from '../../hooks/useAuth';
import { useRef, useState } from 'react';

const ModalCard = ({ active, onClickClose }) => {
  const { userData } = isAuth();
  const { name, avatarURL } = userData;

  // const [userPhoto, setUserPhoto] = useState(avatarURL);
  const [userName, setUserName] = useState(null);

  // useEffect(() => {
  //   setUserPhoto(avatarURL);
  // }, [avatarURL]);

  const hiddenFileInput = useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    // handleFile(fileUploaded);
  };

const handleSubmit = event =>{
  // const formData = new FormData()
}




  return (
    <div>
      <div className={css.modal__content__colorEffect1}></div>
      <div className={css.modal__content__colorEffect2}></div>
      <div className={css.loginContainer}>
        <div className={css.avatar}>
          <div style={UserIconContainer}>
            <img style={Avatar} src={avatarURL} alt="User Avatar" />
          </div>
          <button className={css.addAvatar} onClick={handleClick}>
            <MdAdd className={css.addAvatarIcon} />
          </button>
          <input type="file" onChange={handleChange} ref={hiddenFileInput} style={{ display: 'none' }} name='avatarURL'/>
        </div>
        <input
          type="text"
          className={css.input}
          name="name"
          placeholder={name}
          value={userName}
          onChange={setUserName}
          pattern="/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button className={css.loginBtn} onClick={handleSubmit}>Save changes</button>
      </div>
    </div>
  );
};

export default ModalCard;

const Avatar = {
  display: 'block',
  height: '100%',
  width: '100%',
};

const UserIconContainer = {
  width: '100px',
  height: '100px',
  overflow: 'hidden',
  borderRadius: '50%',
};
