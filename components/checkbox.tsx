import styled from 'styled-components';

import CHECK_ICON from '../public/images/desktop/icon-check.svg';

const LabelWrap = styled.label`
  display: flex;
  align-items: center;

  input {
    position: absolute;
    opacity: 0;
  }
`;

const Label = styled.span`
  color: ${({ theme }) => theme.title};
  font-weight: bold;
  font-size: 1.6rem;
`;

const Check = styled.div`
  cursor: pointer;
  margin-right: 1.6rem;
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.defaultCheckbox};
  opacity: 0.1;
  transition: all 0.23s;
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    background-color: ${({ theme }) => theme.switchTh};
    opacity: 0.25;
  }

  input:checked + & {
    opacity: 1;
    background-color: ${({ theme }) => theme.switchTh};
    background-image: url(${CHECK_ICON});
  }
`;

export default ({ label , checked, onChange }) => (
  <LabelWrap>
    <input type="checkbox" checked={checked} onChange={onChange} />
    <Check />
    <Label>{label}</Label>
  </LabelWrap>
);
