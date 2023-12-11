import styled from 'styled-components';
// import { query, colors } from '../../helpers';
// import { Btn } from '../GlobalStyle';

export const Wrapper = styled.div`
  max-width: 461px;
  max-height: 80vh;
  overflow: auto;
`;

export const ImgWrap = styled.div`
  overflow: hidden;
  width: 100%;
  height: 248px;
  border-radius: 14px;
  width: 461px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Info = styled.h2`
  margin-top: 14px;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 500;
  color: #121417;

  & span {
    color: #3470ff;
  }
`;

export const AdditionalList = styled.ul`
  margin-top: 8px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  font-weight: 400;
`;

export const AdditionalItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    padding-right: 6px;
  }
`;

export const Text = styled.p`
  margin-top: 14px;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 400;
  color: #121417;
`;

export const Title = styled.h3`
  margin-top: 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  color: #121417;
`;

export const Box = styled.ul`
  margin-top: 8px;
`;

export const BoxItem = styled.li`
  display: inline-block;
  margin-bottom: 8px;
  padding: 7px 14px;
  font-size: 12px;
  line-height: 1.5;
  color: #363535;
  background-color: #f9f9f9;
  border-radius: 35px;

  &:not(:last-child) {
    margin-right: 8px;
  }

  & span {
    color: #3470ff;
    font-weight: 600;
  }
`;

export const BoxP = styled.p`
  display: inline-block;
  margin-bottom: 8px;
  padding: 7px 14px;
  font-size: 12px;
  line-height: 1.5;
  color: #363535;
  background-color: #f9f9f9;
  border-radius: 35px;

  &:not(:last-child) {
    margin-right: 8px;
  }

  & span {
    color: #3470ff;
    font-weight: 600;
  }
`;

export const Link = styled.a`
  padding: 12px;
  background-color: #3470ff;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 600;
  color: #ffffff;
  border-radius: 12px;
  border: none;
  display: inline-block;
  transition: background 0.4s, color 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #0b44cd;
  }
  text-decoration: none;
  display: block;
  margin-top: 30px;
  text-align: center;
  width: 168px;
`;
