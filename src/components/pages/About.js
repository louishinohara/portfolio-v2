import React from "react";
import {
    Typography as Text,
    Grid,
  } from "@material-ui/core";
  import { makeStyles, createStyles } from "@material-ui/styles";
  
function AboutPage() {
  const classes = aboutPageStyles();
  return (
    <div className={classes.body} id="about">
      <Grid container>
        <Grid item>
          <Text className={classes.test}>About</Text>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutPage;

const aboutPageStyles = makeStyles((theme) =>
  createStyles({
    body: {
      height: "100vh",
    },
    test: {
      backgroundColor: theme.palette.base.backgroundColor,
      fontSize: 50,
      color: '#f7f8f9'
    },
  })
);
