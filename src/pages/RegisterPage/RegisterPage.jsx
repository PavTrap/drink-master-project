import css from '../RegisterPage/RegisterPage.module.css';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

export default function RegisterPage() {
  const { section, mainContainer } = css;
  return (
    <div className={section}>
      <div className={mainContainer}>
        <RegisterForm />
      </div>
    </div>
  );
}
