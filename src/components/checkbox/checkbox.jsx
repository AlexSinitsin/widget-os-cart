import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import './checkbox.css';

const Checkbox = ({ reset, onChangeCheckbox, item }) => {

    const [isChecked, setChecked] = useState(false)

    useEffect(() => {
        const val = reset()
        setChecked(val)
    }, [reset])

    const toggleCheckbox = () => {
        onChangeCheckbox(item.display_name, setChecked)
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
    reset: PropTypes.func,
}

Checkbox.defaultProps = {
    onChangeCheckbox: () => {},
    item: {},
    reset: () => {},
}

export default Checkbox;