import React from 'react';

const Filter = ({ handleChange, filter }) => {
  return (
    <div>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
};

export default Filter;
