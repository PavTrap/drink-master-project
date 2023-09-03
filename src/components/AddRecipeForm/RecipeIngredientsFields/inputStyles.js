export const ingredientStyles = {
  singleValue: styles => ({
    //Init value
    ...styles,
    color: '#F3F3F3',

  }),
  valueContainer: styles =>({
    padding:0,
    display:"flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "18px",
  }),
  control: styles => ({
    //base input
    ...styles,
    borderColor: 'rgba(243, 243, 243, 0.50)',
    outline: 'none',
    boxShadow: 'none',
    borderWidth: '1px',
    borderRadius: '60px',



    backgroundColor: 'transparent',
    color: '#F3F3F3',
    height: '50px',
    width: '200px',
    '@media only screen and (min-width: 768px)': {
      ...styles['@media only screen and (min-width: 768px)'],
      width: '332px',
      height: '56px',

    },
    '@media only screen and (min-width: 1440px)': {
      ...styles['@media only screen and (min-width: 1440px)'],
      width: '316',
      height: '56px',
    },

    '&:hover': {
      borderColor: 'inherit',
      boxShadow: 'none',
    },
    '&:focus': {
      borderColor: 'inherit',
      boxShadow: 'none',
    },
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
    height: '100%',

    marginBottom: '8px',
    backgroundColor: 'rgba(22, 31, 55, 1)',
    borderRadius: '20px',
    '::-webkit-scrollbar': {
      display: 'none',
    },
    padding: '14px',
    margin: '-1px',
    boxSizing: 'content-box',
    width: '172px',
    '@media only screen and (min-width: 768px)': {
      ...styles['@media only screen and (min-width: 768px)'],
      width: '304px',
    },
    '@media only screen and (min-width: 1440px)': {
      ...styles['@media only screen and (min-width: 1440px)'],
      width: '295px',
    },
  }),
  menu: styles => ({
    // menu container

    ...styles,
    borderRadius: '20px',

    width: '172px',
    '@media only screen and (min-width: 768px)': {
      ...styles['@media only screen and (min-width: 768px)'],
      width: '304px',
    },
    '@media only screen and (min-width: 1440px)': {
      ...styles['@media only screen and (min-width: 1440px)'],
      width: '295px',
    },
    bachgroundColor: 'transparent',
  }),
};

export const measureStyles = {
  singleValue: styles => ({
    //Init value
    ...styles,
    color: '#F3F3F3',
  }),

  control: (baseStyles, state) => ({
    //base input
    ...baseStyles,
    outline: 'none',
    borderColor: 'rgba(243, 243, 243, 0.50)',
    boxShadow: 'none',
    borderRadius: '60px',
    borderWidth: '1px',


    paddingLeft: '8px',
    backgroundColor: 'transparent',
    color: '#F3F3F3',
    width: '101px',
    height: '50px',
    '@media only screen and (min-width: 768px)': {
      ...baseStyles['@media only screen and (min-width: 768px)'],
      width: '150px',
      height: '56px',
      paddingLeft: '24px',

    },
    '@media only screen and (min-width: 1440px)': {
      ...baseStyles['@media only screen and (min-width: 1440px)'],
      width: '150px',
      height: '56px',
    },
    '&:hover': {
      borderColor: '#F3F3F3',
      boxShadow: 'none',
    },
    '&:focus': {
      borderColor: '#F3F3F3',
      boxShadow: 'none',
    },
  }),
  option: (base, { isFocused }) => ({
    //List values
    ...base,
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
      transform: 'scale(1.15) translateX(10px)',
    },
  }),
  dropdownIndicator: (styles, { isFocused }) => ({
    // icon
    ...styles,
    padding: 0,
    marginRight:"8px",
    color: isFocused ? '#F3F3F3' : 'rgba(243, 243, 243, 0.50)',
    '&:hover': { color: '#F3F3F3' },
  }),
  menuList: styles => ({
    //datalist menu
    ...styles,
    height: '100%',
    // width: '124px',
    marginBottom: '8px',
    backgroundColor: 'rgba(22, 31, 55, 1)',
    borderRadius: '20px',
    '::-webkit-scrollbar': {
      display: 'none',
    },
    padding: '14px',
    margin: '-1px',
    boxSizing: 'content-box',
    width: '73px',

    '@media only screen and (min-width: 768px)': {
      ...styles['@media only screen and (min-width: 768px)'],
      width: '122px',
    },
    '@media only screen and (min-width: 1440px)': {
      ...styles['@media only screen and (min-width: 1440px)'],
      width: '122px',
    },
  }),
  menu: styles => ({
    // menu container

    ...styles,
    borderRadius: '20px',

    bachgroundColor: 'transparent',
    width: '73px',

    '@media only screen and (min-width: 768px)': {
      ...styles['@media only screen and (min-width: 768px)'],
      width: '122px',
    },
    '@media only screen and (min-width: 1440px)': {
      ...styles['@media only screen and (min-width: 1440px)'],
      width: '122px',
    },
  }),
  placeholder: defaultStyles => {
    //plaseholder
    return {
      ...defaultStyles,
      color: '#ffffff',
    };
  },
};
