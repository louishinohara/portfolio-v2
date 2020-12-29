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
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import { makeStyles, createStyles } from "@material-ui/styles";

function AppBarButton({ text, icon }) {
  const classes = appBarButtonStyles();
  return (
    <Grid container className={classes.body} alignItems="center" justify="center" >
      <Grid item>
        <Text className={classes.text}>{text}</Text>
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
    text:{
        color: theme.palette.appBar.title,
        fontSize: 16,
        letterSpacing: '6px',
        '&:hover': {
            color: theme.palette.appBar.hamburgerMenu,
         },
    },
    icon: {
        marginLeft: 4,
        marginRight: 4,
    }
  })
);
