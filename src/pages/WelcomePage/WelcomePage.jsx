import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './WelcomePage.module.css';
import Modal from '../../components/Modal/Modal';
import ModalLogout from '../../components/Modal/ModalLogout';

export default function WelcomePage() {
  const [modalActive, setModalActive] = useState(false);
  const [modalActiveLogout, setModalActiveLogout] = useState(false);
  const {
    section,
    mainContainer,
    mainContainer__title,
    mainContainer__text,
    linkContainer,
    linkContainer__singup,
    linkContainer__singin,
  } = css;
  return (
    <div className={section}>
          <div className={css.buttonModal}>
             <button onClick={() => setModalActive(true)}>open modal</button>
             <Modal active={modalActive} setActive={setModalActive} />
             <button onClick={() => setModalActiveLogout(true)}>log out</button>
             <ModalLogout active={modalActiveLogout} setActive={setModalActiveLogout} />
         </div>

      <div className={mainContainer}>
        <h1 className={mainContainer__title}> Welcome to the app! </h1>
        <p className={mainContainer__text}>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <div className={linkContainer}>
          <NavLink className={linkContainer__singup} to={`/signup`}>
            Registration
          </NavLink>
          <NavLink className={linkContainer__singin} to={`/signin`}>
            Sing In
          </NavLink>
        </div>
      </div>
    </div>
  );
}
