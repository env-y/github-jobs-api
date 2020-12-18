import styled, { css } from 'styled-components';

import { media } from '../styles/utils';

const Wrap = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 2.4rem;
    top: 50%;
    transform: translateY(-50%);
    height: 2.4rem;
    width: 2.4rem;
    display: block;
    ${({ hideIconMobile, icon }) => hideIconMobile ? css`
      ${media.sm`
        background-image: url(${icon});
      `}
    ` : css`
      background-image: url(${icon});
    `}

    background-repeat: no-repeat;
  }
`;

const Input = styled.input`
  width:  100%;
  background: transparent;
  padding: 3rem 2rem 2.8rem 2.4rem;
  ${({ icon, hideIconMobile }) => icon && !hideIconMobile && css`
    padding-left: 5.6rem;
  `}

  ${({ icon, hideIconMobile }) => icon && hideIconMobile && css`
    color: red;
    ${media.sm`
      padding-left: 5.6rem;
    `}
  `}

  font-size: 1.6rem;
  border: none;
`;

interface IProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: string;
  placeholder: string;
  hideIconMobile?: boolean;
}

export default ({ value, onChange, icon, placeholder, hideIconMobile }: IProps) => (
  <Wrap icon={icon} hideIconMobile={hideIconMobile}>
    <Input
      icon={icon}
      hideIconMobile={hideIconMobile}
      placeholder={placeholder}
      defaultValue={value}
      onChange={onChange}
      type="text"
    />
  </Wrap>
);
