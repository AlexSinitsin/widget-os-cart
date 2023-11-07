import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './filterSlider.css'
import cn from 'classnames'
import store from '../../store';
import { setFilteredSliderParam } from '../../actions/actionCreator';

import FilterSliderInputMin from '../filterISliderInputs/filterSliderInputMin';
import FilterSliderInputMax from '../filterISliderInputs/filterSliderInputMax';

const FilterSlider = ({ filtering, filterData }) => {

    const [minValue, setMinValue] = useState(filterData.slider_min_value)
    const [maxValue, setMaxValue] = useState(filterData.slider_max_value)
    const [isClose, setClose] = useState(false)
    const [isCleanSliderData, setCleanSliderData] = useState(true)

    const onChangeInputMin = (minValue) => {
        console.log(minValue)
        if(minValue > maxValue) {
            setMinValue(maxValue)
        } else if (maxValue > minValue && minValue >= filterData.slider_min_value) {
            setMinValue(minValue)
        }
        setCleanSliderData(false)
        store.dispatch(setFilteredSliderParam([minValue, maxValue], filterData.display_name))
        filtering()
    }

    const onChangeInputMax = (maxValue) => {
        console.log(maxValue)
        if(maxValue < minValue) {
            setMaxValue(minValue)
            setCleanSliderData(true)
        } else if (maxValue > minValue && maxValue <= filterData.slider_max_value){
            setMaxValue(maxValue)
        }
        setCleanSliderData(false)
        store.dispatch(setFilteredSliderParam([minValue, maxValue], filterData.display_name))
        filtering()
    }


    const onChangeSlider = ([minValue, maxValue]) => {
        setMinValue(minValue)
        setMaxValue(maxValue)
        setCleanSliderData(false)
        store.dispatch(setFilteredSliderParam([minValue, maxValue], filterData.display_name))
        filtering()
    }

    const toggleOpenCloseFilter = () => {
        setClose(!isClose)
    }

    const cleanSliderData = () => {
        setMinValue(filterData.slider_min_value)
        setMaxValue(filterData.slider_max_value)
        setCleanSliderData(true)
        store.dispatch(setFilteredSliderParam([filterData.slider_min_value, filterData.slider_max_value], filterData.display_name))
        filtering()
    }

    const filterArrowClass = cn('filter__arrow', {
        'close-block': isClose,
      });
    const filterBlockClass = cn('filter__body', {
        'close': isClose,
      });
    const cleanDataClass = cn('filter__clean-data', {
        'close': isCleanSliderData || (filterData.slider_min_value === minValue && filterData.slider_max_value === maxValue),
      });

    return (
        <div className="filter">
            <div className="filter__title">{filterData.display_name}
                <span className={cleanDataClass} onClick={cleanSliderData}></span>
                <span className={filterArrowClass} onClick={toggleOpenCloseFilter}></span>
            </div>
            <div className={filterBlockClass}>
                <div className="input-block">
                    <span>{filterData.slider_value_prefix}</span>
                    <FilterSliderInputMin filterData={filterData} minValue={minValue} onChangeInputMin={onChangeInputMin}/>
                    <span className="dash">–</span>
                    <span>{filterData.slider_value_prefix}</span>
                    <FilterSliderInputMax filterData={filterData} maxValue={maxValue} onChangeInputMax={onChangeInputMax}/>
                </div>
                <Slider 
                    range
                    className="filter-slider"
                    min={filterData.slider_min_value}
                    max={filterData.slider_max_value}
                    value={[minValue, maxValue]}
                    onChange={onChangeSlider}
                />
                <div className="min-and-max-labels">
                    <span>{`${filterData.slider_value_prefix}${filterData.slider_min_value}`}</span>
                    <span>{`${filterData.slider_value_prefix}${filterData.slider_max_value}`}</span>
                </div>
            </div>
        </div>
    )
}

FilterSlider.propTypes = {
    filterData: PropTypes.object,
    filtering: PropTypes.func,
}

FilterSlider.defaultProps = {
    filterData: {},
    filtering: () => {},
}

export default FilterSlider;
