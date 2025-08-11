// CitySelect.js
import React from 'react';
import { City } from 'country-state-city';

const CitySelect = ({ countryCode, stateCode, onCityChange }) => {
  const cities = City.getCitiesOfState(countryCode, stateCode);

  return (
    <select onChange={(e) => onCityChange(e.target.value)}>
      <option value="">Select City</option>
      {cities.map((city) => (
        <option key={city.name} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
  );
};

export default CitySelect;
