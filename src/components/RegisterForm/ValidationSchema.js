import * as Yup from 'yup';

export const RegisterSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яєїієґҐА-ЯЄЇІЄҐҐ'0-9]+$/, 'Name can only contain letters or numbers.')
    .required('Required'),
  email: Yup.string()
    .matches(/^[a-zA-Z0-9.~+_-]+@[^\s@]+\.[^\s@]+$/, 'This is an ERROR email')
    .required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .max(16, 'Password is too long - should be 16 chars maximum.')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[\d])(?=.*?[^\sa-zA-Z0-9]).{8,}/,
      'Password must contain uppercase letters, lowercase letters, numbers, and special characters.'
    ),
});

export const LoginSchema = Yup.object({
  email: Yup.string()
    .matches(/^[a-zA-Z0-9.~+_-]+@[^\s@]+\.[^\s@]+$/, 'This is an ERROR email')
    .required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .max(16, 'Password is too long - should be 16 chars maximum.')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[\d])(?=.*?[^\sa-zA-Z0-9]).{8,}/,
      'Password must contain uppercase letters, lowercase letters, numbers, and special characters.'
    ),
});
