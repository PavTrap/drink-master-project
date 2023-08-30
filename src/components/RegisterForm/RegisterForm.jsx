import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/Auth/authOperation';
import { useFormik } from 'formik';
import css from './RegisterForm.module.css';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { useNavigate } from 'react-router-dom';

import useAuth from 'hooks/useAuth';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [passwordError, setPasswordError] = useState(null);
  const { registerForm, registerTitle, inputWrapper, registerInput, registerButton, wrapper, error } = css;
  const navigate = useNavigate();
  const { BackEndError } = useAuth();

  useEffect(() => {
    if (BackEndError) setPasswordError(BackEndError);
    setTimeout(() => setPasswordError(null), 3000);
  }, [BackEndError]);

  const handlePasswordChange = event => {
    const { value } = event.target;
    const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[\d])(?=.*?[^\sa-zA-Z0-9]).{8,}/;
    !pattern.test(value)
      ? setPasswordError(
          'Password must contain at least 8 characters, including uppercase letters, lowercase letters, numbers, and special characters.'
        )
      : setPasswordError(null);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: async (values, { resetForm }) => {
      const user = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      if (passwordError) {
        return;
      }
      if (BackEndError) {
        setPasswordError(`${BackEndError}`);
        setTimeout(() => setPasswordError(null), 2000);
      }

      if (user.name !== '' || user.email !== '') {
        setPasswordError(null);
      }

      if (user.name !== '' && user.email !== '' && user.password !== '') {
        dispatch(register(user));
        if (!BackEndError) {
          resetForm();
          navigate('/signin');
        }
      } else {
        setPasswordError('Values required');
        setTimeout(() => setPasswordError(null), 2000);
      }
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
            type="password"
            placeholder="Password"
            autoComplete="off"
            onChange={e => {
              formik.handleChange(e);
              handlePasswordChange(e);
            }}
            // error={passwordError}
            value={formik.values.password}
          />
          {passwordError && (
            <p className={error} style={passwordError && { color: 'red' }}>
              {passwordError}
            </p>
          )}
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
