import { useEffect, useState } from 'react';
import css from './Toast.module.css';


const Tost = ({ message, tittle = "Info" }) => {
  const [showTost, setShowTost] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setShowTost(false);

    }, 5000);
  }, []);

  return (
    showTost && (
      <div className={css.tost} onClick={() => setShowTost(false)}>
        {/* <h3 className={css.title}>{tittle}</h3> */}
        <p className={css.text}>{message}</p>
      </div>
    )
  );
};

export default Tost;