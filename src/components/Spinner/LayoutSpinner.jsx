import css from './Spinner.module.css';
import img from '../../assets/spinner.gif';
import Dots from './Dots';
export const LayoutSpiner = () => {
  return (
    <div className={css.section_transpatent}>
      <img className={css.spinner} src={img} alt={"spinner"}/>
      <Dots/>
    </div>
  );
};
