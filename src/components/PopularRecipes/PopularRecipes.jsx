import { useEffect, useState, } from 'react';
import PolularRecipeCard from './PolularRecipeCard';
import useAuth from 'hooks/useAuth';
import css from './PolularRecipe.module.css';

import axios from 'axios';

const PopularRecipes = () => {
  const { BackEndError } = useAuth();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const BaseUrl = 'https://drink-master-back-end.onrender.com';
        const response = await axios.get(`${BaseUrl}/api/popular-recipes`);
        response && setData(response.data);
      } catch (error) {
        setError(error);
      }
    })();
  }, [BackEndError]);



  return (
    <article>
      <h3 className={css.listTitle}>Popular recipe</h3>
      <ul className={css.list}> {data && data.map(item => <PolularRecipeCard key={item._id} item={item} />)}</ul>
      {error && <p>error</p>}
    </article>
  );
};

export default PopularRecipes;
