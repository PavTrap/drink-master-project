import PropTypes from 'prop-types';
// import s from './MainTitle.module.css'

export const MainTitle = ({ title }) => {
  return <h1>{title}</h1>;
};

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
