import React, { useState} from 'react';
import PropTypes from 'prop-types';

import './checkbox.css';

const Checkbox = ({ onChangeCheckbox, item }) => {

    const [isChecked, setChecked] = useState(false)

    const toggleCheckbox = () => {
        setChecked(!isChecked );
        onChangeCheckbox(item.display_name)
    }

    return (
        <li className="checkbox filter__checkbox">
            <input id={item.unique_id} checked={isChecked} type="checkbox" onChange={toggleCheckbox}/>
            <label htmlFor={item.unique_id}>{item.display_name}</label>
        </li>
    )

}

Checkbox.propTypes = {
    onChangeCheckbox: PropTypes.func,
    item: PropTypes.object,
}

Checkbox.defaultProps = {
    onChangeCheckbox: () => {},
    item: {},
}

export default Checkbox;