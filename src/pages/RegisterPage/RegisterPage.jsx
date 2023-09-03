import css from '../RegisterPage/RegisterPage.module.css';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import BackgroundEffect from '../../components/BackgroundEffect/BackgroundEffect';
import { useEffect, useState } from 'react';
import Tost from 'components/Toast/Toast';
import useAuth from 'hooks/useAuth';

export default function RegisterPage() {
const { BackEndError } = useAuth();
const[backError, setBackError] = useState(null)
  
  console.log(BackEndError);

  useEffect(() => {
    if (BackEndError !== "Not authorized") setBackError(BackEndError);
    setTimeout(() => setBackError(null), 3000);
  }, [BackEndError]);

  const { section, mainContainer } = css;
  return (
    <>
    <Tost message={backError}/>
      <BackgroundEffect />
      <div className={section}>
        <div className={mainContainer}>
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
