import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from "styled-components"
import { ThemeContext, Provider } from '../store'
import { ThemeEnum } from '../const'
import { darkTheme, lightTheme } from '../styles/theme';
import GlobalStyle from '../styles/global';

export default class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;700&display=swap" rel="stylesheet" />
        </Head>
        <Provider>
          <ThemeContext.Consumer>
            {({ theme }) => (
              <ThemeProvider theme={theme === ThemeEnum.light ? lightTheme : darkTheme}>
                <Component {...pageProps} />
                <GlobalStyle />
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
        </Provider>

      </div>
    )
  }
}