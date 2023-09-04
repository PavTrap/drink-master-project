import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/Auth/authOperation';
import { useFormik } from 'formik';
import css from './RegisterForm.module.css';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { useNavigate } from 'react-router-dom';


import { RegisterSchema } from './ValidationSchema';

import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { RiErrorWarningLine } from 'react-icons/ri';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import useAuth from 'hooks/useAuth';



const RegisterForm = () => {
  const dispatch = useDispatch();
  const [passwordError, setPasswordError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { BackEndError } = useAuth();

  const {
    registerForm,
    registerTitle,
    inputWrapper,
    registerInput,
    registerButton,
    wrapper,
    errorIconClass,
    validIconClass,
    error,
    passwordToggleIcon,
    invalidBorder,
    validBorder,
  } = css;
  const navigate = useNavigate();



  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { resetForm }) => {
      const user = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      if (passwordError) {
        return;
      }

      if (user.name !== '' || user.email !== '') {
        setPasswordError(null);
      }

      if (user.name !== '' && user.email !== '' && user.password !== '') {
        //логика просмотра ответа с бека
        dispatch(register(user));
        if (!BackEndError) {
          resetForm();
          navigate('/');
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
            className={`${registerInput} ${formik.touched.name ? (formik.errors.name ? invalidBorder : validBorder) : ''}`}
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            autoComplete="off"
          />
          {formik.touched.name && ( // Перевірка, чи інпут був доторкнутий
            <>
              {formik.errors.name && ( // Перевірка наявності помилки
                <div>
                  <RiErrorWarningLine className={errorIconClass} />
                  <p className={error} style={{ color: 'red' }}>
                    {formik.errors.name}
                  </p>
                </div>
              )}
              {!formik.errors.name && ( // Перевірка відсутності помилки
                <div>
                  <IoIosCheckmarkCircleOutline className={validIconClass} />
                  <p className={error} style={{ color: 'green' }}>
                    This is a CORRECT name
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        <div className={inputWrapper}>
          <input
            className={`${registerInput} ${formik.touched.email ? (formik.errors.email ? invalidBorder : validBorder) : ''}`}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            autoComplete="off"
          />
          {formik.touched.email && ( // Перевірка, чи інпут був доторкнутий
            <>
              {formik.errors.email && ( // Перевірка наявності помилки
                <div>
                  <RiErrorWarningLine className={errorIconClass} />
                  <p className={error} style={{ color: 'red' }}>
                    {formik.errors.email}
                  </p>
                </div>
              )}
              {!formik.errors.email && ( // Перевірка відсутності помилки
                <div>
                  <IoIosCheckmarkCircleOutline className={validIconClass} />
                  <p className={error} style={{ color: 'green' }}>
                    This is a CORRECT email
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        <div className={inputWrapper}>
          <div className="password-input-wrapper">
            <input
              className={`${registerInput} ${formik.touched.password ? (formik.errors.password ? invalidBorder : validBorder) : ''}`}
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          <div onClick={togglePasswordVisibility}>
            {showPassword ? <AiOutlineEye className={passwordToggleIcon} /> : <AiOutlineEyeInvisible className={passwordToggleIcon} />}
          </div>
          {formik.touched.password && ( // Перевірка, чи інпут був доторкнутий
            <>
              {formik.errors.password && ( // Перевірка наявності помилки
                <div>
                  <p className={error} style={{ color: 'red' }}>
                    {formik.errors.password}
                  </p>
                </div>
              )}
              {!formik.errors.password && ( // Перевірка відсутності помилки
                <div>
                  <p className={error} style={{ color: 'green' }}>
                    This is a CORRECT password
                  </p>
                </div>
              )}
            </>
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
