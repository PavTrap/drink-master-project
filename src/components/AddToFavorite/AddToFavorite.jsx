import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './AddToFavorite.module.css'

const AddToFavorite = ({ onAdd }) => {
  const { recipeId } = useParams();
  console.log(recipeId)
  const dispatch = useDispatch();
  return (
    <button className={css.button} type="button" onClick={()=>dispatch(onAdd(recipeId))}>Add to favorite recipe</button>
  )
};

AddToFavorite.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddToFavorite;