export const customColor = {
    black: '#000000',
    darkslatergray: '#242526',
    purple: '#7386d5',
    gray: '#888888',
    purple: '#7386d5',
    red: '#cc1031',
    silver: '#c5c5c5',
    white: '#f8f9fa',

}

export const lightTheme = {
  palette: {
    base: {
      color: customColor,
      test: customColor.red,
      
    },
    appBar:{
      appBarColor: customColor.white,
      title: customColor.black,
      hamburgerMenu: customColor.purple,
      buttonColor: customColor.black,
      divider: customColor.black
    }
  }
};

export const darkTheme = {
  ...lightTheme,
  palette: {
    // ...lightTheme.palette,
    type: 'dark',
    base:{
      color: customColor,
      test: customColor.black
    },
    appBar:{
      appBarColor: customColor.darkslatergray,
      title: customColor.gray,
      hamburgerMenu: customColor.purple,
      buttonColor: customColor.gray,
      divider: customColor.silver

    }
  }
};