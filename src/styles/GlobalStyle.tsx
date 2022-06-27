import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import MontserratLight from "../assets/fonts/Montserrat-Light.ttf";
import MontserratRegular from "../assets/fonts/Montserrat-Regular.ttf";
import MontserraMedium from "../assets/fonts/Montserrat-Medium.ttf";
import MontserratBold from "../assets/fonts/Montserrat-Bold.ttf";

const GlobalStyle = createGlobalStyle`
 ${normalize}
 @font-face {
    font-family: "Montserrat";
    src: url('${MontserratLight}');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Montserrat";
    src: url('${MontserratRegular}');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Montserrat";
    src: url('${MontserraMedium}');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Montserrat";
    src: url('${MontserratBold}');
    font-weight: 600;
    font-style: normal;
  }

  html {
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Montserrat', sans-serif;
    font-weight: ${({ theme }) => theme.weight.regular};;
    font-size: ${({ theme }) => theme.fonts.m}
  }

  img {
    max-width: 100%;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
  }
`;

export default GlobalStyle;
