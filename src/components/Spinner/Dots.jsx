import img from '../../assets/dots.gif';
import css from"./Dots.module.css"

export default function Dots({styles}) {
  return (
    <div  className={css.container} style={{...styles}}>
      <img className={css.image} src={img} alt="loding Indicator" />
    </div>
  );
}
