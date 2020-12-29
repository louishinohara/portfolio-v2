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

function AppBarButton({ text, icon }) {
  const classes = appBarButtonStyles();
  return (
    <Grid container className={classes.body} alignItems="center" justify="center" >
      <Grid item>
        {text}
      </Grid>
      <Grid item className={classes.icon} >{icon}</Grid>
    </Grid>
  );
}

export default AppBarButton;

const appBarButtonStyles = makeStyles((theme) =>
  createStyles({
    body: {
      marginLeft: 12,
      marginRight: 12,
    },
    icon: {
        marginLeft: 4,
        marginRight: 4,
    }
  })
);
