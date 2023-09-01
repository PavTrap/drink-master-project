import { useState } from 'react';
import PolularRecipeCard from './PolularRecipeCard';

// import axios  from "axios";
// import setAuthHeader from "helpers/axiosHedder";

const PolularRecipe = () => {
  const [title, setTitle] = useState(null);
  const [data, setData] = useState(null);

  const listItems = data.map(item => (
    // Correct! Key should be specified inside the array.
    <PolularRecipeCard key={item._id} item={item} />
  ));

  return (
    <article>
      <h3>{title}</h3>
      <ul> {data && data.map(item => <PolularRecipeCard key={item._id} item={item} />)}</ul>
    </article>
  );
};

export default PolularRecipe;
