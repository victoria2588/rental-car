import React from 'react';

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
  return (
    <>
      <div>
        <img src={img} alt={`${make} ${model}`} />
        <button>Favorite</button>
      </div>
      <div>
        <p>
          {make} <span>{model}</span>, {year}
        </p>
        <p>{rentalPrice}</p>
      </div>
      <ul>
        <li>{rentalCompany}</li>
        <li>{type}</li>
        <li>{functionalities}</li>
        <li>{address}</li>
        <li>{description}</li>
      </ul>
      <button>Learn more</button>{' '}
    </>
  );
};
