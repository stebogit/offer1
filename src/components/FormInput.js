import PropTypes from 'prop-types';

function FormInput ({ placeholder, value, label, name, onChange, type = 'text', required = true, ...rest }) {
    return (
        <div className="form-group">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                id={name}
                {...rest}
                className="form-control form-control form-control-a"
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                required={required}
                type={type}
            />
        </div>
    );
}

FormInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.node,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
};

export default FormInput;
