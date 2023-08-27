import React from 'react';
// import { NavLink } from 'react-router-dom';
import css from './RegisterForm.module.css';

// import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
// import { RiErrorWarningLine } from 'react-icons/ri';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { useFormik } from 'formik';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';

const RegisterForm = () => {
  const {
    registerForm,
    registerTitle,
    inputWrapper,
    registerInput,
    registerButton,
    wrapper,
  } = css;

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className={registerForm} onSubmit={formik.handleSubmit}>
      <h1 className={registerTitle}> Registration </h1>
      <div className={wrapper}>
        <div className={inputWrapper}>
          <input
            className={registerInput}
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div className={inputWrapper}>
          <input
            className={registerInput}
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
            className={registerInput}
            id="password"
            name="password"
            type="text"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
      </div>
      <button className={registerButton} type="submit">
        Sign Up
      </button>
      <AuthNavigate />
    </form>
  );
};

export default RegisterForm;
