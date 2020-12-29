import React from "react";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography as Text,
  MenuItem,
  Badge,
  Grid,
  createStyles,
  Divider,
  Drawer,
  List,
} from "@material-ui/core";

import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";

import AppBarButton from "./reusable/appBarButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";

const drawerWidth = 240;

function CustomDrawer({ open, handleDrawer }) {
  const classes = drawerStyles();
  const theme = useTheme();
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawer}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default CustomDrawer;

const drawerStyles = makeStyles((theme) =>
  createStyles({
    // appBar: {
    //   backgroundColor: theme.palette.appBar.appBarColor,
    //   transition: theme.transitions.create(["margin", "width"], {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.leavingScreen,
    //   }),
    // },
    // appBarShift: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    //   transition: theme.transitions.create(["margin", "width"], {
    //     easing: theme.transitions.easing.easeOut,
    //     duration: theme.transitions.duration.enteringScreen,
    //   }),
    // },
    // title: {
    //   color: theme.palette.appBar.title,
    //   fontSize: 28,
    //   fontWeight: "500",
    //   letterSpacing: "3px",
    // },
    // text: {
    //   color: theme.palette.appBar.title,
    //   fontSize: 16,
    //   letterSpacing: "6px",
    //   "&:hover": {
    //     color: theme.palette.appBar.hamburgerMenu,
    //   },
    // },
    // icon: {
    //   color: theme.palette.appBar.buttonColor,
    //   fontSize: 28,
    //   "&:hover": {
    //     color: theme.palette.appBar.hamburgerMenu,
    //   },
    // },
    // divider: {
    //   fontWeight: "600",
    //   backgroundColor: theme.palette.appBar.divider,
    //   marginRight: 10,
    //   marginLeft: 10,
    // },
    // menuButton: {
    //   color: theme.palette.appBar.hamburgerMenu,
    //   fontSize: 30,
    // },

    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
  })
);
