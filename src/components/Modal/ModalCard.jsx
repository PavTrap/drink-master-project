import css from './Modal.module.css';

import { MdAdd } from 'react-icons/md';
import isAuth from '../../hooks/useAuth';
import { useEffect, useRef, useState } from 'react';
import LoadingCircle from 'components/Spinner/LoadingCircle';

const ModalCard = ({ active, onClickClose }) => {
  const { userData } = isAuth();
  const { name, avatarURL } = userData;

  const hiddenFileInput = useRef(null);

  const [userPhoto, setUserPhoto] = useState(null);
  const [userName, setUserName] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [loadingURL, setLoadingURL] = useState(false);

  useEffect(() => {
    uploadedFile ? setUserPhoto(uploadedFile) : setUserPhoto(avatarURL);
    if(uploadedFile) setLoadingURL(false)
  }, [avatarURL, uploadedFile]);



  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const file = event.target.files[0];
    if (file) {
      setLoadingURL(true)
      setUploadedFile(URL.createObjectURL(file));
    }
    

    // handleFile(fileUploaded);
  };

  const handleSubmit = event => {
    const formData = new FormData()
    formData.forEach(item =>console.log(item))
  };

  return (
    <div>
      <div className={css.modal__content__colorEffect1}></div>
      <div className={css.modal__content__colorEffect2}></div>
      <div className={css.loginContainer}>
        <div className={css.avatar}>
          <div style={UserIconContainer}>{loadingURL ? <LoadingCircle /> : <img style={Avatar} src={userPhoto} alt="User Avatar" />}</div>
          <button className={css.addAvatar} onClick={handleClick}>
            <MdAdd className={css.addAvatarIcon} />
          </button>
          <input type="file" onChange={handleChange} ref={hiddenFileInput} style={{ display: 'none' }} name="avatarURL" />
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
        <button className={css.loginBtn} onClick={handleSubmit}>
          Save changes
        </button>
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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#181f35',
};
