import { useSelector } from 'react-redux';
import { CarsItem } from '../CarsItem/CarsItem';
import { selectAdverts } from '../../redux/selectors';

export const CarsList = () => {
  const adverts = useSelector(selectAdverts);

  return (
    <ul>
      {adverts.map(item => (
        <li key={item.id}>
          <CarsItem item={item} />
        </li>
      ))}
    </ul>
  );
};
