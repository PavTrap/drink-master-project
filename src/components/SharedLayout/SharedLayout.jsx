import { Suspense, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import isAuth from '../Routes/isAuth';

import { Spinner } from 'components/Spinner/Spinner'; //components
import MainContainer from './MainContainer'; //components
import Header from 'components/SharedLayout/Header/Header'; // Component
import Logo from './Logo'; //components
import NavBar from './NavBar/NavBar'; //components
import UserBar from './UserBar/UserBar'; //components
import Footer from 'components/SharedLayout/Footer/Footer'; // Component
import NavBarFooter from './NavBar/NavBarFooter'; //components
import Socials from './Socials'; //components

// import Modal from '../Modal/Modal'; //component
// import ModalCard from 'components/Modal/ModalCard';//component
import ModalAuth from 'components/Modal/ModalAuth';//component

export const SharedLayout = () => {
  // const [modalActive, setModalActive] = useState(false);
  const [modalAuthActive, setModalauthActive] = useState(false);

// import Modal from '../Modal/Modal'; //component
// import ModalCard from 'components/Modal/ModalCard';//component
// import ModalTermsCard from 'components/Modal/ModalTermsCard'
// import ModalPolicyCard from 'components/Modal/ModalPolicyCard'

// export const SharedLayout = () => {
//   const [modalActive, setModalActive] = useState(false);
//   const [policyModal, setPolicyModal] = useState(false);
//   const [termsModal, setTermsModal] = useState(false);


  return isAuth ? (
    <>
      <MainContainer>

        {/* {modalActive && (<Modal active={modalActive} setActive={setModalActive}><ModalCard /></Modal>)} */}
        {modalAuthActive && (<ModalAuth active={modalAuthActive} setActive={setModalauthActive} />)}

        {modalActive && (
          <Modal active={modalActive} setActive={setModalActive}>
            <ModalCard />
          </Modal>
        )}
                        {policyModal && (
          <Modal active={policyModal} setActive={setPolicyModal}>
            <ModalPolicyCard />
          </Modal>
        )}
                {termsModal && (
          <Modal active={termsModal} setActive={setTermsModal}>
            <ModalTermsCard />
          </Modal>
        )}


        <Header>
          <Logo />
          <NavBar />
          {/* <UserBar toggleModal={setModalActive} /> */}
          <UserBar toggleModal={setModalauthActive} />
        </Header>
        <main style={{ zIndex: '10' }}>
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
            <div style={subskribeBlock}>SubskribeBlock</div>
          </div>
          <div style={footerBottomContainer}>
            <Link style={links}>©2023 Drink Master. All rights reserved.</Link>
            <div style={rightSide}>
              <Link style={links}onClick={()=>{setPolicyModal(true)}}>Privacy Policy</Link>
              <Link style={links}onClick={()=>{setTermsModal(true)}}>Terms of Service</Link>
            </div>
          </div>
        </Footer>
      </div>
    </>
  ) : (
    <main style={{width:'100%', padding:"0 80px"}}>
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
  border: '1px solid White',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
