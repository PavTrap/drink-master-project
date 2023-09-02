import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const AddToFavorite = ({ id, onAdd }) => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={()=>dispatch(onAdd(id))}>Add to favorite recipe</button>
  )
};

AddToFavorite.propTypes = {
  id: PropTypes.string.isRequired,
  // onAdd: PropTypes.func.isRequired,
};

export default AddToFavorite;