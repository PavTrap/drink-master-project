import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';
import BackgroundEffect from '../../components/BackgroundEffect/BackgroundEffect';
import useAuth from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import useMountTransition from 'hooks/useMountTransition';
import Tost from 'components/Toast/Toast';

export default function LoginPage() {
  const { section, mainContainer } = css;

  const { BackEndError } = useAuth();
  const[backError, setBackError] = useState(null)
  const isMounted = useMountTransition(Boolean(backError), 1000)

    
  
    useEffect(() => {
      if (BackEndError !== "Unable to fetch user") setBackError(BackEndError);
      setTimeout(() => setBackError(null), 5000);
    }, [BackEndError]);

  return (
    <>
     { backError && <Tost message={backError} active={isMounted} style={{top: '20px'}}/>}
      <BackgroundEffect />
      <div className={section}>
        <div className={mainContainer}>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
