import React from 'react';
import { StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        <StyledNavLink to="/favorites">Favorite</StyledNavLink>
      </nav>
    </>
  );
};
