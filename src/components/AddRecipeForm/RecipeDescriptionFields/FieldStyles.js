const fiendWIdth = '393px';

export const categoryStyles = {
  singleValue: styles => ({
    //Init value
    ...styles,
    color: '#F3F3F3',
    padding: 0,
    margin: 0,
  }),
  control: styles => ({
    //base input
    ...styles,
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    borderWidth: '1px',
    borderRadius: '60px',
    padding: 0,
    width: fiendWIdth,
    // height: '56px',
    backgroundColor: 'transparent',
    color: '#F3F3F3',
    // position: "absolute",
    // top: 0,
    // left: 0,
  }),
  dropdownIndicator: (styles, { isFocused }) => ({
    // icon
    ...styles,
    color: isFocused ? '#F3F3F3' : 'rgba(243, 243, 243, 0.50)',
    '&:hover': { color: '#F3F3F3' },
  }),
  option: (styles, { isFocused }) => ({
    //List values
    ...styles,
    color: isFocused ? '#F3F3F3' : 'rgba(243, 243, 243, 0.40)',
    fontSize: '14px',
    backgroundColor: 'transparent',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '400',
    cursor: 'pointer',
    lineHeight: '18px',
    transition: 'transform 200ms ease',
    '&:hover': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      color: '#F3F3F3',
      transform: 'scale(1.1) translateX(15px)',
    },
  }),
  menuList: styles => ({
    //datalist menu

    ...styles,

    width: fiendWIdth,
    marginBottom: '8px',
    backgroundColor: 'rgba(22, 31, 55, 1)',
    borderRadius: '20px',
    '::-webkit-scrollbar': {
      display: 'none',
    },
    padding: '14px',
    margin: '-1px',
    boxSizing: 'content-box',
  }),
  menu: styles => ({
    // menu container

    ...styles,
    borderRadius: '20px',
    width: fiendWIdth,
    bachgroundColor: 'transparent',
  }),
  placeholder: defaultStyles => ({
    //plaseholder

    ...defaultStyles,
    dislay: 'none',
  }),
};
