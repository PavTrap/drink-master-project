import { Suspense, useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import axios from 'axios';

import { Spinner } from 'components/Spinner/Spinner'; //components
import MainContainer from './MainContainer'; //components
import Header from 'components/SharedLayout/Header/Header'; // Component
import Logo from './Logo'; //components
import NavBar from './NavBar/NavBar'; //components
import UserBar from './UserBar/UserBar'; //components
import Footer from 'components/SharedLayout/Footer/Footer'; // Component
import NavBarFooter from './NavBar/NavBarFooter'; //components
import Socials from './Socials'; //components
import useAuth from 'hooks/useAuth';//hook
import setAuthHeader from 'helpers/axiosHedder';//helpers

import ModalAuth from 'components/Modal/ModalAuth'; //component
import Modal from '../Modal/Modal'; //component
import ModalCard from 'components/Modal/ModalCard'; //component

import ModalTermsCard from 'components/Modal/ModalTermsCard';
import ModalPolicyCard from 'components/Modal/ModalPolicyCard';

import BurgerMenuIcon from './BurgerMenu/BurgerMenuIcon';
import BurgerMenu from './BurgerMenu/BurgerMenu';

export const SharedLayout = () => {
  const location = useLocation();

  const [modalAuthActive, setModalauthActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [policyModal, setPolicyModal] = useState(false);
  const [termsModal, setTermsModal] = useState(false);
  const [email, setEmail] = useState('');


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


  
  axios.defaults.baseURL = 'https://drink-master-back-end.onrender.com/';
  const { ReduxToken } = useAuth();
  setAuthHeader(ReduxToken);

  async function sendForm() {
    try {
      axios.post('/subscribe', { email });
      setEmail('');
    } catch (error) {
      console.log('error send email')
    }
  }








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
            <ModalPolicyCard onMount={policyModal}/>
          </Modal>
        )}
        {termsModal && (
          <Modal active={termsModal} setActive={setTermsModal}>
            <ModalTermsCard onMount={termsModal}/>
          </Modal>
        )}

        {isDesctop ? (
          <Header>
            <Logo />
            <NavBar />
            {/* <UserBar toggleModal={setModalActive} /> */}
            <UserBar toggleModal={setModalauthActive} />
          </Header>
        ) : (
          <Header>
            <Logo />
            {/* <NavBar /> */}
            {/* <UserBar toggleModal={setModalActive} /> */}
            <UserBar toggleModal={setModalauthActive} />
            <BurgerMenuIcon onClick={() => setBurgerMenuActive(!burgerMenuActive)} active={burgerMenuActive} />
            {burgerMenuActive && <BurgerMenu burgerMenuActive={burgerMenuActive} />}
          </Header>
        )}
        <main>
          <Suspense fallback={<Spinner />}>
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
              <form style={subskribeBlock} onSubmit={sendForm}>
                <p style={subskribeBlockText}>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
                <input 
                  style={subskribeBlockInput} 
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter the email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  />
                <button style={subskribeBlockButton} type="submit">Subscribe</button>
              </form>
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
      <Suspense fallback={<Spinner />}>
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

const subskribeBlock = {
  width: '309px',
  height: '226px',
  // border: '1px solid White',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
const subskribeBlockText = {
 textAlign: 'justify',
 marginBottom: '24px',
 fontSize: '18px',
};

const subskribeBlockInput = {
  width: '309px',
  height: '56px',
  borderRadius: '200px',
  marginBottom: '18px',
  border: '1px solid White',
  boxSizing: 'border-box',
  backgroundColor: 'inherit',
  color: '#F3F3F3',
  padding: '14px 24px',
};

const subskribeBlockButton = {
  width: '309px',
  height: '56px',
  borderRadius: '200px',
  border: '1px solid White',
  boxSizing: 'border-box',
  backgroundColor: 'inherit',
  color: '#F3F3F3',
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
