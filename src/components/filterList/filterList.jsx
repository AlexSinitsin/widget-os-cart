import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import store from '../../store';

import './filterList.css';
import Checkbox from '../checkbox/checkbox';

import { setFilteredListParam } from '../../actions/actionCreator';
import FilterInput from '../filterInput/filterInput';
import cn from 'classnames';

const FilterList = ({ filterParam, value, filtering, filterData }) => {
  const [isClose, setClose] = useState(false);
  const [valueOfInput, setValue] = useState('');
  const [isCleanListValue, setCleanListValue] = useState(true);

  useEffect(() => {
    if (value !== 'flag') {
      setValue('');
    }
  }, [value]);

  const toggleOpenCloseFilter = () => {
    setClose(!isClose);
  };

  const filterArrowClass = cn('filter__arrow', {
    'close-block': isClose
  });
  const filterBlockClass = cn('filter__body', {
    close: isClose
  });
  const cleanDataClass = cn('filter__clean-data', {
    close: isCleanListValue
  });

  const onChangeInput = (value) => {
    setValue(value);
    setCleanListValue(false);
    if (value === '') {
      setCleanListValue(true);
    }
  };
  const cleanInput = () => {
    setCleanListValue(true);
    setValue('');
  };

  const onChangeCheckbox = (value, setChecked) => {
    store.dispatch(setFilteredListParam(value, filterData));
    setChecked(filterParam.data.includes(value));
    filtering();
  };

  return (
    <div className="filter">
      <div className="filter__title">
        {filterData.display_name}
        <span className={filterArrowClass} onClick={toggleOpenCloseFilter}></span>
      </div>
      <div className={filterBlockClass}>
        <div className="filter-input-wrapper">
          <FilterInput
            value={valueOfInput}
            filterDisplayName={filterData.display_name}
            onChangeInput={onChangeInput}
          />
          <span className={cleanDataClass} onClick={cleanInput}></span>
        </div>
        <div className="checkbox-box">
          {filterData.list_variants
            .filter((item) => item.display_name.toLowerCase().includes(valueOfInput.toLowerCase()))
            .map((item) => (
              <Checkbox
                reset={() => filterParam.data.includes(item.display_name)}
                item={item}
                key={item.unique_id}
                onChangeCheckbox={onChangeCheckbox}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

FilterList.propTypes = {
  filterData: PropTypes.object,
  filtering: PropTypes.func,
  value: PropTypes.number,
  filterParam: PropTypes.object
};

FilterList.defaultProps = {
  filterData: {},
  filtering: () => {},
  value: 0,
  filterParam: {}
};

export default FilterList;
