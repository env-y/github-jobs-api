import styled from 'styled-components';
import Link from 'next/link';

import { GitJob } from '../models/gitJob';

import { Row, Info, Location } from '../styles';
import { media } from '../styles/utils';

import InfoRow from './infoRow';

const Title = styled.div`
  margin-bottom: 1.7rem;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.title};
  &:hover {
    color: ${({ theme }) => theme.midText};
  }
`;


const Block = styled.div`
  position: relative;
  cursor: pointer;
  min-height: 22.8rem;
  margin-bottom: 6.5rem;
  padding: 4.9rem 3.2rem 3.2rem;
  background-color: ${({ theme }) => theme.elBg};
  border-radius: 0.6rem;

  width: 100%;
  ${media.sm`
    width: calc(100% / 2 - 1rem);
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  `}

  ${media.lg`
    width: calc(100% / 3 - 3rem);
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  `}

`;

const Column = styled(Row)`
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

// TODO: контрасный рандомный бекгроунд у каждой иконки компании
const Icon = styled.div`
  position: absolute;
  left: 3.2rem;
  top: -2.5rem;
  height: 5rem;
  width: 5rem;
  background-color: #fff;
  background-image: url("${({ img }) => img}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: .3rem;
  background-origin: content-box;
  border: 0.1rem solid ${({ theme }) => theme.switchTh};
  border-radius: 1.5rem;
`;

const Main = styled.div`
  margin-bottom: 1.6rem;
`;

const Trunc = (text: string) => {
  if (text.length < 50) return <Title>{text}</Title>;
  return <Title title={text}>{text.substr(0, 50)}...</Title>
}

export default ({ job }: { job: GitJob }) => (
  <Block>
    <Column>
      <Icon img={job.company_logo} />
      <Main>
        <InfoRow job={job} />
        
        <Link href="/jobs/[id]" as={`/jobs/${job.id}`}>
          {Trunc(job.title)}
        </Link>
        <Info>{job.company}</Info>
      </Main>
      <Location type="button">{job.location}</Location>
    </Column>
  </Block>
);
