import img from '../../assets/dots.gif';
import css from"./Dots.module.css"

export default function Dots() {
  return (
    <div  className={css.container}>
      <img className={css.image} src={img} alt="loding Indicator" />
    </div>
  );
}
