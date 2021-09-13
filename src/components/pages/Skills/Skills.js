import React from "react";
import {
    Typography as Text,
    Grid,
  } from "@material-ui/core";
  import { makeStyles, createStyles } from "@material-ui/styles";
  
function SkillsPage() {
  const classes = skillsPageStyles();
  return (
    <div className={classes.body} id="skills" >
      <Grid container>
        <Grid item>
          <Text className={classes.test}>Skills</Text>
        </Grid>
      </Grid>
    </div>
  );
}

export default SkillsPage;

const skillsPageStyles = makeStyles((theme) =>
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
