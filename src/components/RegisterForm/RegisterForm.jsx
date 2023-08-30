import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/Auth/authOperation';
import { useFormik } from 'formik';
import css from './RegisterForm.module.css';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [passwordError, setPasswordError] = useState('');
  const { registerForm, registerTitle, inputWrapper, registerInput, registerButton, wrapper, error } = css;
  const navigate = useNavigate();
  const handlePasswordChange = event => {
    const { value } = event.target;
    const pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}/;
    if (!pattern.test(value)) {
      setPasswordError(
        'Password must contain at least 9 characters, including uppercase letters, lowercase letters, numbers, and special characters.'
      );
    } else {
      setPasswordError('');
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      const user = {
        name: values.name,
        email: values.email,
        password: values.password,
      };

      if (passwordError) {
        return;
      }

      dispatch(register(user));
      resetForm();
      navigate('/signin');
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
            onChange={e => {
              formik.handleChange(e);
              handlePasswordChange(e);
            }}
            error={!!passwordError}
            value={formik.values.password}
          />
          {passwordError && <p className={error}>{passwordError}</p>}
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
