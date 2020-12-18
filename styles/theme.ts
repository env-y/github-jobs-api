export const sizes = {
  xxl: 1920,
  xl: 1440,
  lg: 1024,
  md: 768,
  sm: 468,
  xs: 0,
}

const defaultTheme = {
  switchTh: '#5964E0',
  defaultCheckbox: '#19202D',
  white: '#fff',
  black: '#000',
  midText: '#6E8098',
}

export const lightTheme = {
  ...defaultTheme,
  bg: '#F2F2F2',
  elBg: '#fff',
  title: '#19202D',
  icon: '#6E8098',
  button: '#5964E0',
};

export const darkTheme = {
  ...defaultTheme,
  bg: '#121721',
  elBg: '#19202D',
  title: '#FFFFFF',
  icon: '#FFFFFF',
  button: '#FFFFFF',
};
