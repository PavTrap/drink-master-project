import { useState } from 'react';
import PolularRecipeCard from './PolularRecipeCard';

// import axios  from "axios";
// import setAuthHeader from "helpers/axiosHedder";

const PopularRecipes = () => {
  const [title, setTitle] = useState(null);
  const [data, setData] = useState(null);


  return (
    <article>
      <h3>{title}</h3>
      <ul> {data && data.map(item => <PolularRecipeCard key={item._id} item={item} />)}</ul>
    </article>
  );
};

export default PopularRecipes;
