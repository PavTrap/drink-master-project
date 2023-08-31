import css from './BackgroundEffect.module.css';

const BackgroundEffect = () => {
  const { colorEffect1, colorEffect2, colorEffect3 } = css;
  return (
    <>
      <div className={colorEffect1}></div>
      <div className={colorEffect2}></div>
      <div className={colorEffect3}></div>
    </>
  );
};

export default BackgroundEffect;
