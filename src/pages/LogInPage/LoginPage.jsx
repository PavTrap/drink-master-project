import LoginForm from '../../components/LoginForm/LoginForm';
import css from "./LoginPage.module.css"

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
