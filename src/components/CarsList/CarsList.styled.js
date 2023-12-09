import styled from 'styled-components';

export const CarsListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 50px;
  column-gap: 29px;
`;

export const CarsItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 274px;
  /* height: 426px; */
  /* gap: 28px; */
  flex-basis: calc((100% - 3 * 29px) / 4);
`;
