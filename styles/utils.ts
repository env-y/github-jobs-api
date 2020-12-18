import { css } from 'styled-components';
import { sizes } from './theme';

export const media = (Object.keys(sizes)).reduce(
  (acc, key) => {
    acc[key] = (...style) => {
      // @ts-ignore
      return css`@media (min-width: ${sizes[key] / 16}em) { ${css(...style)} }`;
    };
    return acc;
  },
  {} as { [index: string]: Function }
);
