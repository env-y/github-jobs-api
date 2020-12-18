import styled from 'styled-components';
import * as React from 'react';

const Overlay = styled.div`
  z-index: 3;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.black};
  opacity: 0.5;
`;

const Modal = styled.div`
  background-color: ${({ theme }) => theme.elBg};
  border-radius: .6rem;
  display: block;
  
  width: 32.7rem;
  max-width: 98%;
  
  max-height: 98%;
  
  position: fixed;
  
  z-index: 4;
  
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default ({ children, isOpen, onClose }) => {
  const refModal = React.useRef<HTMLDivElement>();
  const outsideClick = (e: MouseEvent) => {
    if (refModal?.current && !refModal.current.contains(e.target as Node)) {
      onClose();
      document.removeEventListener('mousedown', outsideClick, false);
    }
  }
  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', outsideClick, false);
    } else {
      document.removeEventListener('mousedown', outsideClick, false);
    }
    return () => document.removeEventListener('mousedown', outsideClick, false);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <Overlay></Overlay>

      <Modal ref={refModal}>
        {children}
      </Modal>
    </>
  )
}