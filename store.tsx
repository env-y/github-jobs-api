import React from 'react';

import { ThemeEnum } from './const';
export const ThemeContext = React.createContext({
  theme: ThemeEnum.light,
  toggleTheme: () => {}
});

interface IState {
  theme: string;
  toggleTheme: () => void;
}
export class Provider extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      theme: ThemeEnum.light,
      toggleTheme: this.toggleTheme,
    };
  }


  toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === ThemeEnum.dark
          ? ThemeEnum.light
          : ThemeEnum.dark,
    }));
  };

render() {
    return (
        <ThemeContext.Provider value={this.state}>
            {this.props.children}
        </ThemeContext.Provider>
    )
 }
}