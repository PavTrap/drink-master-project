import styles from './BurgerMenuIcon.module.css';

const BurgerMenuIcon = ({ active, onClick }) => {
  // Додаємо клас `active` при необхідності
  const burgerIconClass = active
    ? `${styles['burger-icon']} ${styles['hideOnDesktop']} active`
    : `${styles['burger-icon']} ${styles['hideOnDesktop']}`;

  return (
    <div className={burgerIconClass} onClick={onClick}>
      {active ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none">
          <path stroke="#F3F3F3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m28.5 9.5-19 19M9.5 9.5l19 19" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none">
          <path
            stroke="#F3F3F3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M33.25 15.833H4.75M33.25 9.5H4.75M33.25 22.167H4.75M33.25 28.5H4.75"
          />
        </svg>
      )}
    </div>
  );
};

export default BurgerMenuIcon;
