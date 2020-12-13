import React from 'react';
import PropTypes from 'prop-types';

function PropertiesSelect ({ options, value, label, defaultValue, name, onChange }) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select
                id={name}
                className="form-control form-control-sm form-control-a"
                name={name}
                onChange={onChange}
                value={value}
            >
                <option value={defaultValue.value}>{defaultValue.text}</option>
                {options.map((opt, i) =>
                    <option key={i} value={opt.value}>{opt.text}</option>)}
            </select>
        </div>
    );
}

PropertiesSelect.propTypes = {};
PropertiesSelect.defaultProps = {};

export default PropertiesSelect;
