import { useEffect, useState } from 'react';
import css from './Toast.module.css';


const Tost = ({ message, tittle = "Info", active , style}) => {
  const [showTost, setShowTost] = useState(true);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowTost(false);

    }, 5000);
  }, []);

  useEffect(() => {
    setIsActive(active)
  }, [active]);

  return (
    showTost && (

      <div className={`${css.tost} ${isActive && css.active}`} style={{...style}} onClick={() => setShowTost(false)}>

        {/* <h3 className={css.title}>{tittle}</h3> */}
        <p className={css.text}>{message}</p>
      </div>
    )
  );
};

export default Tost;