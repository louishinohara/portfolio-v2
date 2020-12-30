import { HashLink } from 'react-router-hash-link';
import styled from "styled-components";

export const drawerWidth = 240;

export const isMobile =
  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <
  465;

  export const Link = styled(HashLink)`
  text-decoration: none;
`;



