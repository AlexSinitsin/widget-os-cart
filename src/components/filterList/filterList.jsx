import React, { useState } from 'react';
import PropTypes from 'prop-types';
import store from '../../store';

import './filterList.css';
import Checkbox from '../checkbox/checkbox';

import { setFilteredListParam } from '../../actions/actionCreator';
import FilterInput from '../filterInput/filterInput';
import cn from 'classnames'

const FilterList = ({ filtering, filterData }) => {
  
    const [isClose, setClose] = useState(false)
    const [valueOfInput, setValue] = useState('')

    const toggleOpenCloseFilter = () => {
        setClose(!isClose)
    }

    const filterArrowClass = cn('filter__arrow', {
        'close-block': isClose,
    });
    const filterBlockClass = cn('filter__body', {
        'close': isClose,
    });

    const onChangeInput = (value) => {
        console.log(value)
        setValue(value)
    }

    const onChangeCheckbox = (value) => {
        store.dispatch(setFilteredListParam(value, filterData))
        filtering()
    }
    
    return (
        <div className="filter">
            <div className="filter__title">{filterData.display_name}<span className={filterArrowClass} onClick={toggleOpenCloseFilter}></span></div>
            <div className={filterBlockClass}>
                <FilterInput filterDisplayName={filterData.display_name} onChangeInput={onChangeInput}/>
                <div className="checkbox-box">
                    {filterData.list_variants.filter(item => valueOfInput ? item.display_name.includes(valueOfInput) : item)
                    .map(item => <Checkbox item={item} key={item.unique_id} onChangeCheckbox={onChangeCheckbox}/>)}
                </div>
            </div>
        </div>
    )
}

FilterList.propTypes = {
    filterData: PropTypes.object,
    filtering: PropTypes.func,
}

FilterList.defaultProps = {
    filterData: {},
    filtering: () => {},
}

export default FilterList;