import css from '../RegisterPage/RegisterPage.module.css';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import BackgroundEffect from '../../components/BackgroundEffect/BackgroundEffect';


export default function RegisterPage() {


  const { section, mainContainer } = css;
  return (
    <>
      <BackgroundEffect />
      <div className={section}>
        <div className={mainContainer}>
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
