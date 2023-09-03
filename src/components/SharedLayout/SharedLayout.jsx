import { Suspense, useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';


import {LayoutSpiner} from '../Spinner/LayoutSpinner'
import MainContainer from './MainContainer'; //components
import Header from 'components/SharedLayout/Header/Header'; // Component
import Logo from './Logo'; //components
import NavBar from './NavBar/NavBar'; //components
import UserBar from './UserBar/UserBar'; //components
import Footer from 'components/SharedLayout/Footer/Footer'; // Component
import NavBarFooter from './NavBar/NavBarFooter'; //components
import Socials from './Socials'; //components
import useAuth from 'hooks/useAuth'; //hook


import ModalAuth from 'components/Modal/ModalAuth'; //component
import Modal from '../Modal/Modal'; //component
import ModalCard from 'components/Modal/ModalCard'; //component

import ModalTermsCard from 'components/Modal/ModalTermsCard';
import ModalPolicyCard from 'components/Modal/ModalPolicyCard';

import BurgerMenuIcon from './BurgerMenu/BurgerMenuIcon';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import css from './SharedLayout.module.css';
import SubscribeForm from './SubscribeForm/SubscribeForm';

export const SharedLayout = () => {
  const location = useLocation();

  const [modalAuthActive, setModalauthActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [policyModal, setPolicyModal] = useState(false);
  const [termsModal, setTermsModal] = useState(false);

  const [isDesctop, setIsDesctop] = useState(true); //визначає ширину екрану
  const [burgerMenuActive, setBurgerMenuActive] = useState(false); //чи активне burger menu

  // useEffect для слідкування за зміною роута
  useEffect(() => {
    setBurgerMenuActive(false);
  }, [location]);

  //слідкує за шириною екрану і її зміни
  useEffect(() => {
    const handleWindowResize = () => {
      setIsDesctop(window.innerWidth >= 768);

      if (window.innerWidth >= 768) {
        setBurgerMenuActive(false);
      }
    };
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);




  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <>
      <MainContainer>
        {modalAuthActive && <ModalAuth active={modalAuthActive} setActive={setModalauthActive} />}

        {modalActive && (
          <Modal active={modalActive} setActive={setModalActive}>
            <ModalCard closePopup={setModalauthActive} />
          </Modal>
        )}
        {policyModal && (
          <Modal active={policyModal} setActive={setPolicyModal}>
            <ModalPolicyCard onMount={policyModal} />
          </Modal>
        )}
        {termsModal && (
          <Modal active={termsModal} setActive={setTermsModal}>
            <ModalTermsCard onMount={termsModal} />
          </Modal>
        )}

        {isDesctop ? (
          <Header>
            <Logo />
            <NavBar />
            <UserBar toggleModal={setModalauthActive} />
          </Header>
        ) : (
          <Header>
            <Logo />
            <UserBar toggleModal={setModalauthActive} />
            <BurgerMenuIcon onClick={() => setBurgerMenuActive(!burgerMenuActive)} active={burgerMenuActive} />
            {burgerMenuActive && <BurgerMenu burgerMenuActive={burgerMenuActive} />}
          </Header>
        )}
        <main className={css.mainFrame}>
          <Suspense fallback={<LayoutSpiner />}>
            <Outlet />
          </Suspense>
        </main>
      </MainContainer>

      <div>
        <Footer>
          <div className={css.footerUpperContainer}>
            <div className={css.leftSideBar}>
              <div>
                <Logo />
                <Socials />
              </div>
              <NavBarFooter />
            </div>
            <SubscribeForm />
          </div>

          <div className={css.footerBottomContainer}>
            <Link className={css.links}>©2023 Drink Master. All rights reserved.</Link>
            <div className={css.rightSide}>
              <Link className={css.links} onClick={() => setPolicyModal(true)}>
                Privacy Policy
              </Link>
              <Link className={css.links} onClick={() => setTermsModal(true)}>
                Terms of Service
              </Link>
            </div>
          </div>
        </Footer>
      </div>
    </>
  ) : (
    <main style={{ width: '100%' }}>
      <Suspense fallback={<LayoutSpiner />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

/////----------------------------------------------------------------
// когда будут компоненты - удалить



