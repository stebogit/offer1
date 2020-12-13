import PropTypes from 'prop-types';

function PropertiesInput ({ placeholder, value, label, name, onChange }) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                className="form-control form-control-sm form-control-a"
                name={name}
                onKeyPress={numbersOnly}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
            />
        </div>
    );
}

function numbersOnly (e) {
    if (isNaN(e.key)) {
        e.preventDefault();
        e.stopPropagation();
    }
}

PropertiesInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default PropertiesInput;
