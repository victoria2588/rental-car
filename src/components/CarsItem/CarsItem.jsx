import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { toggleFavoriteAdverts } from '../../redux/favoritesSlice';
import {
  CarItemButton,
  CarItemHeart,
  CarItemListInfo,
  CarItemListInfoItem,
  CarItemPrice,
  CarItemTitle,
  CarItemTitleSpan,
  CarItemTitleWrapper,
  ImageCar,
  ImageWrapper,
} from './CarsItem.styled';
import sprite from '../../images/sprite.svg';

export const CarsItem = ({
  item: {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  },
}) => {
  const [, city, country] = address.split(',');
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <ImageWrapper>
        <ImageCar src={img} alt={`${make} ${model}`} />
        <>
          {!favorites.includes(id) && (
            <CarItemHeart onClick={() => dispatch(toggleFavoriteAdverts(id))}>
              <use href={`${sprite}#heart1`}></use>
            </CarItemHeart>
          )}
          {favorites.includes(id) && (
            <CarItemHeart onClick={() => dispatch(toggleFavoriteAdverts(id))}>
              <use href={`${sprite}#heart2`}></use>
            </CarItemHeart>
          )}
        </>
      </ImageWrapper>
      <CarItemTitleWrapper>
        <CarItemTitle>
          {make} <CarItemTitleSpan>{model}</CarItemTitleSpan>, {year}
        </CarItemTitle>
        <CarItemPrice>{rentalPrice}</CarItemPrice>
      </CarItemTitleWrapper>
      <CarItemListInfo>
        <CarItemListInfoItem>{city}</CarItemListInfoItem>
        <CarItemListInfoItem>{country}</CarItemListInfoItem>
        <CarItemListInfoItem>{rentalCompany}</CarItemListInfoItem>
        <CarItemListInfoItem>{type}</CarItemListInfoItem>
        <CarItemListInfoItem>{model}</CarItemListInfoItem>
        <CarItemListInfoItem>{id}</CarItemListInfoItem>
        <CarItemListInfoItem>{functionalities?.[0]}</CarItemListInfoItem>
      </CarItemListInfo>
      <CarItemButton>Learn more</CarItemButton>{' '}
    </>
  );
};
