import React from 'react';
import { HiBars4 } from 'react-icons/hi2';

function AppointmentRadio({
  heading = '',
  options = ['', ''],
  selectedId = '',
  onSelect = () => {},
}) {
  return (
    <div id="appointment-radio" className="appointment-radio">
      <h4>{heading || 'Heading'}</h4>
      <div className="items-container">
        {options.map((d, i) => (
          <div
            key={`option-${i}`}
            className={`item ${selectedId === d.id && 'selected'}`}
            onClick={() => onSelect(d.id)}
          >
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppointmentRadio;
