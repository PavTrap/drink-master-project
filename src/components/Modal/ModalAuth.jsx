import React, { useState } from 'react';
import Modal from '../Modal/Modal'; //component
import ModalCard from 'components/Modal/ModalCard'; //component
import ModalCardLogout from '../Modal/ModalCardLogout'; //component
import useMountTransition from 'hooks/useMountTransition';

import css from './ModalAuth.module.css';

const ModalAuth = ({ active, setActive }) => {
  const hasTransitionedIn = useMountTransition(active, 1000);

  const [modalActive, setModalActive] = useState(false);
  const [modalLogoutActive, setModalLogoutActive] = useState(false);
  const closePopup=()=>{
    setModalActive(prev=>!prev)
    setActive(prev=>!prev)
  }
  const closePopup2=()=>{
    setModalLogoutActive(prev=>!prev)
    setActive(prev=>!prev)
  }


  return (
    <>
      {modalActive && (
        <Modal active={modalActive} setActive={closePopup}>
          <ModalCard onClickClose={closePopup} closePopup={setActive}/>
        </Modal>
      )}
      {modalLogoutActive && (
        <Modal active={modalLogoutActive} setActive={closePopup2}>
          <ModalCardLogout onClickClose={closePopup2}/>
        </Modal>
      )}
      {(hasTransitionedIn || active) && (
        <div className={`${css.modalAuthContainer} ${hasTransitionedIn && css.visible}`}>
          <div className={css.editProfileLink} onClick={() => setModalActive(true)}>
            <p className={css.editProfileLink_text}>Edit profile</p>
            <div className={css.editProfileLink_icon}></div>
          </div>
          <button className={css.logoutBtn} onClick={() => setModalLogoutActive(true)}>
            Log out
          </button>
        </div>
      )}
    </>
  );
};

export default ModalAuth;


/**
 *  <div
            className={`card ${hasTransitionedIn && "in"} ${
              isMounted && "visible"
            }`}
          >
 */