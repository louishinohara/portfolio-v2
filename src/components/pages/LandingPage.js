import React from "react";
import { IconButton, Typography as Text, Grid } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import Typical from "react-typical";
import {
  nameDelay,
  nameTransitionDuration,
  descriptionDelay,
  decriptionTransitionDuration,
  descriptionTextDelayArray,
} from "../../constants/constants";
import FadeIn from "react-fade-in";
import myImg from "../../assets/img/test1.jpg";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { MDBAnimation } from "mdbreact";
import { Link } from "../../constants/constants";
import { useHistory } from "react-router-dom";

import {isMobile} from '../../constants/constants';

const name = "Ushio Louis Shinohara";

// Jump over camera
// Website text starts to show
// Louis Shinohara
// Make the text underneath my name cycle from
// BMX -> RU Student -> Aspiring Software Engineer
// Clip of Me Biking -> Clip of me at school -> Clip of me coding
// At the end of the click, transition to the about page

function LandingPage() {
  const classes = landingPageStyles();
  const history = useHistory();

  // React.useEffect(() => {


  //   let totalTime =
  //     nameDelay +
  //     descriptionDelay +
  //     descriptionTextDelayArray.reduce((a, b) => a + b, 0) +
  //     3000;
  //   setTimeout(() => {
  //   history.push('/appBar')
      
  //   }, 2000);
  // }, []);
  return (
    <Grid
      container
      direction="column"
      className={classes.body}
      justify="space-between"
      alignItems="center"
      id="landing"
    >
      {/* Little Trick To Have A Third Item In Column  */}
      <Grid item>
        <Text></Text>
      </Grid>
      {/* Name Section */}
      <Grid item>
        <Grid item>
          <FadeIn delay={nameDelay} transitionDuration={nameTransitionDuration}>
            <Text className={classes.name}>{name} </Text>
          </FadeIn>
        </Grid>
        {/* Description Section */}
        <Grid item>
          <FadeIn
            delay={descriptionDelay}
            transitionDuration={decriptionTransitionDuration}
          >
            <Grid container alignItems="center" justify="center">
              <Grid item>
                <Typical
                  className={classes.typicalText}
                  steps={[
                    " ",
                    descriptionTextDelayArray[0],
                    "BMX Enthusiast",
                    descriptionTextDelayArray[1],
                    "Rutgers Student",
                    descriptionTextDelayArray[2],
                    "Aspiring Software Engineer",
                    descriptionTextDelayArray[3],
                    "Welcome To My Site",
                    descriptionTextDelayArray[4],
                  ]}
                  loop={1}
                  wrap={"span"}
                />
              </Grid>
            </Grid>
          </FadeIn>
        </Grid>
      </Grid>

      <Grid item className={classes.iconButton}>
      <FadeIn delay={descriptionDelay + 2000} transitionDuration={decriptionTransitionDuration + 2000}>
        <IconButton>
          <Link smooth to="#appBar">
      <MDBAnimation type="bounce" infinite={true}>

            <KeyboardArrowDownIcon className={classes.downIcon} />
            </MDBAnimation>

          </Link>
        </IconButton>
         </FadeIn>
      </Grid>
    </Grid>
  );
}

export default LandingPage;

const landingPageStyles = makeStyles((theme) =>
  createStyles({
    body: {
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.83)",
      backgroundImage: `url(${myImg})`,
      backgroundSize: "cover",
      backgroundBlendMode: "overlay",
    },
    mainText: {
      color: "white",
      fontSize: "3.85vh",
      fontWeight: "500",
    },
    name: {
      color: theme.palette.landingPage.nameColor,
      fontSize: isMobile ? "1.5vh" : "5.8vh",
      fontWeight: "500",
      marginLeft: 3,
      letterSpacing: "8px",
    },
    typicalText: {
      color: theme.palette.landingPage.descriptionColor,
      fontSize: isMobile ? "1.3vh" : "3.3vh",
      fontWeight: "500",
      letterSpacing: "3px",
      paddingTop: '0px !important'
    },
    iconButton: {
      paddingBottom: 16,
    },
    downIcon: {
      color: theme.palette.base.color.dimGray,
      fontSize: 42,
    },
  })
);
