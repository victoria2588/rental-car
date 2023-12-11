import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 99999;
`;

export const ModalBlock = styled.div`
  position: relative;
  padding: 35px 10px;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 24px;
`;

export const Close = styled.svg`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  transition: color 0.3s;
  &:hover {
    color: rgba(18, 20, 23, 0.5);
  }
`;
