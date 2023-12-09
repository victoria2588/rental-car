import React from 'react';
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
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  },
}) => {
  const [, city, country] = address.split(',');

  return (
    <>
      <ImageWrapper>
        <ImageCar src={img} alt={`${make} ${model}`} />
        <>
          <CarItemHeart>
            <use href={`${sprite}#heart2`}></use>
          </CarItemHeart>
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
