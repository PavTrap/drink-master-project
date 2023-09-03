import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';
import BackgroundEffect from '../../components/BackgroundEffect/BackgroundEffect';


export default function LoginPage() {
  const { section, mainContainer } = css;



    
  
 

  return (
    <>

      <BackgroundEffect />
      <div className={section}>
        <div className={mainContainer}>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
