import styled from 'styled-components';
import Link from 'next/link'
import * as React from 'react';

import { ThemeContext } from '../store';

import { media } from '../styles/utils';
import { Container, Row } from '../styles';
import { ThemeEnum } from '../const';

import LOGO from '../public/images/desktop/logo.svg';
import BG_MOBILE from '../public/images/mobile/bg-pattern-header.svg';
import BG_TABLET from '../public/images/tablet/bg-pattern-header.svg';
import BG_DESKTOP from '../public/images/desktop/bg-pattern-header.svg';
import SUN from '../public/images/desktop/icon-sun.svg';
import MOON from '../public/images/desktop/icon-moon.svg';

const HeadContainer = styled.div`
  padding: 3.2rem 0 7rem;
  background-image: url(${BG_MOBILE});
  background-repeat: no-repeat;
  background-size: cover;

  ${media.sm`
    background-image: url(${BG_TABLET});
    background-position: bottom;
  `}

  ${media.lg`
    padding: 3.2rem 0 8.5rem;
    background-image: url(${BG_DESKTOP});
    background-size: cover;
    background-position-x: left;
  `}
`;

const Switch = styled.div`
  z-index: 0;
  position: relative;
  padding: 0.5rem;
  width: 4.8rem;
  height: 2.4rem;
  background: #FFFFFF;
  border-radius: 1.2rem;
  overflow: hidden;

  input {
    cursor: pointer;
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
  }
`;

const Thumb = styled.span`
  position: absolute;
  cursor: pointer;
  left: 0.5rem;
  display: inline-block;
  height: 1.4rem;
  width: 1.4rem;
  border-radius: 4rem;
  background-color: ${({ theme }) => theme.switchTh};
  transition: all 0.23s;
  input:checked + & {
    transform: translateX(2.4rem);
  }
`;

const RowSwitch = styled(Row)`
  width: 11.2rem;
`;

export default () => (
  <HeadContainer>
    <header>
      <Container>
        <Row>
          <Link href="/">
            <img src={LOGO} alt="logo" />
          </Link>

          <ThemeContext.Consumer>
            {({ toggleTheme, theme }) => (
              <RowSwitch>
                <img src={SUN} />
                <Switch>
                  <input  type="checkbox" onChange={toggleTheme} checked={theme === ThemeEnum.dark} />
                  <Thumb />
                </Switch>
                <img src={MOON} />
              </RowSwitch>
            )}
          </ThemeContext.Consumer>
        </Row>
      </Container>
    </header>
  </HeadContainer>
)