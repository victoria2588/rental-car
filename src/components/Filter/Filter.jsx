import Select from 'react-select';
import makes from '../../services/makes.json';
import { priceSteps } from '../../services/priceStep';
import {
  FilterButton,
  FilterForm,
  FilterInputFrom,
  FilterInputTo,
  FilterText,
  colourStylesCar,
  colourStylesPrice,
} from './Filter.styled';

const optionsBrands = makes.map(make => ({ value: make, label: make }));
const optionsPrice = priceSteps().map(priceStep => ({
  value: priceStep,
  label: `To ${priceStep}$`,
}));

export const Filter = () => {
  return (
    <FilterForm>
      <label>
        <FilterText>Car brand</FilterText>
        <Select
          components={{
            IndicatorSeparator: null,
          }}
          placeholder="Enter the text"
          options={optionsBrands}
          styles={colourStylesCar}
        />
      </label>
      <label>
        <FilterText>Price/ 1 hour</FilterText>
        <Select
          components={{ IndicatorSeparator: null }}
          placeholder="To $"
          options={optionsPrice}
          styles={colourStylesPrice}
        />
      </label>
      <label>
        <FilterText>Сar mileage / km</FilterText>
        <div>
          <FilterInputFrom placeholder="From" />
          <FilterInputTo placeholder="To" />
        </div>
      </label>
      <FilterButton>Search</FilterButton>
    </FilterForm>
  );
};
