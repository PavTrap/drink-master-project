
import css from './ModalLogout.module.css';



const ModalCardLogout = ({ active, onClickClose }) => {
  return (
			<div>
				<p className={css.titleLogout}>Are you sure you want to log out?</p>
				<div className={css.btnsContainer}>
					<button className={css.logoutBtn}>Log out</button>
					<button className={css.cancelBtn}>Cancel</button>
				</div>
			</div>
  );
};

export default ModalCardLogout;