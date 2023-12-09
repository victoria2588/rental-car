import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../redux/operations';
import { selectIsLoading, selectError } from '../redux/selectors';
import { Filter } from '../components/Filter/Filter';
import { CarsList } from '../components/CarsList/CarsList';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div>
      <h2>Catalog Page</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}

      <CarsList />
    </div>
  );
};

export default CatalogPage;
