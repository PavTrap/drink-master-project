import React from 'react';
import { useDispatch } from 'react-redux';

const RemoveFromFavorite = ({ id, onDelete }) => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={()=>dispatch(onDelete(id))}>Remove from favorite recipe</button>
  )
};

export default RemoveFromFavorite;