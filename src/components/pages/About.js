import React from "react";
import { Typography as Text, Grid, Card, CardMedia } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

import me from "../../assets/img/me.JPG";

function AboutPage() {
  const classes = aboutPageStyles();
  return (
    <div className={classes.body} id="about">
      <Grid container justify="center" alignItems="center">
        <Grid item className={classes.mediaContainer}>
          <Card>
            <CardMedia className={classes.media} image={me}></CardMedia>
          </Card>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.nameBody}>
              <Text className={classes.nameText}>Ushio Louis Shinohara</Text>
            </Grid>
            <Grid item className={classes.majorBody}>
            <Text className={classes.majorText}>Electrical and Computer Engineering and Computer Science Student</Text>
            </Grid>
            <Grid item>
              <Text>aaa</Text>
            </Grid>
          </Grid>
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
      color: "#f7f8f9",
    },
    mediaContainer:{
      marginTop: 50
    },
    media: {
      // maxHeight: "100%",
      // width: "100%",
      height: "600px",
      width: "400px",
      objectFit: 'contain',
 
    },
    nameBody:{
      marginLeft: 16
    },
    nameText:{
      fontSize: 44,
      color: theme.palette.base.color.dimGray,
      fontWeight: '600'
    },
    majorBody:{
      marginLeft: 16
    },
    majorText:{
      fontSize: 24,
      color: theme.palette.base.color.dimGray,
      fontWeight: '500'
    }
  })
);
