import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography as Text,
  Grid,
  createStyles,
  Divider,
} from "@material-ui/core";
import { drawerWidth, isMobile } from "../constants/constants";
import CustomDrawer from "./Drawer";
import { Link } from "../constants/constants";

import Resume from "../assets/resume/Resume.pdf";

import AppBarButton from "./reusable/appBarButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";

export default function MyAppBar() {
  const classes = appBarStyles();
  const [open, setOpen] = React.useState(false);
  const [linkedInHover, setLinkedInHover] = React.useState(false);
  const [gitHubHover, setGitHubHover] = React.useState(false);

  const [resumeHover, setResumeHover] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const hoverLinkedIn = () => {
    setLinkedInHover(!linkedInHover);
  };
  const hoverGitHub = () => {
    setGitHubHover(!gitHubHover);
  };
  const hoverResume = () => {
    setResumeHover(!resumeHover);
  };

  return (
    <div id="appBar">
      <AppBar
        // position="fixed"
        position="sticky"
        className={classes.appBar}
      >
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            {/* START MENU TEXT */}

            <Grid item>
              <Grid container>
                <Grid item className={classes.menuTextContainer}>
                  <Link
                    to="#landing"
                    smooth
                    activeClassName="selected"
                    activeStyle={{ color: "red" }}
                  >
                    <Text className={classes.menuText}>Home</Text>
                  </Link>
                </Grid>
                <Grid item className={classes.menuTextContainer}>
                  <Link to="#about" smooth>
                    <Text className={classes.menuText}>About</Text>
                  </Link>
                </Grid>
                <Grid item className={classes.menuTextContainer}>
                  <Link to="#projects" smooth>
                    <Text className={classes.menuText}>Projects</Text>
                  </Link>
                </Grid>
                <Grid item className={classes.menuTextContainer}>
                  <Link to="#skills" smooth>
                    <Text className={classes.menuText}>Skills</Text>
                  </Link>
                </Grid>
                <Grid item className={classes.menuTextContainer}>
                  <Link to="#experience" smooth>
                    <Text className={classes.menuText}>Experience</Text>
                  </Link>
                </Grid>
                <Grid item className={classes.menuTextContainer}>
                  <Link to="#contact" smooth>
                    <Text className={classes.menuText}>Contact</Text>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            {/* END MENU TEXT */}

            {/* START FOR THE TEXT BUTTONS ON THE RIGHT SIDE OF MENU */}
            {isMobile ? null : (
              <Grid item>
                <Grid container>
                  <Grid
                    item
                    onMouseOver={hoverLinkedIn}
                    className={classes.gridItem}
                  >
                    <AppBarButton
                      text={
                        <Text
                          className={
                            linkedInHover ? classes.textHover : classes.text
                          }
                        >
                          LinkedIn
                        </Text>
                      }
                      icon={
                        <LinkedInIcon
                          className={
                            linkedInHover ? classes.iconHover : classes.icon
                          }
                        />
                      }
                      url={"https://www.linkedin.com/in/louishinohara/"}
                    />
                  </Grid>
                  <Divider
                    className={classes.divider}
                    orientation="vertical"
                    flexItem
                  />

                  <Grid
                    item
                    onMouseOver={hoverGitHub}
                    className={classes.gridItem}
                  >
                    <AppBarButton
                      text={
                        <Text
                          className={
                            gitHubHover ? classes.textHover : classes.text
                          }
                        >
                          GitHub
                        </Text>
                      }
                      icon={
                        <GitHubIcon
                          className={
                            gitHubHover ? classes.iconHover : classes.icon
                          }
                        />
                      }
                      url={"https://github.com/louishinohara"}
                    />
                  </Grid>
                  <Divider
                    className={classes.divider}
                    orientation="vertical"
                    flexItem
                  />
                  <Grid
                    item
                    onMouseOver={hoverResume}
                    className={classes.gridItem}
                  >
                    <AppBarButton
                      text={
                        <Text
                          className={
                            resumeHover ? classes.textHover : classes.text
                          }
                        >
                          Resume
                        </Text>
                      }
                      icon={
                        <DescriptionIcon
                          className={
                            resumeHover ? classes.iconHover : classes.icon
                          }
                        />
                      }
                      url={Resume}
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
            {/* END FOR THE TEXT BUTTONS ON THE RIGHT SIDE OF MENU */}
          </Grid>
        </Toolbar>
      </AppBar>

      <CustomDrawer open={open} handleDrawer={handleDrawer} />
    </div>
  );
}

const appBarStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.appBar.appBarColor,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    title: {
      color: theme.palette.appBar.title,
      fontSize: 28,
      fontWeight: "500",
      letterSpacing: "3px",
    },
    menuText: {
      color: theme.palette.appBar.title,
      fontSize: 20,
      letterSpacing: "3px",
      "&:hover": {
        color: theme.palette.appBar.hamburgerMenu,
      },
    },
    menuTextContainer: {
      marginLeft: 4,
      marginRight: 20,
    },
    text: {
      color: theme.palette.appBar.title,
      fontSize: 16,
      letterSpacing: "6px",
    },
    textHover: {
      color: theme.palette.appBar.hamburgerMenu,
      fontSize: 16,
      letterSpacing: "6px",
    },
    icon: {
      color: theme.palette.appBar.buttonColor,
      fontSize: 28,
    },
    iconHover: {
      color: theme.palette.appBar.hamburgerMenu,
      fontSize: 28,
    },
    divider: {
      fontWeight: "600",
      backgroundColor: theme.palette.appBar.divider,
      // marginRight: 10,
      // marginLeft: 10,
    },
    menuButton: {
      color: theme.palette.appBar.hamburgerMenu,
      fontSize: 30,
    },
    gridItem: {
      padding: 10,
    },
  })
);
