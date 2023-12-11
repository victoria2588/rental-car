import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  border-radius: 4px;
  padding: 12px;
  font-weight: 700;
  font-size: 24px;

  &:hover,
  &:focus {
    color: darkviolet;
  }

  &.active {
    color: white;
  }
`;
