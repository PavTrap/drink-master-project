import React from 'react';
import css from './Modal.module.css';

const Modal = ({active, setActive}) => {

	return(
		<div className={active ? css.modalActive : css.modal} onClick={() => setActive(false)}>
			<div className={active ? css.modal__contentActive : css.modal__content} onClick={e => e.stopPropagation()}>
				<div className={css.modal__content__colorEffect1}></div>
				<div className={css.modal__content__colorEffect2}></div>
				<div className={css.loginContainer}>
					<div className={css.avatar}>
						<button className={css.addAvatar}>+</button>
					</div>
					<input
						type="text"
						className={css.input}          
						name="name"
						placeholder='Name'
						// value={name}
						// onChange={}
						pattern="/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
					<button className={css.loginBtn}>Save changes</button>
				</div>
			</div>
		</div>
	)
}

export default Modal;