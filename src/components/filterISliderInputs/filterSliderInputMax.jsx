import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './filterSliderInputs.css';

const FilterSliderInputMax = ({ onChangeInputMax, filterDisplayName, maxValue, filterData }) => {
  const [maxVal, setMaxValue] = useState(maxValue);

  // console.log(value)
  useEffect(() => {
    setMaxValue(maxValue);
  }, [maxValue]);

  const onChange = (e) => {
    if (Number(e.target.value) <= filterData.slider_max_value) {
      setMaxValue(maxValue);
      onChangeInputMax(Number(e.target.value));
    }
  };

  return (
    <div className="filter__input-slider">
      <input
        type="text"
        value={maxVal}
        placeholder={`Найти ${filterDisplayName}`}
        onChange={(event) => onChange(event)}
      />
    </div>
  );
};

FilterSliderInputMax.propTypes = {
  onChangeInputMax: PropTypes.func,
  filterDisplayName: PropTypes.string,
  maxValue: PropTypes.number,
  filterData: PropTypes.object
};

FilterSliderInputMax.defaultProps = {
  onChangeInputMax: () => {},
  filterDisplayName: '',
  maxValue: 100,
  filterData: {}
};

export default FilterSliderInputMax;
