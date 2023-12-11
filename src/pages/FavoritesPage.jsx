import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAdverts } from '../redux/operations';
import { FavoriteList } from '../components/FavoriteList/FavoriteList';
import { FavoriteContainer } from './FavoritesPage.styled';
import { Filter } from 'components/Filter/Filter';

const FavoritePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      <FavoriteContainer>
        <Filter />

        <FavoriteList />
      </FavoriteContainer>
    </>
  );
};

export default FavoritePage;
