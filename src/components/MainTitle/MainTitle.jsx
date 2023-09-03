import PropTypes from 'prop-types';
import css from './MainTitle.module.css';

export function MainTitle({ title }) {
  return (
    <h1 className={css.mainTitle}>{title}</h1>
    )
};

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
