import { Suspense, useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutSpiner } from 'components/Spinner/LayoutSpinner';
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
import SubscribeForm from './SubscribeForm';

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

  // useEffect(()=>{
    
  // })

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
          <div style={footerUpperContainer}>
            <div style={leftSideBar}>
              <Logo />
              <Socials />
            </div>
            <NavBarFooter />
            <SubscribeForm />
          </div>
          <div style={footerBottomContainer}>
            <Link style={links}>©2023 Drink Master. All rights reserved.</Link>
            <div style={rightSide}>
              <Link style={links} onClick={() => setPolicyModal(true)}>
                Privacy Policy
              </Link>
              <Link style={links} onClick={() => setTermsModal(true)}>
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

const footerUpperContainer = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '20px',
  marginBottom: '80px',
};

const footerBottomContainer = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  textDecoration: 'none',
  justifyContent: 'space-between',
};
const rightSide = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  textDecoration: 'none',
  justifyContent: 'space-between',
  gap: '20px',
};
const links = {
  color: 'rgba(243, 243, 243, 0.50)',
  fontFamily: 'Manrope, sans-serif',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '18px',
  letterSpacing: '-0.28px',
  opacity: '0.9',
  textDecoration: 'none',
};
const leftSideBar = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexDirection: 'column',
};
