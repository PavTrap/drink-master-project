import css from '../LogInPage/LoginPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage() {
  const { section, mainContainer } = css;
  return (
    <div className={section}>
      <div className={mainContainer}>
        <LoginForm />
      </div>
    </div>
  );
}
