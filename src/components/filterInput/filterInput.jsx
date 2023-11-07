import React from 'react';
import PropTypes from 'prop-types';

import './filterInput.css';

const FilterInput = ({ onChangeInput, filterDisplayName }) => {

    return (
        <div className="filter__input">
            <input type="text" placeholder={`Найти ${filterDisplayName}`} onChange={e => onChangeInput(e.target.value)}/>
        </div>
    )  
}

FilterInput.propTypes = {
    onChangeInput: PropTypes.func,
    filterDisplayName: PropTypes.string,
}

FilterInput.defaultProps = {
    onChangeInput: () => {},
    filterDisplayName: '',
}

export default FilterInput;