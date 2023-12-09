import { useSelector } from 'react-redux';
import { CarsItem } from '../CarsItem/CarsItem';
import { selectAdverts } from '../../redux/selectors';
import { CarsItemWrapper, CarsListWrapper } from './CarsList.styled';

export const CarsList = () => {
  const adverts = useSelector(selectAdverts);

  return (
    <CarsListWrapper>
      {adverts.map(item => (
        <CarsItemWrapper key={item.id}>
          <CarsItem item={item} />
        </CarsItemWrapper>
      ))}
    </CarsListWrapper>
  );
};
