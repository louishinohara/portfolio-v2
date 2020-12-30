import React from "react";
import {
    Typography as Text,
    Grid,
  } from "@material-ui/core";
  import { makeStyles, createStyles } from "@material-ui/styles";
  
function ProjectsPage() {
  const classes = projectsPageStyles();
  return (
    <div className={classes.body} id="projects">
      <Grid container>
        <Grid item>
          <Text className={classes.test}>Projects</Text>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectsPage;

const projectsPageStyles = makeStyles((theme) =>
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
