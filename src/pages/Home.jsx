import React from 'react';
import {
  HomeContainer,
  HomeDescription,
  HomeLink,
  HomeTitle,
  HomeWrapper,
} from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
        <HomeTitle>Welcome to the Car Rental</HomeTitle>
        <HomeDescription>Travel comfortably and stylishly!</HomeDescription>
        <HomeLink to="/catalog">Your dream car here</HomeLink>
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
