import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography as Text,
  MenuItem,
  Badge,
  Grid,
  Button,
  useScrollTrigger,
  Slide,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LandingPage from "../pages/LandingPage/LandingPage"
import MyAppBar from "./AppBar";
import AboutPage from "../pages/About/About";
import ProjectsPage from "../pages/Projects/Projects";
import SkillsPage from "../pages/Skills/Skills";
import ExperiencePage from "../pages/Experience/Experience";
import ExperienceComponentt from '../pages/Experience/Experiences';
import ContactPage from "../pages/Contact/Contact";
// https://material-ui.com/components/app-bar/#hide-app-bar
// function HideOnScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({ target: window ? window() : undefined });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// HideOnScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

function AppBody(props) {
  const classes = appBodyStyles();
  return (
    <div className={classes.appBody}>
      {/* <Switch>
        <Route exact path="/home" component={LandingPage} />
        <Route   path="/about" component={AboutPage} />
        <Route   path="/projects" component={ProjectsPage} />
        <Route   path="/skills" component={SkillsPage} />
        <Route   path="/experience" component={ExperiencePage} />
        <Route   path="/contact" component={ContactPage} />
      </Switch> */}
      <LandingPage />
      <CssBaseline/>
      <MyAppBar />
      <AboutPage/>
      <ProjectsPage />
      <SkillsPage />
      <ExperiencePage />
      <ExperienceComponentt />
      <ContactPage/>
      {/* <MyAppBar />
      <Text style={{ marginTop: 999 }}>aaa</Text> */}

      {/* <HideOnScroll {...props}> */}
      {/* </HideOnScroll> */}
    </div>
  );
}

export default AppBody;

const appBodyStyles = makeStyles((theme) =>
  createStyles({
    appBody: {
      backgroundColor: theme.palette.base.backgroundColor,
    },
  })
);
