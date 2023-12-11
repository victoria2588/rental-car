import styled from 'styled-components';

export const CarsListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 29px;
`;

export const CarsItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: calc((100% - 3 * 29px) / 4);
`;
