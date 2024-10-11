import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    user-select: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &:-webkit-scrollbar {
  display: none;
}
-ms-overflow-style: none;
  scrollbar-width: none;
  }
`;
