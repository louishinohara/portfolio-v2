import React from "react";
import AppBody from './components/AppBody';

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/index";
import { createStore, applyMiddleware } from "redux";

import { lightTheme, darkTheme } from './theme/themeColors';
import { composeWithDevTools } from "redux-devtools-extension";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import {GlobalStyles  } from './AppStyles';
const isDark = false;
function App() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return (
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyles />
        <ThemeProvider theme={createMuiTheme(isDark ? darkTheme : lightTheme)}>
          <AppBody />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
