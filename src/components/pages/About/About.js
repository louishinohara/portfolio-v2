import React from "react";
import {
  Typography as Text,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

import me from "../../../assets/img/meBW.jpg";

function AboutPage() {
  const classes = aboutPageStyles();
  return (
    <Grid
      id="about"
      container
      className={classes.body}
      justify="center"
      alignItems="center"
    >
      <Grid item>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={me}></CardMedia>

        <CardContent className={classes.content}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.descrBackground}
          >
            <Grid item className={classes.nameBody}>
              <Text className={classes.nameText}>Ushio Louis Shinohara</Text>
            </Grid>

            <Grid item className={classes.majorBody}>
              <Text className={classes.majorText}>
                B.S in Electrical & Computer Engineering and Computer Science
              </Text>
            </Grid>

            <Grid item className={classes.myDescriptionContainer}>
     
                <Text className={classes.myDescriptionText}>
                Hello! My name is Ushio Louis Shinohara. I am currently a senior at Rutgers 
                University, New Brunswick pursuing a double major in Electrical and Computer 
                Engineering and Computer Science. Prior to switching into STEM, I was a business 
                major at Rutgers Newark for two years. My journey into STEM has been very difficult yet very 
                rewarding and I enjoy it very much! I am a self taught programmer who has actively 
                been coding for about two years now and I currently do work in front end development. 
                I have experience as a full-stack software engineer at my internship at United Health 
                Group last summer. My career goal is to become a software engineer and will icoming
                as a Associate Software Engineer for the Technical Development Program at AT&T after
                I graduate. Feel free to check out my website which I coded in React and some of my past projects. 
                I can't wait to hear back from you!
                </Text>
            
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      </Grid>
      
    </Grid>
  );
}

export default AboutPage;

const aboutPageStyles = makeStyles((theme) =>
  createStyles({
    body: {
      height: "100vh",
    },

    media: {
      height: "76vh",
      width: "20vw",
      objectFit: "contain",
    },
    nameBody: {
      marginLeft: 0,
    },
    nameText: {
      fontSize: 44,
      color: theme.palette.about.name,
      fontWeight: "600",
    },
    majorBody: {
      marginLeft: 0,
    },
    majorText: {
      fontSize: 24,
      color: theme.palette.about.major,
      fontWeight: "500",
    },
    descrBackground: {
      marginBottom: 24,
      marginLeft: 16
    },
    root: {
      display: "flex",
      backgroundColor: "transparent",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
      marginLeft: 40,
      width: "60vw",
    },
    myDescriptionContainer:{
      marginTop: '2vh'
    },
    myDescriptionText:{
      marginTop: '2vh',
      fontSize: '1.5vw',
      color: theme.palette.about.description
    }
  })
);
