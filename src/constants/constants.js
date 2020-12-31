import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

import kids from "../assets/img/work/kids.jpg";
import dr from "../assets/img/work/dellridge.jpeg";
import oit from "../assets/img/work/oit.jpg";
import eas from "../assets/img/work/EAS.png";
import uhg from "../assets/img/work/UHG.jpg";
import knowt from "../assets/img/work/knowt.png";
import att from "../assets/img/work/att.jpg";
// Start Landing Page Stuff
export const nameDelay = 1000;
export const nameTransitionDuration = 2000;

export const descriptionDelay = 2000;
export const decriptionTransitionDuration = 2000;

export const descriptionTextDelayArray = [4000, 4000, 4000, 2000, 4000];
// End Landing Page Stuff

// Experience Stuff


export const jobImg = [kids, dr, oit, eas, knowt, uhg, att];
export const jobName = [
  "Kids International Weekend School of NJ",
  "Dellridge Health and Rehabilitation Center",
  "Office of Information Technology at Rutgers University",
  "Enterprise Application Services at Rutgers University",
  "Knowt",
  "United Health Group",
  "AT&T",
];
export const jobTitle = [
  "Assistant Teacher",
  "Dietary Aide",
  "IT Consultant",
  "Web/Mobile App Developer",
  "Mobile App Developer",
  "Full Stack Software Engineer",
  "Associate Sofware Engineer",
];
export const jobDates = [
  "June 2014 - September 2016",
  "September 2015 - August 2018",
  "May 2019 - September 2020",
  "December 2020 - Present",
  "January 2020 - Present",
  "Summer 2020",
  "Summer 2021",
];
export const jobDescr = ["", "", "", "", "", "", ""];

export const drawerWidth = 240;

export const isMobile =
  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <
  465;

export const Link = styled(HashLink)`
  text-decoration: none;
`;
