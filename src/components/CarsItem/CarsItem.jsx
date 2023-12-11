import React, { useState } from 'react';
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
import Modal from '../Modal/Modal';
import CardModal from 'components/Modal/CardModal';

export const CarsItem = ({ item }) => {
  const [, city, country] = item.address.split(',');
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const favorites = useSelector(selectFavorites);
  const handleClick = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <ImageWrapper>
        <ImageCar src={item.img} alt={`${item.make} ${item.model}`} />
        <>
          {!favorites.includes(item.id) && (
            <CarItemHeart
              onClick={() => dispatch(toggleFavoriteAdverts(item.id))}
            >
              <use href={`${sprite}#heart1`}></use>
            </CarItemHeart>
          )}
          {favorites.includes(item.id) && (
            <CarItemHeart
              onClick={() => dispatch(toggleFavoriteAdverts(item.id))}
            >
              <use href={`${sprite}#heart2`}></use>
            </CarItemHeart>
          )}
        </>
      </ImageWrapper>
      <CarItemTitleWrapper>
        <CarItemTitle>
          {item.make} <CarItemTitleSpan>{item.model}</CarItemTitleSpan>,{' '}
          {item.year}
        </CarItemTitle>
        <CarItemPrice>{item.rentalPrice}</CarItemPrice>
      </CarItemTitleWrapper>
      <CarItemListInfo>
        <CarItemListInfoItem>{city}</CarItemListInfoItem>
        <CarItemListInfoItem>{country}</CarItemListInfoItem>
        <CarItemListInfoItem>{item.rentalCompany}</CarItemListInfoItem>
        <CarItemListInfoItem>{item.type}</CarItemListInfoItem>
        <CarItemListInfoItem>{item.model}</CarItemListInfoItem>
        <CarItemListInfoItem>{item.id}</CarItemListInfoItem>
        <CarItemListInfoItem>{item.functionalities?.[0]}</CarItemListInfoItem>
      </CarItemListInfo>
      <CarItemButton onClick={handleClick}>Learn more</CarItemButton>{' '}
      {isOpenModal && (
        <Modal closeModal={handleClick}>
          <CardModal car={{ ...item, city, country }} />
        </Modal>
      )}
    </>
  );
};
