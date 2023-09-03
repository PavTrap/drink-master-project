// styles for select-react
export const selectStylesCoktails = {

  singleValue: styles => ({
    //Init value
    ...styles,
    color: '#F3F3F3',
  }),

  control: (styles, { isSelected }) => ({
    ...styles,
    display: 'flex',
    color: isSelected ? '#F3F3F3' : 'rgba(243, 243, 243, 0.40)',
    backgroundColor: '#161f37',
    width: window.innerWidth <= 768 ? '100%' : '199px', // Изменяем ширину в зависимости от ширины окна

    // width: '200px',
    outline: 'none',

    borderWidth: '1px',
    borderRadius: '60px',

    paddingTop: '14px',
    paddingBottom: '15px',
    paddingLeft: '24px',
    paddingRight: '24px',
    fontSize: '17px',
    fontWeight: '400',
    // lineHeight: '26.52', /* 26.52px */

    border: 'none', // Убираем border
    boxShadow: 'none', // Убираем boxShadow, если есть
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: '#161f37',
    color: isFocused ? '#F3F3F3' : 'rgba(243, 243, 243, 0.40)',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '400',
    cursor: 'pointer',
    lineHeight: '18px',
  }),
  menu: styles => ({
    ...styles,

    paddingBottom: '14px',
    paddingLeft: '23px',
    paddingRight: '8px',
    paddingTop: '14px',

    borderRadius: '20px',
    backgroundColor: '#161F37',

  }),
  menuList: provided => ({
    ...provided,
    '&::-webkit-scrollbar': {
      display: "none",
    },
 
    boxSizing: 'content-box',

  }),
  indicatorSeparator: () => ({
    display: 'none', // Скрываем разделитель
  }),
  dropdownIndicator: styles => ({
    ...styles,
    padding: 0, // Убираем паддинги
  }),
};


export const selectStylesIngredients = {

  singleValue: styles => ({
    //Init value
    ...styles,
    color: '#F3F3F3',
  }),

  control: (styles, { isSelected }) => ({
    ...styles,
    display: 'flex',
    color: isSelected ? '#F3F3F3' : 'rgba(243, 243, 243, 0.40)',
    backgroundColor: '#161f37',
    width: window.innerWidth <= 768 ? '100%' : '199px', // Изменяем ширину в зависимости от ширины окна

    // width: '200px',
    outline: 'none',

    borderWidth: '1px',
    borderRadius: '60px',

    paddingTop: '14px',
    paddingBottom: '15px',
    paddingLeft: '24px',
    paddingRight: '24px',
    fontSize: '17px',
    fontWeight: '400',
    // lineHeight: '26.52', /* 26.52px */

    border: 'none', // Убираем border
    boxShadow: 'none', // Убираем boxShadow, если есть
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: '#161f37',
    color: isFocused ? '#F3F3F3' : 'rgba(243, 243, 243, 0.40)',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '400',
    cursor: 'pointer',
    lineHeight: '18px',
  }),
  menu: styles => ({
    ...styles,

    paddingBottom: '14px',
    paddingLeft: '23px',
    paddingRight: '8px',
    paddingTop: '14px',
   
    borderRadius: '20px',
    backgroundColor: '#161F37',

  }),
  menuList: provided => ({
    ...provided,
     
    boxSizing: 'content-box',
    '&::-webkit-scrollbar': {
      width: '8px',
      height: '110px',
      position: 'relative', // Абсолютное позиционирование
      right: '8px', // Отступ с правой стороны
      top: 0, // Верхний отступ
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '20px',
      background: '#434D67',  
    },
  }),
  indicatorSeparator: () => ({
    display: 'none', // Скрываем разделитель
  }),
  dropdownIndicator: styles => ({
    ...styles,
    padding: 0, // Убираем паддинги
  }),
};


