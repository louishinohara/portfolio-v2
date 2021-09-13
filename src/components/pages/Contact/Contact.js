import React from "react";
import {
    Typography as Text,
    Grid,
    IconButton
  } from "@material-ui/core";
  import { makeStyles, createStyles } from "@material-ui/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import {Link} from '../../../constants/constants';

function ContactPage() {
  const classes = contactPageStyles();
  return (
    <div className={classes.body} id="contact">
      <Grid container>
        <Grid item>
          <Text className={classes.test}>Contact</Text>
        </Grid>
        <Grid item>
        <IconButton>
          <Link smooth to="#landing">
            <KeyboardArrowUpIcon className={classes.downIcon} />
          </Link>
        </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactPage;

const contactPageStyles = makeStyles((theme) =>
  createStyles({
    downIcon:{
      color: theme.palette.base.color.dimGray,
      fontSize: 42
    },
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
