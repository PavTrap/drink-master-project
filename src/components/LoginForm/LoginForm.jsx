import React from 'react';
// import { NavLink } from 'react-router-dom';
import css from './LoginForm.module.css';

// import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
// import { RiErrorWarningLine } from 'react-icons/ri';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { useFormik } from 'formik';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';

const LoginForm = () => {
  const {
    loginForm,
    loginTitle,
    inputWrapper,
    loginInput,
    loginButton,
    wrapper,
  } = css;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
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
            type="text"
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
