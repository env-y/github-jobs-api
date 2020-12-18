import styled from 'styled-components';

import { media } from './utils';

export const Container = styled.div`
  padding: 0 2.4rem;
  margin: 0 auto;

  ${media.sm`
    padding: 0 4rem;
  `}
  ${media.lg`
    max-width: 115rem;
    padding: 0 2rem;
  `}

`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;


export const MoveUp = styled.div`
  margin-top: -4rem;
`;


export const Info = styled.span`
  color: ${({ theme }) => theme.midText};
`;

export const Location = styled.button`
  border: none;
  background: none;
  padding: 0;
  font-weight: bold;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.switchTh};
  text-align: left;
`;
