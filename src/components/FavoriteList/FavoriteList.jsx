import { useSelector } from 'react-redux';
import { selectFavorites, selectAdverts } from '../../redux/selectors';
import { CarsItem } from '../CarsItem/CarsItem';
import {
  FavoriteNoCars,
  FavoriteWrapper,
  FavoritesList,
} from './FavoriteList.styled';

export const FavoriteList = () => {
  const adverts = useSelector(selectAdverts);
  const favoritesId = useSelector(selectFavorites);

  let favoritesAdverts = [];
  favoritesAdverts = adverts.filter(item => favoritesId.includes(item.id));
  return (
    <>
      {favoritesAdverts.length ? (
        <FavoritesList>
          {favoritesAdverts.map(item => (
            <FavoriteWrapper key={item.id}>
              <CarsItem item={item} />
            </FavoriteWrapper>
          ))}
        </FavoritesList>
      ) : (
        <FavoriteNoCars>There are no favorites yet</FavoriteNoCars>
      )}
    </>
  );
};
