export const customColor = {
    black: '#000000',
    red: '#cc1031'
}

export const lightTheme = {
  palette: {
    base: {
      test: customColor.red,
    },
  }
};

export const darkTheme = {
  ...lightTheme,
  palette: {
    ...lightTheme.palette,
    type: 'dark',
    base:{
      test: customColor.black
    }
  }
};