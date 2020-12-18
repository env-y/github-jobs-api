import styled from 'styled-components';
import * as React from 'react';

import { media } from '../styles/utils';
import { Container, Row } from '../styles';
import { MainButton, DefaultButton } from '../styles/button';
import Input from '../components/input';
import Checkbox from '../components/checkbox';
import Modal from '../components/modal';

import SEARCH from '../public/images/desktop/icon-search.svg';
import LOCATION from '../public/images/desktop/icon-location.svg';
import FilterSvg from './filterSvg';
import SearchSvg from './searchSvg';

const FilterRow = styled(Row)`
  background: ${({ theme }) => theme.elBg};
  border-radius: 0.6rem;
  overflow: hidden;
  padding: 0 1.6rem 0 0;
  margin-bottom: 5rem;

  ${media.sm`
    margin-bottom: 4rem;
  `}

  ${media.lg`
    padding: 0 1.6rem;
    margin-bottom: 7rem;
  `}

  
`;

const Col = styled.div`
  ${media.lg`
    &:not(:last-child) {
      border-right: 0.1rem solid hsl(214 17% 51% / 0.2);
    }
  `}

`;

const Col1 = styled(Col)`
  width: 60%;

  ${media.sm`
    width: 30%;
  `}

  ${media.lg`
    width: 40%;
  `}
`;

const Col2 = styled(Col)`
  width: 20%;
  ${media.sm`
    width: 30%;
  `}
  ${media.lg`
    width: 30%;
  `}
`;

const Col3 = styled(Col2)`
  width: 17%;
  
  ${media.sm`
    padding-left: 2rem;
    width: 40%;
  `}
  ${media.lg`
    padding-left: 3.2rem;
    width: 30%;
  `}
`;

const InnerModal = styled.div`
  padding: 2.4rem;
  border-top: 0.1rem solid hsl(214 17% 51% / 0.2);
`;

export const ShowMobile = styled.div`
  ${media.sm`
    display: none;
  `}
`;

export const HideMobile = styled.div`
  display: none;
  ${media.sm`
    display: block;
  `}
`;

export const Separate = styled.div`
  margin-bottom: 2.4rem;
`;

interface IProps {
  onSearch: (params: { 
    description: string,
    location: string,
    full_time: string,
   }) => void;
}

export default ({ onSearch }: IProps) => {
  const [description, setDescription] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [isFullTime, setIsFullTime] = React.useState(false);
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const onClick = () => {
    onSearch({
      description,
      location,
      full_time: isFullTime ? 'on' : null,
    });
    if (isOpenModal) setIsOpenModal(false);
  }

  return (
    <>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <Input
          value={location}
          onChange={({ target }) => setLocation(target.value)}
          icon={LOCATION}
          placeholder="Filter by location…"
        />
        <InnerModal>
          <Separate>
            <Checkbox
              checked={isFullTime}
              onChange={({ target }) => setIsFullTime(target.checked)}
              label="Full Time Only"
            />
          </Separate>
          <MainButton block type="submit" onClick={onClick}>
            Search
          </MainButton>
        </InnerModal>
      </Modal>
      <Container>
        <form onSubmit={(event) => {
          event.preventDefault();
          onClick();
        }}>
          <FilterRow>
            <Col1>
              <Input
                hideIconMobile
                value={description}
                onChange={({ target }) => setDescription(target.value)}
                icon={SEARCH}
                placeholder="Filter by title, companies, expertise…" // TODO для мобилки placeholder Filter by title...
              />
            </Col1>
            <Col2>
              <HideMobile>
                <Input
                  value={location}
                  onChange={({ target }) => setLocation(target.value)}
                  icon={LOCATION}
                  placeholder="Filter by location…"
                />
              </HideMobile>
              <ShowMobile>
                <DefaultButton
                  onClick={() => setIsOpenModal(true)}
                  type="button"
                  small
                >
                  <FilterSvg />
                </DefaultButton>
              </ShowMobile>
            </Col2>
            <Col3>
              <HideMobile>
                <Row>
                  <Checkbox
                    checked={isFullTime}
                    onChange={({ target }) => setIsFullTime(target.checked)}
                    label="Full Time Only"
                  />
                  <MainButton type="submit" onClick={onClick}>
                    Search
                  </MainButton>
                </Row>
              </HideMobile>
              <ShowMobile>
                <MainButton type="button" small><SearchSvg /></MainButton>
              </ShowMobile>
            </Col3>
          </FilterRow>
        </form>
      </Container>
    </>
  )
}