import styled from 'styled-components';

export const ImageWrapper = styled.div``;

export const ImageCar = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
`;

export const CarItemTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* font-weight: 400;
  font-size: 16px; */
`;

export const CarItemTitle = styled.h2`
  font-weight: 400;
  font-size: 16px;
`;

export const CarItemTitleSpan = styled.span`
  color: var(--color-text-second);
`;

export const CarItemPrice = styled.p`
  font-size: 16px;
`;

export const CarItemListInfo = styled.ul`
  margin-top: 8px;
  color: rgba(18, 20, 23, 0.5);
`;

export const CarItemListInfoItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.5);
    padding-right: 6px;
    margin-right: 6px;
  }
`;

export const CarItemButton = styled.button`
  padding: 12px;
  background-color: var(--color-button);
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 600;
  color: var(--color-button-text);
  margin-top: 28px;
  border-radius: 12px;
  border: none;
  display: inline-block;
  transition: background 2s, color 2s;
  cursor: pointer;
  &:hover {
    background-color: var(--color-button-hover);
  }
`;

export const CarItemHeart = styled.svg`
  width: 18px;
  height: 18px;
  /* position: absolute;
  top: 14px;
  right: 14px; */
`;
