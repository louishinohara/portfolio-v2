import React from "react";
import MyAppBar from "./AppBar";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography as Text,
  MenuItem,
  Badge,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import myImg from '../assets/img/test1.jpg'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const part1 = "Hey I'm,";
const name = "Louis Shinohara";
const description1 = "I'm a ";
const R = 'R  ';
const U = 'U'
const description2 = 'student and aspiring ';
const SWE = ' Software Engineer';
const period = "";

function LandingPage() {
  const classes = landingPageStyles();
  return (
    <Grid
      container
      direction="column"
      className={classes.body}
      justify="space-between"
      alignItems="center"
    >
        {/* Little Trick To Have A Third Item In Column  */}
        <Grid item> 
        <Text></Text> 
        </Grid>
        <Grid item>
        <Grid item>
        <Grid container alignItems='center' justify='center' >
          {/* <Grid item>
            <Text className={classes.mainText} >{part1}</Text>
          </Grid>
          <Grid item>
            <Text className={classes.mainText} >{" "}</Text>
          </Grid> */}
          <Grid item>
            <Text className={classes.name}>{name} </Text>
          </Grid>
          <Grid item>
            <Text className={classes.period} >{period}</Text>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
      <Grid container alignItems='center' justify='center' >

          {/* <Grid item>
            <Text className={classes.mainText} >{description1}</Text>
          </Grid>
          <Grid item>
            <Text className={classes.mainText} >{" "}</Text>
          </Grid> */}
          <Grid item>
            <Text className={classes.R}>{R} </Text>
          </Grid>
          <Grid item>
            <Text className={classes.U}>{U} </Text>
          </Grid>
          <Grid item>
            <Text className={classes.mainText} >{" "}</Text>
          </Grid>
          <Grid item>
            <Text className={classes.mainText} >{description2}</Text>
          </Grid>
          <Grid item>
            <Text className={classes.mainText} >{" "}</Text>
          </Grid>
          <Grid item>
            <Text className={classes.SWE} >{SWE}</Text>
          </Grid>
          <Grid item>
            <Text className={classes.period} >{period}</Text>
          </Grid>
        </Grid>
 
      </Grid>
        </Grid>
     
      <Grid item className={classes.iconButton}>
          <IconButton>
              <KeyboardArrowDownIcon />
          </IconButton>
      </Grid>
    </Grid>
  );
}

export default LandingPage;

const landingPageStyles = makeStyles((theme) =>
  createStyles({
      img:{
        height: 160,
        width: 180,
      },
    body: {
      height: "100vh",
      backgroundColor: 'rgba(0,0,0,0.83)',
      backgroundImage: `url(${myImg})`,
      backgroundSize: 'cover',
      backgroundBlendMode: 'overlay'
    },
    mainText: {
        color: 'white',
        fontSize: '2.85vw',
        fontWeight: '500',
        marginLeft: 3,
        marginRight: 3
    },
    name: {
        color: theme.palette.landingPage.nameColor,
        fontSize: '3.5vw',
        fontWeight: '600',
        marginLeft: 3,
    },
    R: {
        color: '#cc0033',
        fontSize: '3.5vw',
        fontWeight: '600',
        marginLeft: 2,
        marginRight: 2
    },
    U: {
        color: '#cc0033',
        fontSize: '3.5vw',
        fontWeight: '600',
        marginLeft: 2,
        marginRight: 2
    },
    SWE : {
        color: 'green',
        fontSize: '3.5vw',
        fontWeight: '600',
        marginLeft: 2,
    },
    period: {
        color: 'white',
        fontSize: '2.85vw',
        fontWeight: '500',
    },
    iconButton: {
        paddingBottom: 16
    }
  })
);
