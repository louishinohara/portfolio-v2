import React from "react";
import MyAppBar from "./AppBar";
import { makeStyles, createStyles } from "@material-ui/styles";

function AppBody() {
    const classes = appBodyStyles();
  return (
    <MyAppBar /> 
  );
}

export default AppBody;

const appBodyStyles = makeStyles((theme) =>
  createStyles({
    test: {
      backgroundColor: theme.palette.base.test,
    },
  })
);

