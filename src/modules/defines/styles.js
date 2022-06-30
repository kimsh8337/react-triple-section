import { createGlobalStyle } from "styled-components";

export const palette = {
  black: "rgb(58, 58, 58)",
  gray: {
    0: "rgba(58, 58, 58, 0.7)",
    1: "rgba(58, 58, 58, 0.8)",
  },
};

export const size = {
  minWidth: 1200,
};

export const fontSANS = "sans-serif";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${fontSANS};
    color: ${palette.black};
    min-width: ${size.minWidth}px;
  }

  * {
    box-sizing: border-box;
  }
`;
