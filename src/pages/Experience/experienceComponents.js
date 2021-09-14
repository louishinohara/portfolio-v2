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
  Avatar,Box
} from "@material-ui/core";

import { makeStyles, createStyles } from "@material-ui/styles";

function ExperienceComponent({ name, title, img, date, descr, left }) {
  const classes = experienceComponentStyles();
  const renderText = () => {
    return(
      <Grid
      container
      direction="column"
      justify="center"
      alignItems={left ? "flex-end" : "flex-start"}
    >
      <Grid item>
        <Text className={classes.jobName}>{name}</Text>
      </Grid>

      <Grid item>
        <Text className={classes.jobTitle}>{title}</Text>
      </Grid>            
      
      <Grid item>
        <Text className={classes.jobDate} >{date}</Text>
      </Grid>
    </Grid>
    )
  }
  return (
    <Grid
      container
      className={classes.body}
      alignItems="center"
      justify="center"
    >
      <Grid item className={classes.textBodyLeft}>
        {left && (
          renderText()
        )}
      </Grid>
      <Grid item>
        <Avatar 
          className={classes.avatar}
          src={img}   
         />
      </Grid>
      <Grid item className={classes.textBodyRight}>
        {!left && (
          renderText()
        )}
      </Grid>
    </Grid>
  );
}

export default ExperienceComponent;

const experienceComponentStyles = makeStyles((theme) =>
  createStyles({
    body: {
      marginTop: 100,
      marginBottom: 100,
      borderColor: '#cc0033',
      borderWidth: '3px',
    },
 
    avatar: {
      height: "13vw",
      width: "13vw",
      border: '7px solid lightgray',
      transitionDuration: '0.5s'
    },
    textBodyLeft: {
      height: "9vw",
      width: "35vw",
      marginRight: 24,
      textAlign: 'right'
    },
    textBodyRight: {
      height: "9vw",
      width: "35vw",
      marginLeft: 24,
      textAlign: 'left',
    },
    jobName:{
      fontSize: 20,
      fontWeight: '600',
      color: theme.palette.experience.jobName
    },
    jobTitle:{
      fontSize: 18,
      fontWeight: '500',
      color: theme.palette.experience.jobTitle

    },
    jobDate:{
      fontSize: 16,
      fontWeight: '500',
      color: theme.palette.experience.jobDate

    }
  })
);
