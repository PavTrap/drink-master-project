import css from '../RegisterPage/RegisterPage.module.css';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import BackgroundEffect from '../../components/BackgroundEffect/BackgroundEffect';
import { useEffect, useState } from 'react';
import Tost from 'components/Toast/Toast';
import useAuth from 'hooks/useAuth';
import useMountTransition from 'hooks/useMountTransition';

export default function RegisterPage() {
const { BackEndError } = useAuth();
const[backError, setBackError] = useState(null)
const isMounted = useMountTransition(Boolean(backError), 3000)
  

  useEffect(() => {
    if (BackEndError !== "Not authorized") setBackError(BackEndError);
    setTimeout(() => setBackError(null), 3000);
  }, [BackEndError]);

  const { section, mainContainer } = css;
  return (
    <>
   { backError && <Tost message={backError} active={isMounted} style={{top: '20px'}}/>}
      <BackgroundEffect />
      <div className={section}>
        <div className={mainContainer}>
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
