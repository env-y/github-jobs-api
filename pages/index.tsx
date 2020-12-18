import * as React from 'react';
import Head from 'next/head'
import styled from 'styled-components';
import useAxios from 'axios-hooks'

import styles from '../styles/Home.module.css'
import { media } from '../styles/utils';
import { ThemeContext } from '../store'
import { Container, Row, MoveUp } from '../styles';
import Header from './sections/header';
import Filter from './sections/filter';
import Job from './components/job';
import { GitJob } from '../models/gitJob';

const RowJobs = styled(Row)`
  align-items: stretch;
  justify-content: flex-start;

  ${media.sm`
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  `}

  ${media.md`
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  `}

`;


export default function Home() {
  const [{ data, loading, error }, search] = useAxios<GitJob[]>({
    url: 'https://jobs.github.com/positions.json',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-type': 'application/json',
    }
  })

  const onSearch = (params) => {
    search({
      params,
    })
  }

  console.log(data)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <MoveUp>
          <Filter onSearch={onSearch} />
          <Container>
            <RowJobs>
              {data?.map(job => <Job key={job.id} job={job} />)}
            </RowJobs>
          </Container>
        </MoveUp>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
