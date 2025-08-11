// StateSelect.js
import React from 'react';
import { State } from 'country-state-city';

const StateSelect = ({ countryCode, onStateChange }) => {
  const states = State.getStatesOfCountry(countryCode);

  return (
    <select onChange={(e) => onStateChange(e.target.value)}>
      <option value="">Select State</option>
      {states.map((state) => (
        <option key={state.isoCode} value={state.isoCode}>
          {state.name}
        </option>
      ))}
    </select>
  );
};

export default StateSelect;
