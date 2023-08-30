import css from './Spinner.module.css';
import img from '../../assets/spinner.gif';
import Dots from './Dots';
export const Spinner = () => {
  return (
    <div className={css.section}>
      <img className={css.spinner} src={img} alt={"spinner"}/>
      <Dots/>
      <div className={css.gradient}></div>
      <div className={css.gradient2}></div>
      <div className={css.gradient3}></div>
      <div className={css.gradient4}></div>
    </div>
  );
};
