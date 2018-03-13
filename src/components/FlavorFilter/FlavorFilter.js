import React from 'react';
import { func, string } from 'prop-types';
import Select from '../Select/Select';

const FlavorFilter = ({ flavor, onChange }) => {
  const options = [
    { value: "bacon", text: "Bacon Ipsum" },
    { value: "dino", text: "Dino Ipsum" },
    { value: "lit", text: "Lit Ipsum" }
  ];

  return (
    <div className="form-group">
      <label>Flavor &nbsp;</label>
      <Select
        value={flavor}
        options={options}
        onChange={onChange}
      />
    </div>
  );
};

FlavorFilter.propTypes = {
  onChange: func.isRequired,
  flavor: string.isRequired
};

export default FlavorFilter;