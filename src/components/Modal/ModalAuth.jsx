import React, {useState} from 'react'
import Modal from '../Modal/Modal'; //component
import ModalCard from 'components/Modal/ModalCard';//component
import ModalCardLogout from '../Modal/ModalCardLogout';//component


import css from './ModalAuth.module.css';



const ModalAuth = ({ active, setActive }) => {

const [modalActive, setModalActive] = useState(false);
const [modalLogoutActive, setModalLogoutActive] = useState(false);


  return (
  	<>
		{modalActive && (<Modal active={modalActive} setActive={setModalActive}><ModalCard /></Modal>)}
		{modalLogoutActive && (<Modal active={modalActive} setActive={setModalLogoutActive}><ModalCardLogout /></Modal>)}
		<div className={css.modalAuthContainer}>
			<div className={css.editProfileLink} onClick={setModalActive}>
				<p className={css.editProfileLink_text}>Edit profile</p>
				<div className={css.editProfileLink_icon}></div>
			</div>
			<button className={css.logoutBtn} onClick={setModalLogoutActive}>Log out</button>
		</div>
	</>
  );
};

export default ModalAuth;