import css from './Modal.module.css';

import { MdAdd } from 'react-icons/md';

const ModalCard = ({ active, onClickClose }) => {
  return (
    <div>
      <div className={css.modal__content__colorEffect1}></div>
      <div className={css.modal__content__colorEffect2}></div>
      <div className={css.loginContainer}>
        <div className={css.avatar}>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_193_329)">
              <rect width="100" height="100" rx="50" fill="#F3F3F3" fillOpacity="0.952941" />
              <circle cx="50.6392" cy="47.8557" r="15.8557" fill="#939FC0" />
              <path
                d="M89 101.688C89 96.5668 87.9912 91.4954 86.0313 86.7637C84.0714 82.032 81.1986 77.7327 77.5772 74.1112C73.9557 70.4897 69.6563 67.617 64.9247 65.657C60.193 63.6971 55.1216 62.6883 50 62.6883C44.8784 62.6883 39.807 63.6971 35.0753 65.657C30.3436 67.617 26.0443 70.4897 22.4228 74.1112C18.8013 77.7327 15.9286 82.032 13.9687 86.7637C12.0088 91.4954 11 96.5668 11 101.688L50 101.688H89Z"
                fill="#939FC0"
              />
            </g>
            <defs>
              <clipPath id="clip0_193_329">
                <rect width="100" height="100" rx="50" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <button className={css.addAvatar}>
            <MdAdd className={css.addAvatarIcon} />
          </button>
        </div>
        <input
          type="text"
          className={css.input}
          name="name"
          placeholder="Name"
          // value={name}
          // onChange={}
          pattern="/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button className={css.loginBtn}>Save changes</button>
      </div>
    </div>
  );
};

export default ModalCard