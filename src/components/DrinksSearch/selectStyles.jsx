// styles for select-react
export const selectStyles = {
  // control: () => ({ ...css.selsctDrinks}),

  control: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    display: 'flex',
    color: isSelected ? '#F3F3F3' : 'rgba(243, 243, 243, 0.40)',
    backgroundColor: '#161f37',
    width: window.innerWidth <= 768 ? '100%' : '199px', 

   
    borderRadius: '200px',
    paddingTop: '14px',
    paddingBottom: '15px',
    paddingLeft: '24px',
    paddingRight: '24px',

    fontSize: '17px',
    fontWeight: '400',

    border: 'none', 
    boxShadow: 'none', 

    cursor: isDisabled ? 'not-allowed' : 'pointer', 
    transition: 'background-color 0.3s, box-shadow 0.3s', 
    '&:hover': {
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', 
    },
    '&:focus': {
      outline: 'none', 
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', 
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: '#161f37',
      color: isSelected ? '#F3F3F3' : 'rgba(243, 243, 243, 0.40)',

      cursor: isDisabled ? 'not-allowed' : 'pointer', 
      transition: 'background-color 0.3s, box-shadow 0.3s', 
      '&:hover': {
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', 
      },
      '&:focus': {
        outline: 'none', 
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', 
      },
    };
  },

  options: styles => {
    return {
      ...styles,
      borderRadius: '20px',
      backgroundColor: 'red',
      // display: 'flex'
    };
  },
  menu: provided => ({
    ...provided,
    // position: 'relative',
    paddingBottom: '14px',
    paddingLeft: '23px',
    paddingRight: '23px',
    paddingTop: '14px',

    borderRadius: '20px',
    backgroundColor: '#161F37',
    // backgroundColor: "red", // Задайте нужный цвет фона
    // borderRadius: "8px", // Пример округления углов
  }),
  menuList: provided => ({
    ...provided,
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
      // position: "absolute"

      // backgroundColor: 'red', // Цвет скроллбара
      // borderRadius: '4px', // Округление углов у ползунка скроллбара
    },
  }),

  singleValue: styles => ({
    ...styles,
    color: '#F3F3F3', // Задайте нужный цвет текста
  }),
  indicatorSeparator: () => ({
    display: 'none', // Скрываем разделитель
  }),
  dropdownIndicator: styles => ({
    ...styles,
    padding: 0, // Убираем паддинги
  }),
};
