import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/Auth/authOperation';
import { useFormik } from 'formik';
import css from './LoginForm.module.css';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loginForm, loginTitle, inputWrapper, loginInput, loginButton, wrapper } = css;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      const user = {
        email: values.email,
        password: values.password,
      };

      dispatch(login(user));
      resetForm();
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
            onChange={formik.handleChange}
            value={formik.values.password}
          />
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
