import { selectAdverts } from '../../redux/selectors';
import { CarsItem } from '../CarsItem/CarsItem';
import { CarsItemWrapper, CarsListWrapper } from './CarsList.styled';
import { useSelector } from 'react-redux';

export const CarsList = () => {
  const adverts = useSelector(selectAdverts);

  return (
    <>
      <CarsListWrapper>
        {adverts.map(item => (
          <CarsItemWrapper key={item.id}>
            <CarsItem item={item} />
          </CarsItemWrapper>
        ))}
      </CarsListWrapper>
      {/* <button type="button">Load more</button> */}
    </>
  );
};
