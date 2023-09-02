import React from 'react';
import PropTypes from 'prop-types';

const RecipePageTitle = ({title}) => {
  return (
    <h2>{title}</h2>
  )
};

RecipePageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default RecipePageTitle;