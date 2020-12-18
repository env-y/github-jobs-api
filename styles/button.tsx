import styled from 'styled-components';
import { transparentize } from 'polished';

export const DefaultButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 1.6rem 2rem;
  background: none;
  ${({ small }) => small && `
    padding: 1.4rem;
    svg {
      display: block;
    }
  `}

  ${({ block }) => block && `
    width: 100%;
  `}
`;

export const MainButton = styled(DefaultButton)`
  background-color: ${({ theme }) => theme.switchTh};
  color: ${({ theme }) => theme.white};
`;

export const ColorButton = styled(DefaultButton)`

  background-color: ${({ theme }) => transparentize(0.9, theme.button)};
  color: ${({ theme }) => theme.button};

  &:hover {
    background-color: ${({ theme }) => transparentize(0.65, theme.button)};
  }
`;
