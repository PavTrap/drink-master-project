import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const RemoveFromFavorite = ({ id, onDelete }) => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={()=>dispatch(onDelete(id))}>Remove from favorite recipe</button>
  )
};

RemoveFromFavorite.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default RemoveFromFavorite;