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
  return (
    <Grid
      container
      className={classes.body}
      alignItems="center"
      justify="center"
    >
      <Grid item className={classes.textBodyLeft}>
        {left && (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-end"
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
        )}
      </Grid>
      <Grid item>
        <Avatar src={img} className={classes.avatar} />

 
      </Grid>
      <Grid item className={classes.textBodyRight}>
        {!left && (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
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
        )}
      </Grid>
    </Grid>
  );
}

export default ExperienceComponent;

const experienceComponentStyles = makeStyles((theme) =>
  createStyles({
    body: {
      marginTop: 50,
      marginBottom: 50,
      borderColor: '#cc0033',
      borderWidth: '3px',
    },
 
    avatar: {
      height: "10vw",
      width: "10vw",

    },
    textBodyLeft: {
      height: "9vw",
      width: "35vw",
      marginRight: 24,
      marginTop: "4vw"
    },
    textBodyRight: {
      height: "9vw",
      width: "35vw",
      marginLeft: 24,
      marginTop: "4vw"
    },
    jobName:{
      fontSize: 20,
      fontWeight: '500',
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
