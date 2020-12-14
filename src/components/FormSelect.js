import PropTypes from 'prop-types';

function FormSelect ({ options, value, label, defaultValue, name, onChange }) {
    return (
        <div className="form-group">
            {label && <label htmlFor={name}>{label}</label>}
            <select
                id={name}
                className="form-control form-control form-control-a"
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

FormSelect.propTypes = {
    options: PropTypes.array.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.node,
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default FormSelect;
