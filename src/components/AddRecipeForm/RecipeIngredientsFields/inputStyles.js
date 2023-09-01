export const ingredientStyles = {
  singleValue: styles => ({ //Init value
    ...styles,
    color: '#F3F3F3',
  }),
  control: styles => ({//base input
    ...styles,
    borderColor: 'rgba(243, 243, 243, 0.50)',
    outline: 'none',
    boxShadow: 'none',
    borderWidth: '1px',
    borderRadius: '60px',
    width: '316px',
    marginRight: '14px',
    height: '56px',
    paddingLeft: '14px',
    backgroundColor: 'transparent',
    color: '#F3F3F3',
    '&:hover': {
      borderColor: 'inherit',
      boxShadow: 'none',
    },
    '&:focus': {
      borderColor: 'inherit',
      boxShadow: 'none',
    },
  }),
  dropdownIndicator: (styles, { isFocused }) => ({  // icon
    ...styles,
    color: isFocused ? 'rgba(243, 243, 243, 0.50)' : '#F3F3F3',
    '&:hover': { color: '#F3F3F3' },
  }),
  option: (styles, { isFocused }) => ({    //List values
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
  menuList: styles => ({   //datalist menu
  
    ...styles,
    height: '100%',
    width: '316px',
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
  menu: styles => ({  // menu container
   
    ...styles,
    borderRadius: '20px',
    width: '316px',
    bachgroundColor: 'transparent',
  }),
};


export const measureStyles = {
  singleValue: styles => ({ //Init value
    ...styles,
    color: '#F3F3F3',
  }),
  control: (baseStyles, state) => ({ //base input 
    ...baseStyles,
    outline: 'none',
    borderColor: 'rgba(243, 243, 243, 0.50)',
    boxShadow: 'none',
    borderRadius: '60px',
    borderWidth: '1px',
    width: '150px',
    marginRight: '40px',
    height: '56px',
    paddingLeft: '24px',
    backgroundColor: 'transparent',
    color: '#F3F3F3',
    '&:hover': {
      borderColor: '#F3F3F3',
      boxShadow: 'none',
    },
    '&:focus': {
      borderColor: '#F3F3F3',
      boxShadow: 'none',
    },
  }),
  option:( base, {isFocused})=> ({  //List values
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
  dropdownIndicator: (styles, { isFocused }) => ({  // icon
    ...styles,
    color: isFocused ? 'rgba(243, 243, 243, 0.50)' : '#F3F3F3',
    '&:hover': { color: '#F3F3F3' },
  }),
  menuList: styles => ({   //datalist menu
    ...styles,
    height: '100%',
    width: '124px',
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
  menu: styles => ({  // menu container
   
    ...styles,
    borderRadius: '20px',
    width: '124px',
    bachgroundColor: 'transparent',
  }),
  placeholder: (defaultStyles) => { //plaseholder
    return {
        ...defaultStyles,
        color: '#ffffff',
    }
}
};
