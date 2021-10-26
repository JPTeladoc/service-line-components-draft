import { InjectFont, colors } from "@intouchhealth/cig-components";

import { createGlobalStyle } from "styled-components";

const FONT_FAMILY = "Montserrat";

export const GlobalStyles = () => (
  <>
    <Global />
    <InjectFont family={FONT_FAMILY} />
  </>
);

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  #root {
    height: 100%;
    overflow: auto;
  }
  html,
  body {
    height: 100%;
    font-family: "${FONT_FAMILY}";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    overflow-x: hidden;
    overflow-y: auto;

    @media print {
      overflow-x: auto;
      overflow-y: auto;
      height: auto;
    }
  }
  body {
    min-height: 100%;
  }
  a {
    color: #${colors.T400};
    text-decoration: none;
    &:hover,
    &:active,
    &:focus,
    &:visited {
      outline: none;
    }
  }
`;
