import React from "react";
import {
    Typography as Text,
    Grid,
  } from "@material-ui/core";
  import { makeStyles, createStyles } from "@material-ui/styles";
  
function ExperiencePage() {
  const classes = experiencePageStyles();
  return (
    <div className={classes.body} id="experience">
      <Grid container>
        <Grid item>
          <Text className={classes.test}>Experience</Text>
        </Grid>
      </Grid>
    </div>
  );
}

export default ExperiencePage;

const experiencePageStyles = makeStyles((theme) =>
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
