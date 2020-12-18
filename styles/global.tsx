
import { createGlobalStyle } from "styled-components"
import { normalize } from 'polished';

import { media } from './utils';

export default createGlobalStyle`
  ${normalize()}
  html {
    box-sizing: border-box;
    height: 100%;
    font-size: 62.5%;
    scroll-behavior: smooth;
    background-color: ${({ theme }) => theme.bg};
    font-family: Kumbh Sans;
  }
  body {
    font-size: 1.6rem;
  }
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 2.4rem;
    font-size: 40px;
    line-height: 48px;

    ${media.lg`
      font-size: 5.6rem;
      line-height: 6.4rem;
    `}
  }

  p {
    font-size: 1.6rem;
    line-height: 2.8rem;
    ${media.lg`
      line-height: 2.8rem;
    `}
  }

`