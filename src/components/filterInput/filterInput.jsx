import React from 'react';
import PropTypes from 'prop-types';

import './filterInput.css';

const FilterInput = ({ value, onChangeInput, filterDisplayName }) => {

    return (
        <div className="filter__input">
            <input type="text" value={value} placeholder={`Найти ${filterDisplayName}`} onChange={e => onChangeInput(e.target.value)}/>
        </div>
    )  
}

FilterInput.propTypes = {
    onChangeInput: PropTypes.func,
    filterDisplayName: PropTypes.string,
    value: PropTypes.string,
}

FilterInput.defaultProps = {
    onChangeInput: () => {},
    filterDisplayName: '',
    value: '',
}

export default FilterInput;