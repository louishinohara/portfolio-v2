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

import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";

import AppBarButton from "./reusable/appBarButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";

export default function MyAppBar() {
  const classes = appBarStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawer()}
          >
            <MenuIcon className={classes.menuButton} />
          </IconButton> */}

          <Grid container alignItems="center" justify="space-between">
            {/* <Grid item>
              <Text className={classes.title} variant="h6" noWrap>
                Louis Shinohara
              </Text>
            </Grid> */}
            {/* START MENU TEXT */}

            <Grid item>
              <Grid container>
                <Grid item className={classes.menuTextContainer}>
                  <Text className={classes.menuText}>Home</Text>
                </Grid>
                <Grid item className={classes.menuTextContainer}>
                  <Text className={classes.menuText}>About</Text>
                </Grid>
                <Grid item className={classes.menuTextContainer}>
                  <Text className={classes.menuText}>Projects</Text>
                </Grid>
                <Grid item className={classes.menuTextContainer}>
                  <Text className={classes.menuText}>Skills</Text>
                </Grid>
                <Grid item className={classes.menuTextContainer}>
                  <Text className={classes.menuText}>Experience</Text>
                </Grid>
                <Grid item className={classes.menuTextContainer}>
                  <Text className={classes.menuText}>Contact</Text>
                </Grid>
              </Grid>
            </Grid>
            {/* END MENU TEXT */}

            {/* START FOR THE TEXT BUTTONS ON THE RIGHT SIDE OF MENU */}
            {isMobile ? null : (
              <Grid item>
                <Grid container>
                  <Grid item>
                    <AppBarButton
                      text={<Text className={classes.text}>LinkedIn</Text>}
                      icon={<LinkedInIcon className={classes.icon} />}
                    />
                  </Grid>
                  <Divider
                    className={classes.divider}
                    orientation="vertical"
                    flexItem
                  />

                  <Grid item>
                    <AppBarButton
                      text={<Text className={classes.text}>GitHub</Text>}
                      icon={<GitHubIcon className={classes.icon} />}
                    />
                  </Grid>
                  <Divider
                    className={classes.divider}
                    orientation="vertical"
                    flexItem
                  />
                  <Grid item>
                    <AppBarButton
                      text={<Text className={classes.text}>Resume</Text>}
                      icon={<DescriptionIcon className={classes.icon} />}
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
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
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
    menuTextContainer:{
      marginLeft: 8,
      marginRight: 8
    },
    text: {
      color: theme.palette.appBar.title,
      fontSize: 16,
      letterSpacing: "6px",
      "&:hover": {
        color: theme.palette.appBar.hamburgerMenu,
      },
    },
    icon: {
      color: theme.palette.appBar.buttonColor,
      fontSize: 28,
      "&:hover": {
        color: theme.palette.appBar.hamburgerMenu,
      },
    },
    divider: {
      fontWeight: "600",
      backgroundColor: theme.palette.appBar.divider,
      marginRight: 10,
      marginLeft: 10,
    },
    menuButton: {
      color: theme.palette.appBar.hamburgerMenu,
      fontSize: 30,
    },
  })
);

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography as Text,
//   Grid,
//   createStyles,
//   Divider,
// } from "@material-ui/core";
// import { drawerWidth, isMobile } from "../constants/constants";
// import CustomDrawer from "./Drawer";

// import clsx from "clsx";
// import MenuIcon from "@material-ui/icons/Menu";

// import AppBarButton from "./reusable/appBarButton";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import DescriptionIcon from "@material-ui/icons/Description";

// export default function MyAppBar() {
//   const classes = appBarStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawer = () => {
//     setOpen(!open);
//   };

//   return (
//     <div className={classes.grow}>
//       <AppBar
//         position="static"
//         className={clsx(classes.appBar, {
//           [classes.appBarShift]: open,
//         })}
//       >
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             onClick={() => handleDrawer()}
//           >
//             <MenuIcon className={classes.menuButton} />
//           </IconButton>

//           <Grid container alignItems="center" justify="space-between">
//             <Grid item>
//               <Text className={classes.title} variant="h6" noWrap>
//                 Louis Shinohara
//               </Text>
//             </Grid>
//             {/* START FOR THE TEXT BUTTONS ON THE RIGHT SIDE OF MENU */}

//             {isMobile ? null : (
//               <Grid item>
//                 <Grid container>
//                   <Grid item>
//                     <AppBarButton
//                       text={<Text className={classes.text}>LinkedIn</Text>}
//                       icon={<LinkedInIcon className={classes.icon} />}
//                     />
//                   </Grid>
//                   <Divider
//                     className={classes.divider}
//                     orientation="vertical"
//                     flexItem
//                   />

//                   <Grid item>
//                     <AppBarButton
//                       text={<Text className={classes.text}>GitHub</Text>}
//                       icon={<GitHubIcon className={classes.icon} />}
//                     />
//                   </Grid>
//                   <Divider
//                     className={classes.divider}
//                     orientation="vertical"
//                     flexItem
//                   />
//                   <Grid item>
//                     <AppBarButton
//                       text={<Text className={classes.text}>Resume</Text>}
//                       icon={<DescriptionIcon className={classes.icon} />}
//                     />
//                   </Grid>
//                 </Grid>
//               </Grid>
//             )}
//             {/* END FOR THE TEXT BUTTONS ON THE RIGHT SIDE OF MENU */}
//           </Grid>
//         </Toolbar>
//       </AppBar>

//       <CustomDrawer open={open} handleDrawer={handleDrawer} />
//     </div>
//   );
// }

// const appBarStyles = makeStyles((theme) =>
//   createStyles({
//     appBar: {
//       backgroundColor: theme.palette.appBar.appBarColor,
//       transition: theme.transitions.create(["margin", "width"], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//     },
//     appBarShift: {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: drawerWidth,
//       transition: theme.transitions.create(["margin", "width"], {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     },
//     title: {
//       color: theme.palette.appBar.title,
//       fontSize: 28,
//       fontWeight: "500",
//       letterSpacing: "3px",
//     },
//     text: {
//       color: theme.palette.appBar.title,
//       fontSize: 16,
//       letterSpacing: "6px",
//       "&:hover": {
//         color: theme.palette.appBar.hamburgerMenu,
//       },
//     },
//     icon: {
//       color: theme.palette.appBar.buttonColor,
//       fontSize: 28,
//       "&:hover": {
//         color: theme.palette.appBar.hamburgerMenu,
//       },
//     },
//     divider: {
//       fontWeight: "600",
//       backgroundColor: theme.palette.appBar.divider,
//       marginRight: 10,
//       marginLeft: 10,
//     },
//     menuButton: {
//       color: theme.palette.appBar.hamburgerMenu,
//       fontSize: 30,
//     },
//   })
// );
