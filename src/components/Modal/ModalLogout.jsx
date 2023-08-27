import React from 'react';
import css from './ModalLogout.module.css';
import { IoCloseOutline } from "react-icons/io5";
// import {  MdAdd } from "react-icons/md";


const Modal = ({active, setActive}) => {

	return(
		<div className={active ? css.modalActiveLogout : css.modalLogout} onClick={() => setActive(false)}>
			<div className={active ? css.modal__contentActiveLogout : css.modal__contentLogout} onClick={e => e.stopPropagation()}>
				<div onClick={() => setActive(false)}><IoCloseOutline className={css.closeBtn}/></div>
				<p className={css.titleLogout}>Are you sure you want to log out?</p>
				<div className={css.btnsContainer}>
					<button className={css.logoutBtn}>Log out</button>
					<button className={css.cancelBtn} onClick={() => setActive(false)}>Cancel</button>
				</div>
			</div>
		</div>
	)
}

export default Modal;