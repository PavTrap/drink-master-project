import React from 'react';
import PropTypes from 'prop-types';
import css from './RecipePageTitle.module.css'

const RecipePageTitle = ({title}) => {
  return (
    <h2 className={css.title}>{title}</h2>
  )
};

RecipePageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default RecipePageTitle;