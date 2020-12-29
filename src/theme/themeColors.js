export const customColor = {
    black: '#000000',
    dimGray: '#6b6b6b',
    darkslatergray: '#242526',
    darkerBlack: '#3a3a3a',
    purple: '#7386d5',
    gray: '#888888',
    purple: '#7386d5',
    red: '#cc1031',
    silver: '#c5c5c5',
    solidBlack: '#18191a',
    white: '#f8f9fa',

}

export const lightTheme = {
  palette: {
    base: {
      color: customColor,
      backgroundColor: customColor.white,
    },
    landingPage:{
      backgroundColor: customColor.darkslatergray,
      nameColor: customColor.dimGray
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
      backgroundColor: customColor.solidBlack,

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