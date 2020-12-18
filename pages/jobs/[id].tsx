import { withRouter } from 'next/router'
import useAxios from 'axios-hooks'
import styled from 'styled-components';
import * as React from 'react';

import { MoveUp, Info, Container, Location } from '../../styles';
import { ColorButton, MainButton } from '../../styles/button';

import { GitJob } from '../../models/gitJob';

import Header from '../../sections/header';
import InfoRow from '../../components/infoRow';
import job from '../../components/job';

const CompanyRow = styled.div`
  display: flex;
  flex-grow: 1;
  background: ${({ theme }) => theme.elBg};
  border-radius: 0.6rem;
  overflow: hidden;
  margin-bottom: 3.2rem;
`;

const LogoCompany = styled.div`
  width: 14rem;
  height: 14rem;
  background: url("${({ bg }) => bg}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const RowFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoCompany = styled(RowFlex)`
  padding: 4.2rem 4.3rem 4rem;
`;

const TitleCompany = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.title};
`;

const JobWrap = styled.div`
  background: ${({ theme }) => theme.elBg};
  padding: 4.8rem;
  border-radius: 0.6rem;
`;

const Title = styled.h2`
  font-size: 2.8rem;
`;

const Description = styled.div`
  white-space: pre;
`;

const JobById = ({ router }) => {
  const { id } = router.query
  
  React.useEffect(() => {
    if (id) getJob();
  }, [id]);

  const [{ data, loading, error }, getJob] = useAxios<GitJob>({
    url: `https://jobs.github.com/positions/${id}.json`,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-type': 'application/json',
    }
  }, { manual: true })


  return (
    <>
    <Header />
    <MoveUp>
      {data && (
        <Container>
          <CompanyRow>
            <LogoCompany bg={data.company_logo} />
            <InfoCompany>
              <div>
                <TitleCompany>{data.company}</TitleCompany>
                <Info>{data.company_url}</Info>
              </div>

              <ColorButton as="a" href={data.company_url}>
                Company Site
              </ColorButton>

            </InfoCompany>
          </CompanyRow>

          <JobWrap>
            <RowFlex>
              <div>
                <InfoRow job={data} />
                <Title>{data.title}</Title>
                <Location>{data.location}</Location>
              </div>
              <MainButton type="button">
                Apply Now
              </MainButton>
            </RowFlex>

            <Description dangerouslySetInnerHTML={{ __html: data.description }} />

          </JobWrap>
        </Container>
      )}

    </MoveUp>
    </>
  );
}

export default withRouter(JobById);