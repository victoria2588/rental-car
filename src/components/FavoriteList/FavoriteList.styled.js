import styled from 'styled-components';

export const FavoritesList = styled.ul`
  display: flex;
  gap: 50px 29px;
  flex-wrap: wrap;
`;

export const FavoriteWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: calc((100% - 3 * 29px) / 4);
`;

export const FavoriteNoCars = styled.h3`
  text-align: center;
  font-weight: 700;
  margin-top: 50px;
  font-size: 40px;
`;
