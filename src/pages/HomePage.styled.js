import styled from 'styled-components';
import backgroundImg from '../images/bg-image.jpg';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.section`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  height: 100vh;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-size: 20px;
`;

export const HomeWrapper = styled.div`
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
`;

export const HomeTitle = styled.h1`
  font-weight: 700;
  font-size: 60px;
  text-align: center;
`;

export const HomeDescription = styled.p`
  font-size: 32px;
  font-weight: 500;
`;

export const HomeLink = styled(Link)`
  background: #d93bd6;
  border: 1px solid #d93bd6;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 4px;
  box-sizing: border-box;
  color: #fce803;
  display: inline-block;
  outline: 0;
  padding: 10px 25px;
  margin-top: 20px;
  margin-bottom: 15px;
  text-align: center;
  text-decoration: none;
  &:hover,
  &:active {
    background-color: initial;
    color: white;
  }

  &:active {
    opacity: 0.5;
  }
`;
