import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './filterSliderInputs.css';

const FilterSliderInputMin = ({ onChangeInputMin, filterDisplayName, minValue, filterData }) => {
  const [minVal, setMinValue] = useState(minValue);

  // console.log(value)
  useEffect(() => {
    setMinValue(minValue);
  }, [minValue]);

  const onChange = (e) => {
    if (Number(e.target.value) >= filterData.slider_min_value) {
      setMinValue(minVal);
      onChangeInputMin(Number(e.target.value));
    }
  };

  return (
    <div className="filter__input-slider">
      <input
        type="text"
        value={minVal}
        placeholder={`Найти ${filterDisplayName}`}
        onChange={(event) => onChange(event)}
      />
    </div>
  );
};

FilterSliderInputMin.propTypes = {
  onChangeInputMin: PropTypes.func,
  filterDisplayName: PropTypes.string,
  minValue: PropTypes.number,
  filterData: PropTypes.object
};

FilterSliderInputMin.defaultProps = {
  onChangeInputMin: () => {},
  filterDisplayName: '',
  minValue: '',
  filterData: {}
};

export default FilterSliderInputMin;
