import React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography as Text,
  MenuItem,
  Badge,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

import LandingPage from './LandingPage';
import MyAppBar from "./AppBar";

function AppBody() {
    const classes = appBodyStyles();
  return (
    <div className={classes.appBody}>
    <LandingPage className={classes.landingPage} />
    <MyAppBar /> 
    <Text style={{marginTop: 999}}>aaa</Text>
    </div>
  );
}

export default AppBody;

const appBodyStyles = makeStyles((theme) =>
  createStyles({
    appBody: {
      backgroundColor: theme.palette.base.backgroundColor,
    },
  })
);

