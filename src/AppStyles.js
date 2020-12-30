import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
::-webkit-scrollbar{
  width: 10px;
}

::-webkit-scrollbar-track{
  background: #e9e9e9;
}

::-webkit-scrollbar-thumb{
  background: #b8b8b8;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover{
  background: #a0a0a0
}
`;

 