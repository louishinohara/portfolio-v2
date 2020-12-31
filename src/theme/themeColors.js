export const customColor = {
    black: '#000000',
    darkBlack: '#18191a',
    dimGray: '#6b6b6b',
    darkslatergray: '#242526',
    darkerBlack: '#3a3a3a',
    darkGray: '#aaaaaa',
    facebookGray: '#3a3b3c',
    lightslatergray:'#919191',
    purple: '#7386d5',
    gainsBoro: '#e0e0e0',
    gray: '#777777',
    purple: '#7386d5',
    red: '#cc1031',
    rutgersRed: '#cc0033',
    silver: '#c5c5c5',
    solidBlack: '#18191a',
    white: '#f8f9fa',
}

export const lightTheme = {
  palette: {
    base: {
      color: customColor,
      backgroundColor: customColor.white,
      themeColor:customColor.rutgersRed
    },
    landingPage:{
      backgroundColor: customColor.darkslatergray,
      nameColor: customColor.gainsBoro,
      descriptionColor: customColor.lightslatergray
    },
    appBar:{
      appBarColor: customColor.white,
      title: customColor.black,
      hamburgerMenu: customColor.rutgersRed,
      buttonColor: customColor.black,
      divider: customColor.black
    },
    about:{
      name: customColor.black,
      major: customColor.black,
      description: customColor.black
    },
    experience:{
      jobName: customColor.black,
      jobTitle: customColor.black,
      jobDate:customColor.black
    }
  }
};

export const darkTheme = {
  ...lightTheme,
  palette: {
    ...lightTheme.palette,
    type: 'dark',
    base:{
      color: customColor,
      backgroundColor: customColor.solidBlack,
      themeColor:customColor.rutgersRed
    },
    appBar:{
      // appBarColor: customColor.darkBlack,
      appBarColor: customColor.darkslatergray,
      title: customColor.gray,
      hamburgerMenu: customColor.rutgersRed,
      buttonColor: customColor.gray,
      divider: customColor.silver
    },
    about:{
      name: customColor.gainsBoro,
      major: customColor.silver,
      description: customColor.darkGray
    },
    experience:{
      jobName: customColor.white,
      jobTitle: customColor.silver,
      jobDate:customColor.gray
    }
  }
};