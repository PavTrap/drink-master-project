import React from 'react';
import { useDispatch } from 'react-redux';

const AddToFavorite = ({ id, onAdd }) => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={()=>dispatch(onAdd(id))}>Add to favorite recipe</button>
  )
};

export default AddToFavorite;