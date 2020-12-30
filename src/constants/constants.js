import { HashLink } from 'react-router-hash-link';
import styled from "styled-components";

// Start Landing Page Stuff 
export const nameDelay = 1000;
export const nameTransitionDuration = 2000;

export const descriptionDelay = 2000;
export const decriptionTransitionDuration = 2000;

export const descriptionTextDelayArray = [4000,4000,4000,2000,4000] 
// End Landing Page Stuff 

export const drawerWidth = 240;

export const isMobile =
  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <
  465;

  export const Link = styled(HashLink)`
  text-decoration: none;
`;



