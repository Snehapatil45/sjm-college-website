// CountrySelect.js
import React from 'react';
import { Country } from 'country-state-city';

const CountrySelect = ({ onCountryChange }) => {
  const countries = Country.getAllCountries();

  return (
    <select onChange={(e) => onCountryChange(e.target.value)}>
      <option value="">Select Country</option>
      {countries.map((country) => (
        <option key={country.isoCode} value={country.isoCode}>
          {country.name}
        </option>
      ))}
    </select>
  );
};

export default CountrySelect;
