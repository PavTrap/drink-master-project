import React, { useEffect } from 'react';
import css from './Modal.module.css';
import { IoCloseOutline } from 'react-icons/io5';

import useMountTransition from 'hooks/useMountTransition';

import { createPortal } from 'react-dom';

const Modal = ({ active, setActive, children }) => {
  const modalRoot = document.querySelector('#modal-root');
  const isTransitioned = useMountTransition(active, 500);

  useEffect(() => {
    window.addEventListener('keydown', closeOnEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', closeOnEsc);
      document.body.style.overflow = 'unset';
    };
  });

  const closeOnEsc = e => {
    if (e.code === 'Escape') {
      setActive(prev => !prev);
    }
  };

  const onClickClose = e => {
    if (e.currentTarget === e.target) {
      setActive(prev => !prev);
    }
  };

  return createPortal(
    <div className={isTransitioned ? css.modalActive : css.modal} onClick={onClickClose}>
      <div className={isTransitioned ? css.modal__contentActive : css.modal__content} onClick={e => e.stopPropagation()}>
        <div>
          <IoCloseOutline className={css.closeBtn} onClick={onClickClose} />
        </div>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

// import React, {useState} from "react";
// import { Link } from "react-router-dom";
// import Modal from '../components/Modal/Modal';
// const WelcomePage = () => {
//   const [modalActive, setModalActive] = useState(false);
//     return (
//         <div>
//             <button onClick={() => setModalActive(true)}>open modal</button>
//             <Modal active={modalActive} setActive={setModalActive} />
//         </div>
//     )
// }
// export default  WelcomePage;
