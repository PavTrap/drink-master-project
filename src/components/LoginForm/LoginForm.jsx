import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/Auth/authOperation';
import { useFormik } from 'formik';
import css from './LoginForm.module.css';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { useNavigate } from 'react-router-dom';

import useAuth from 'hooks/useAuth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginForm, loginTitle, inputWrapper, loginInput, loginButton, wrapper, error } = css;
  const [erorMessage, setErrorMessage] = useState(null);

  const { BackEndError } = useAuth();

  useEffect(() => {
    if (BackEndError) setErrorMessage(BackEndError);
    setTimeout(() => setErrorMessage(null), 3000);
  }, [BackEndError]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values, { resetForm }) => {
      const user = {
        email: values.email,
        password: values.password,
      };
      if (user.email !== '' && user.password !== '') {
        dispatch(login(user));
        if (!BackEndError) {
          navigate('/');
          resetForm();
        }
      } else {
        setErrorMessage('Please enter email and password');
        setTimeout(() => setErrorMessage(null), 3000);
      }
    },
  });

  return (
    <form className={loginForm} onSubmit={formik.handleSubmit}>
      <h1 className={loginTitle}> Sign In </h1>
      <div className={wrapper}>
        <div className={inputWrapper}>
          <input
            className={loginInput}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className={inputWrapper}>
          <input
            className={loginInput}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {erorMessage && (
            <p className={error} style={erorMessage && { color: 'red' }}>
              {erorMessage}
            </p>
          )}
        </div>
      </div>
      <button className={loginButton} type="submit">
        Sign In
      </button>
      <AuthNavigate />
    </form>
  );
};

export default LoginForm;
