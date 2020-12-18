import styled from 'styled-components';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import { formatDistance } from '../../utils';
import { GitJob } from '../../models/gitJob';

import { Info } from '../../styles';

const InfoRow = styled.div`
  margin-bottom: 1.6rem;

  strong {
    margin: 0 1.2rem;
    font-size: 2.5rem;
    line-height: 1rem;
  }
`;

export default ({ job }: {job: GitJob} ) => (
  <InfoRow>
    <Info>{formatDistanceToNowStrict(new Date(job.created_at), { locale: { formatDistance } })}</Info>
    <Info as="strong">.</Info>
    <Info>{job.type}</Info>
  </InfoRow>
);
